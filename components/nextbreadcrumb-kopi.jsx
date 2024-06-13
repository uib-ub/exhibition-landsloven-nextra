
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
    <nav aria-label="breadcrumb" data-nav="breadcrumb" className="border-b xbg-ll-gold-50 py-1 px-2 nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden text-sm nx-text-gray-500 dark:nx-text-gray-400 contrast-more:nx-text-current">
       <ol className="flex flew-wrap">
        <li className="breadcrumb text-normal p-2 flex justify-center">
          <Link className="-ml-4" href="/" aria-label="link to home/forsiden">
                <Image className="block rounded-full" src="/images/logo_nett.svg" alt="Landsloven logo" width={30} height={30} />
          </Link>

          </li>

          <li  aria-label="breadcrumb-item breadcrumb-item--has-sub-menu" id="dropdown" 
              className={`breadcrumb-item px-2 py-4 absolute mt-4 z-10  ${isVisible ? 'opacity-100 h-auto' : 'opacity-0 h-1 pointer-events-none'} bg-ll-sandy-100 divide-y divide-gray-100 shadow-2xl w-auto dark:bg-gray-700`}
                onClick={toggleVisibility}     >
              <button className="cursor-pointer pt-2 px-1 right align-right float-right"  onClick={toggleVisibility} >Close ✕</button>  
              <ul className="breadcrumb-item__sub-menu px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    {Object.keys(items).map(key => (
                      <li className="breadcrumb-item__sub-menu-item">
                          <Link key={key} className="block px-4 py-0 my-2 hover:text-ll-blue-600 dark:hover:bg-gray-600 dark:hover:text-white text-ll-blue-700 text-base  hover:underline" href={items[key].href}>{items[key].title[lang]}</Link>  
                      </li>
                    ))}
              </ul>
          </li>
          <li>
                      

          

          <ul className="flex flew-wrap">
            {breadcrumbs.map(breadcrumb => (
              <li aria-label="breadcrumb item" className="flex my-1 flex-row flex-wrap" key={breadcrumb.href}>
              
              { (breadcrumb.index !== 1) ? (
                  <span className="flex flex-row flex-wrap  px-1">
                    <Link aria-label="link to current section" key={breadcrumb.href} className="block text-black font-medium text-[15px] font-sans hover:text-ll-blue-500 hover:underline" href={breadcrumb.href}>{breadcrumb.label}</Link>
                    <ArrowRightIcon className="rotate-90  h-6 w-6 mx-1  hover:stroke-ll-blue-700 hover:rotate-270 cursor-pointer px-1 hover:text-ll-blue-700 hover:stroke-ll-blue-700 hover:bg-ll-blue-200"  onClick={toggleVisibility} /> 
                  </span>
               
                ) : (
                  <span   
                      className="flex flex-row flex-wrap  px-1" 
                      onClick={toggleVisibility2} >
                      <span aria-current="page" className="text-[15px] font-sans ">{breadcrumb.label}</span>  
                      <ArrowRightIcon aria-hidden="true" className="rotate-90  h-6 w-6 mx-1 hover:stroke-ll-blue-700 hover:rotate-270 cursor-pointer pt-1 px-1 hover:text-ll-blue-700 hover:stroke-ll-blue-700 hover:bg-ll-blue-200" 
                      onClick={toggleVisibility2} />  
                      
                      <ul aria-label="dropdown for sections" aria-hidden="true"  
                        id="dropdown2" 
                        className={`px-2 py-4 absolute mt-4 z-10 ${isVisible2 ? 'opacity-100 h-auto' : 'opacity-0 h-1 pointer-events-none'} bg-ll-sandy-100 divide-y divide-gray-100 shadow-2xl w-auto dark:bg-gray-700`}
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
          </span>  
                  
                )
              }
              </li>
            
          ))}
        </ul>
       
       
          </li>
      </ol>
      </nav>
  );
};

export default Breadcrumbs;