import { useRouter } from 'next/router';


import sections from 'components/combindesections'; 
import site from 'config/site';


const useBreadcrumbs = () => {
  const router = useRouter(); 
  const lang  = router === 'en' ? 'en' : 'no'

  const pathSegments = router.pathname.split('/').filter(segment => segment);

  return pathSegments.map((segment, index ) => {
    var href = '/' + pathSegments.slice(0, index + 1).join('/').replace(/\.(no|en)$/, '');
    var seg = segment.replace(/\.(no|en)$/, '')  ;
    var label = seg
    // var seksjon = site
    var folder = 'xxx'
    // console.log(router)

    if (index == 0 ) {
      label = site?.bolkene?.items[seg]?.title[lang]  ?? router === 'Folder' ? 'en' : 'Folder'
      href =  site?.bolkene?.items[seg]?.href ?? '';
      // seksjon = site.bolkene.items[seg] ?? '';
      // return { href, label, index, key: seg+label+index  };
      
    }

    
    if (index == 1 ) {
      // get title by looking it up from 'combinedsections'
      const bolk = pathSegments.slice(0, 1)[0];
      label = sections[bolk]?.items[label].title[lang] ?? router === '…' ? 'en' : '…'
      folder = sections[bolk]?.items;
      // return { href, label, index, folder: sections[bolk].items, key: seg+label+index  };
     }
     return { href, label, index, folder, key: seg+label+index  };
  });
};

export default useBreadcrumbs;


 