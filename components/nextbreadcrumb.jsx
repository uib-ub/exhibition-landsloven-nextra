
import site from 'config/site';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs';
import { ArrowRightIcon } from 'nextra/icons';
import { Fragment, useState } from 'react';
import useBreadcrumbs from '../hooks/usebreadcrumbs';
// import React, { Fragment } from "react"; 
// import { usePathname } from "next/navigation";

const items = site.bolkene.items
// import sections from 'components/combindesections'; 

const BreadCrumbs = () => {
  const breadcrumbs = useBreadcrumbs();
  // console.log(breadcrumbs)
  const items2 = breadcrumbs[1]?.folder ?? false;

  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setIsVisible2(false);
  };

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
    setIsVisible(false);
  };

 


  const { locale, asPath } = useRouter();
  const { frontMatter } = useConfig();

  if (asPath === '/' || frontMatter.breadcrumb === false) return null

  return (
    <nav aria-label="breadcrumb" data-nav="breadcrumb" className="xbg-ll-gold-50 py-1 px-2 nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden text-sm nx-text-gray-500 dark:nx-text-gray-400 contrast-more:nx-text-current">
      <ol className="flex flex-row justify-items-center justify-center xh-10">
        <li className="breadcrumb-item hidden sm:flex my-1 sm:flex-row flex-nowrap justify-items-center justify-items-center "> 
          <Link className="-mt-1 -ml-2" href="/" aria-label="link to home/forsiden">
            <Image className="block rounded-full" src="/images/logo_nett.svg" alt="Landsloven logo" width={30} height={30} />
            {/* ⌂  Home */}
          </Link>
          <span hide-aria="true" className="pl-2 pr-4"> | </span>
        </li>
        {breadcrumbs.map(breadcrumb => (
          <li aria-label="breadcrumb item" className="flex my-1 flex-row flex-nowrap justify-items-center justify-items-center " key={breadcrumb.href}>

            {(breadcrumb.index !== 1) ? (

              <Fragment>
                <Link aria-label="link to current section" key={breadcrumb.href} className="block text-ll-blue-700  font-medium underline text-[15px] mr-2 font-sans hover:text-ll-blue-500 hover:underline dark:text-ll-gold-200" href={breadcrumb.href}>{breadcrumb.label}</Link>

                <ArrowRightIcon className="rotate-90  h-7 w-6 shrink-0 -mt-1 p-0 hover:stroke-ll-blue-700 hover:rotate-270 cursor-pointer px-1 hover:text-ll-blue-700 hover:stroke-ll-blue-700 hover:bg-ll-blue-200"
                  onClick={toggleVisibility} />
                <span hide-aria="true" className="pl-2 pr-4 sm:visible"> | </span>
                <ul className={`px-2 py-4 absolute mt-4 z-10 ${isVisible ? 'opacity-100 h-auto' : 'opacity-0 h-1 pointer-events-none'} bg-ll-sandy-100 divide-y divide-gray-100 shadow-2xl w-auto dark:bg-gray-700`}
                  aria-labelledby="dropdownDefaultButton">
                  <div className="cursor-pointer pt-2 px-1 right align-right float-right"
                    onClick={toggleVisibility} >Close ✕</div>
                  {Object.keys(items).map(key => (
                    <li key={key} className="breadcrumb-item__sub-menu-item">
                      <Link className="block px-4 py-0 my-2 mr- hover:text-ll-blue-600 dark:hover:bg-gray-600 dark:hover:text-white text-ll-blue-700 dark:text-ll-gold-200 text-base hover:underline" href={items[key].href}>{items[key].title[locale]}</Link>
                    </li>
                  ))}
                </ul>
              </Fragment>

            ) : (


              <Fragment>
                <span aria-current="page" className="text-[15px] font-sans  flex flex-row"
                  onClick={toggleVisibility2} >
                  {breadcrumb.label}
                  <ArrowRightIcon className="rotate-90  h-7 w-6 shrink-0 -mt-1 ml-2 p-0 hover:stroke-ll-blue-700 hover:rotate-270 cursor-pointer px-1 hover:text-ll-blue-700 hover:stroke-ll-blue-700 hover:bg-ll-blue-200"
                    onClick={toggleVisibility2} />
                </span>
                <ul aria-label="dropdown for sections" aria-hidden="true"
                  id="dropdown2"
                  className={`px-2 py-4 absolute mt-4 z-10 ${isVisible2 ? 'opacity-100 h-auto' : 'opacity-0 h-1 pointer-events-none'} bg-ll-sandy-100 divide-y divide-gray-100 shadow-2xl w-auto dark:bg-gray-700`}
                  onClick={toggleVisibility2} >
                  <div className="cursor-pointer pt-2 px-1 right align-right float-right"
                    onClick={toggleVisibility2} >Close ✕</div>
                  {items2 && (
                    <li className="px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                      {Object.keys(items2).map(key => (
                        <Link key={key} className="block px-4 my-2  hover:text-ll-blue-600 dark:hover:bg-gray-600 dark:hover:text-white text-ll-blue-700 dark:text-ll-gold-200 text-base  hover:underline"
                          href={items2[key].href}>{items2[key].title[locale]}
                        </Link>
                      ))}
                    </li>
                  )}
                </ul>
              </Fragment>

            )}

          </li>

        ))}



      </ol>
    </nav>
  )
};

export default BreadCrumbs;