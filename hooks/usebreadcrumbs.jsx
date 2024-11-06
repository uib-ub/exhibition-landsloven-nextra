import siteFrontmatter from 'config/siteFrontmatter.json';
import { useRouter } from 'next/router';
import noMeta from '@/pages/_meta.no.json';
import enMeta from '@/pages/_meta.en.json';

const useBreadcrumbs = (folder) => {
  const { locale, pathname } = useRouter();
  const pathSegments = pathname.split('/').filter(segment => segment);
  const meta = locale === 'no' ? noMeta : enMeta;

  // Updated to preserve order from meta file
  const sectionTitles = Object.entries(meta.bolkene?.items || {})
    .map(([key, item]) => ({
      key,
      href: item.href,
      title: item.title
    }));

  return pathSegments.map((segment, index) => {
    const cleanedSegment = segment.replace(/\.(no|en)$/, '');
    const pathUpToHere = pathSegments.slice(0, index + 1).join('/');

    // Simplified first segment logic to only use meta.bolkene.items
    if (index === 0) {
      const metaData = meta.bolkene?.items?.[cleanedSegment];
      return {
        href: metaData?.href || `/${pathUpToHere}`.replace(/\.(no|en)$/, ''),
        label: metaData?.title || cleanedSegment,
        index,
        sectionTitles,
        ...(folder && { folder }),
        id: `breadcrumb-${cleanedSegment}-${index}`
      };
    }

    // Rest of the logic remains the same...
    const defaultBreadcrumb = {
      href: `/${pathUpToHere}`.replace(/\.(no|en)$/, ''),
      label: segment,
      index,
      ...(folder && { folder }),
      id: `breadcrumb-${cleanedSegment}-${index}`
    };

    if (index === 1) {
      const parentSection = pathSegments[0].replace(/\.(no|en)$/, '').toLowerCase();
      const pageData = siteFrontmatter[parentSection]?.[cleanedSegment]?.[locale];
      if (pageData) {
        return {
          ...defaultBreadcrumb,
          label: pageData.title,
          href: pageData.href,
        };
      }
    }

    return defaultBreadcrumb;
  });
};

export default useBreadcrumbs;