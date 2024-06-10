import { useRouter } from 'next/router';


import arvefallet from 'config/sections/arvefallet';
import introduksjon from 'config/sections/introduksjon';
import kjopebolken from 'config/sections/kjopebolken';
import kristendomsbolken from 'config/sections/kristendomsbolken';
import landevernsbolken from 'config/sections/landevernsbolken';
import mannhelgebolken from 'config/sections/mannhelgebolken';
import odelsbolken from 'config/sections/odelsbolken';
import prologen from 'config/sections/prologen';
import retterboeter from 'config/sections/retterboeter';
import tingfarebolken from 'config/sections/tingfarebolken';
import tyvebolken from 'config/sections/tyvebolken';
import site from 'config/site';


const useBreadcrumbs = () => {
  const router = useRouter(); 
  const lang  = router === 'en' ? 'en' : 'no'

  const pathSegments = router.pathname.split('/').filter(segment => segment);

  return pathSegments.map((segment, index ) => {
    var href = '/' + pathSegments.slice(0, index + 1).join('/').replace(/\.(no|en)$/, '');
    var seg = segment.replace(/\.(no|en)$/, '')  ;
    var label = seg
    var seksjon = site
    // console.log(router)

    if (index == 0 ) {
      label = site.bolkene.items[seg].title[lang]
      href =  site.bolkene.items[seg].href;
      seksjon = site.bolkene.items[seg]  
      
    }

    //TO DO: Find out why I cant use 'variable for 'seksjon'

    if (index >= 1 ) {
      if (seksjon = tyvebolken) {
        label = tyvebolken.items[label].title[lang]
      }
    }
    

    //TO DO: Check language if we use the title
    return { href, label, index, key: seg+label+index  };
  });
};

export default useBreadcrumbs;


 