import { useRouter } from 'next/router';
// import { XIcon } from '@heroicons/react/outline';
import site from 'config/site';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from 'nextra/icons';
import { useState } from 'react';
import useBreadcrumbs from '/hooks/useBreadcrumbs';
 
// import { usePathname } from "next/navigation";
 
const items = site.bolkene.items
// import sections from 'components/combindesections'; 

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  // console.log(breadcrumbs)
  const items2 = breadcrumbs[1].folder ?? false;

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };
  
  const router = useRouter(); 
  const lang  = router === 'en' ? 'en' : 'no'
  
  return (
 
    <nav aria-label="breadcrumb" className="border-b xbg-ll-gold-50 py-1 px-2  nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden text-sm nx-text-gray-500 dark:nx-text-gray-400 contrast-more:nx-text-current">

       <div className="flex flex-row flex-wrap text-normal p-2">
  
        <Link className="-ml-4" href="/">
              <Image className="block rounded-full ml-0" src="/images/logo_nett.svg" alt="Landsloven logo" width={30} height={30} />
        </Link>
        <div 
            className="flex flex-wrap flex-row cursor-pointer pt-1 px-1 hover:text-ll-blue-700 hover:stroke-ll-blue-700 hover:bg-ll-blue-200" 
            onClick={toggleVisibility}          >
           
            {/* <MenuIcon className="mx-1 nx-w-4.5 nx-shrink-0 path-black svg-black stoke-black hover:stroke-ll-blue-700 hover:rotate-180" />   */}
            <ArrowRightIcon className="h-5 mx-1 nx-w-3.5 nx-shrink-0 hover:stroke-ll-blue-700 hover:rotate-90" /> 
        </div>
         

        <div aria-label="dropdown for sections" id="dropdown" className={`px-2 py-4 h-3 absolute xtop-0 z-10 ${isVisible ? 'opacity-100 h-auto' : 'opacity-0 h-1 pointer-events-none'} bg-ll-sandy-100 divide-y divide-gray-100 shadow-2xl w-auto dark:bg-gray-700`}
               onClick={toggleVisibility}     >
            <div className="cursor-pointer pt-2 px-1 right align-right float-right" 
            onClick={toggleVisibility} >Close ✕</div>  
            <div className="px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
 
                {Object.keys(items).map(key => (
 
                      <Link key={key} className="block px-4 py-0 my-2 hover:text-ll-blue-600 dark:hover:bg-gray-600 dark:hover:text-white text-ll-blue-700 text-base  hover:underline font-medium font-sans" href={items[key].href}>{items[key].title.en}</Link>  
 
                ))}
            </div>
        </div>


        {breadcrumbs.map(breadcrumb => (
          <div className="flex my-1 flex-row flex-wrap" key={breadcrumb.href}>
          
          { (breadcrumb.index !== 1) ? (
              <Link aria-label="link to current section" key={breadcrumb.href} className="block text-black font-medium text-[15px] font-sans hover:text-ll-blue-500 hover:underline" href={breadcrumb.href}>{breadcrumb.label}</Link>
            ) : (
              <div 
                  className="flex flex-row flex-wrap cursor-pointer  px-1" 
                  onClick={toggleVisibility2} >
                  <ArrowRightIcon className="h-5 hover:bg-ll-blue-200 mx-1 block nx-w-3.5 nx-shrink-0 hover:stroke-ll-blue-700 hover:rotate-90" />  
                  <div aria-current="page" className="text-[15px] font-sans ">{breadcrumb.label}</div>
              </div> 
            )
          }
           
        </div> 
        ))}
        
        <div aria-label="dropdown for pages" 
               id="dropdown2" 
               className={`px-2 py-4 absolute xtop-0 z-10 ${isVisible2 ? 'opacity-100 h-auto' : 'opacity-0 h-1 pointer-events-none'} bg-ll-sandy-100 divide-y divide-gray-100 shadow-2xl w-auto dark:bg-gray-700`}
               onClick={toggleVisibility2} >
            <div className="cursor-pointer pt-2 px-1 right align-right float-right" 
                 onClick={toggleVisibility2} >Close ✕</div>  
            {items2 && (
            <div className="px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                {Object.keys(items2).map(key => (
                  <Link key={key} className="block px-4 py-0 my-2  hover:text-ll-blue-600 dark:hover:bg-gray-600 dark:hover:text-white text-ll-blue-700 text-base  hover:underline" 
                      href={items2[key].href}>{items2[key].title[lang]}
                  </Link>  
                ))}
            </div>
            )}
        </div>


      </div>
      </nav>
  );
};

export default Breadcrumbs;