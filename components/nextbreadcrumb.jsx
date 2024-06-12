
import { useRouter } from 'next/router';
import Link from 'next/link';
import useBreadcrumbs from '../hooks/usebreadcrumbs';
import { ArrowRightIcon, MenuIcon  } from 'nextra/icons'
// import { XIcon } from '@heroicons/react/outline';
import Image from 'next/image'
import site from 'config/site';
import React, { useState } from 'react';
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
    <nav aria-label="breadcrumb" className="border-b xbg-ll-gold-50 py-1 px-2 nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden text-sm nx-text-gray-500 dark:nx-text-gray-400 contrast-more:nx-text-current">
       <ol className="flex flew-wrap">
        <li className="flex flex-row flex-wrap text-normal p-2">
          <Link className="-ml-4" href="/" aria-label="link to home/forsiden">
                <Image className="block rounded-full ml-0" src="/images/logo_nett.svg" alt="Landsloven logo" width={30} height={30} />
          </Link>
          <span aria-hidden="true"
              className="flex flex-wrap flex-row cursor-pointer pt-1 px-1 hover:text-ll-blue-700 hover:stroke-ll-blue-700 hover:bg-ll-blue-200" 
              onClick={toggleVisibility}          >
              <ArrowRightIcon className="h-5 mx-1 nx-w-3.5 nx-shrink-0 hover:stroke-ll-blue-700 hover:rotate-90" /> 
          </span>
          

          <div aria-hidden="true" aria-label="dropdown for sections" id="dropdown" className={`px-2 py-4 absolute xtop-0 z-10 ${isVisible ? 'opacity-100 h-auto' : 'opacity-0 h-1 pointer-events-none'} bg-ll-sandy-100 divide-y divide-gray-100 shadow-2xl w-auto dark:bg-gray-700`}
                onClick={toggleVisibility}     >
              <div className="cursor-pointer pt-2 px-1 right align-right float-right"  onClick={toggleVisibility} >Close ✕</div>  
              <div className="px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {Object.keys(items).map(key => (
                          <Link key={key} className="block px-4 py-0 my-2 hover:text-ll-blue-600 dark:hover:bg-gray-600 dark:hover:text-white text-ll-blue-700 text-base  hover:underline" href={items[key].href}>{items[key].title[lang]}</Link>  
                    ))}
              </div>
          </div>
                      

          <ul className="flex flew-wrap">
            {breadcrumbs.map(breadcrumb => (
              <li aria-label="breadcrumb item" className="flex my-1 flex-row flex-wrap" key={breadcrumb.href}>
              
              { (breadcrumb.index !== 1) ? (
                  <Link aria-label="link to current section" key={breadcrumb.href} className="block text-black font-medium text-[15px] font-sans hover:text-ll-blue-500 hover:underline" href={breadcrumb.href}>{breadcrumb.label}</Link>
               
                ) : (
                  <span   
                      className="flex flex-row flex-wrap cursor-pointer  px-1" 
                      onClick={toggleVisibility2} >
                      <ArrowRightIcon aria-hidden="true" className="h-5 hover:bg-ll-blue-200 mx-1 block nx-w-3.5 nx-shrink-0 hover:stroke-ll-blue-700 hover:rotate-90" />  
                      <span aria-current="page" className="text-[15px] font-sans ">{breadcrumb.label}</span>
                  </span>  
                )
              }
              </li>
            
          ))}
        </ul>
       
        <ul aria-label="dropdown for sections" aria-hidden="true" aria-label="dropdown for pages" 
                id="dropdown2" 
                className={`px-2 py-4 absolute xtop-0 z-10 ${isVisible2 ? 'opacity-100 h-auto' : 'opacity-0 h-1 pointer-events-none'} bg-ll-sandy-100 divide-y divide-gray-100 shadow-2xl w-auto dark:bg-gray-700`}
                onClick={toggleVisibility2} >
              <div className="cursor-pointer pt-2 px-1 right align-right float-right" 
                  onClick={toggleVisibility2} >Close ✕</div>  
              {items2 && (
              <li className="px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                  {Object.keys(items2).map(key => (
                    <Link key={key} className="block px-4 py-0 my-2  hover:text-ll-blue-600 dark:hover:bg-gray-600 dark:hover:text-white text-ll-blue-700 text-base  hover:underline" 
                        href={items2[key].href}>{items2[key].title[lang]}
                    </Link>  
                  ))}
              </li>
              )}
          </ul>
          </li>
      </ol>
      </nav>
  );
};

export default Breadcrumbs;