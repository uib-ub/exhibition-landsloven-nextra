import { useRouter } from 'next/router';

import site from 'config/site';

const useBreadcrumbs = () => {
  const router = useRouter();
  const pathSegments = router.pathname.split('/').filter(segment => segment);

  return pathSegments.map((segment, index) => {
    var href = '/' + pathSegments.slice(0, index + 1).join('/').replace(/\.(no|en)$/, '');
    var label = segment.replace(/\.(no|en)$/, '')  ;

    if (index == 0 ) {
      href =  site.bolkene.items[label].href;
      label = site.bolkene.items[label].title.no
    }
    

    //TO DO: Check language if we use the title
    return { href, label, index  };
  });
};

export default useBreadcrumbs;


 