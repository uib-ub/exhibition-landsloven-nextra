import siteFrontmatter from 'config/siteFrontmatter.json';
import { useRouter } from 'next/router';

const useBreadcrumbs = (folder) => {
  const { locale, pathname } = useRouter();
  const pathSegments = pathname.split('/').filter(segment => segment);

  return pathSegments.map((segment, index) => {
    const cleanedSegment = segment.replace(/\.(no|en)$/, '');
    const pathUpToHere = pathSegments.slice(0, index + 1).join('/');

    const defaultBreadcrumb = {
      href: `/${pathUpToHere}`.replace(/\.(no|en)$/, ''),
      label: cleanedSegment,
      index,
      // Only include non-empty values
      ...(folder && { folder }),
      id: `breadcrumb-${cleanedSegment}-${index}`
    };

    if (index === 0) {
      const sectionData = siteFrontmatter[cleanedSegment]?.introduksjon?.[locale];
      if (sectionData) {
        return {
          ...defaultBreadcrumb,
          label: sectionData.title,
          href: sectionData.href,
        };
      }
    }

    if (index === 1) {
      const parentSection = pathSegments[0].replace(/\.(no|en)$/, '');
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