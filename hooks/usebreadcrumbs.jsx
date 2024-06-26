import sections from 'components/combindesections';
import site from 'config/site';
import { useRouter } from 'next/router';

const useBreadcrumbs = () => {
  const { locale, pathname } = useRouter();

  const pathSegments = pathname.split('/').filter(segment => segment);

  return pathSegments.map((segment, index) => {
    var href = '/' + pathSegments.slice(0, index + 1).join('/').replace(/\.(no|en)$/, '');
    var seg = segment.replace(/\.(no|en)$/, '');
    var label = seg
    var folder = ''

    if (index == 0) {
      label = site?.bolkene?.items[seg]?.title[locale] ?? '…'
      href = site?.bolkene?.items[seg]?.href ?? '';
    }

    if (index == 1) {
      // get title by looking it up from 'combinedsections'
      const bolk = pathSegments.slice(0, 1)[0];
      label = sections[bolk]?.items[label]?.title[locale] ?? '…'
      folder = sections[bolk]?.items;
      // return { href, label, index, folder: sections[bolk].items, key: seg+label+index  };
    }
    return { href, label, index, folder, key: seg + label + index };
  });
};

export default useBreadcrumbs;