import Link from 'next/link';
import useBreadcrumbs from '../hooks/usebreadcrumbs';
import { ArrowRightIcon  } from 'nextra/icons'
import Image from 'next/image'
import site from 'config/site';


// import React, { useEffect, useState } from 'react';
// import { usePathname } from "next/navigation";
 


const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  // const pathname = usePathname();
  const items = site.bolkene.items
  
  return (
    <nav className="bg-ll-gold-50 py-1 px-2 nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden nx-text-sm nx-text-gray-500 dark:nx-text-gray-400 contrast-more:nx-text-current">
      <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
        type="button"> 
          <Image className="block rounded-full" src="/images/logo_nett.svg" alt="Landsloven logo" width={24} height={24} />
      </button>

        <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    
              <div class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              {Object.keys(items).map(key => (
               
            
                <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black font-medium font-sans" href={items[key].href}>{items[key].title.en}</Link>  
              
              
              ))}

              </div>
            </div>



       <ul className="flex flex-row flex-wrap text-normal">
        <li className="flex flex-row flex-wrap"><Link href="/">
        <Image className="block rounded-full" src="/images/logo_nett.svg" alt="Landsloven logo" width={24} height={24} />
          </Link></li>
        {breadcrumbs.map(breadcrumb => (
          <li className="flex my-1" key={breadcrumb.href}>
          <ArrowRightIcon className="nx-w-3.5 nx-shrink-0" /> <title/>  
          { (breadcrumb.index !== 1) ? (
              <Link className="text-black font-medium font-sans" href={breadcrumb.href}>{breadcrumb.label}</Link>
            ) : (
              <span>{breadcrumb.label} <title/></span> 
            )
          }
        </li> 
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;


// return (
//   <div className="nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden nx-text-sm nx-text-gray-500 dark:nx-text-gray-400 contrast-more:nx-text-current">
//     {activePath.map((item, index) => {
//       const isLink = !item.children || item.withIndexPage
//       const isActive = index === activePath.length - 1

//       return (
//         <Fragment key={item.route + item.name}>
//           {index > 0 && <ArrowRightIcon className="nx-w-3.5 nx-shrink-0" />}
//           <div
//             className={cn(
//               'nx-whitespace-nowrap nx-transition-colors',
//               isActive
//                 ? 'nx-font-medium nx-text-gray-700 contrast-more:nx-font-bold contrast-more:nx-text-current dark:nx-text-gray-100 contrast-more:dark:nx-text-current'
//                 : [
//                     'nx-min-w-[24px] nx-overflow-hidden nx-text-ellipsis',
//                     isLink &&
//                       'hover:nx-text-gray-900 dark:hover:nx-text-gray-100'
//                   ]
//             )}
//             title={item.title}
//           >
//             {isLink && !isActive ? (
//               <Anchor href={item.route}>{item.title}</Anchor>
//             ) : (
//               item.title
//             )}
//           </div>
//         </Fragment>
//       )
//     })}
//   </div>

// import Link from 'next/link';
// import useBreadcrumbs from '../hooks/usebreadcrumbs';

// const Breadcrumbs = () => {
//   const breadcrumbs = useBreadcrumbs();

//   return (
//     <nav>
//       <ul>
//         <li><Link href="/">Home</Link></li>
//         {breadcrumbs.map(breadcrumb => (
//           <li key={breadcrumb.href}>
//             {breadcrumb.index}
//             <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumbs;

// // import { useRouter } from 'next/router';
// import Link from 'next/link';

// const generateBreadcrumbs = (pathname) => {
//   const segments = pathname.split('/').filter(segment => segment);
//   return segments.map((segment, index) => {
//     const href = '/' + segments.slice(0, index + 1).join('/');
//     return { href, label: segment };
//   });
// };

// const Breadcrumbs = () => {
//   const router = useRouter();
//   const breadcrumbs = generateBreadcrumbs(router.pathname);
//   console.log(router)

//   return (
//     <nav>
//       <ul>
//         <li><Link href="/" alt="homelink">⌂</Link></li>
//         {breadcrumbs.map(breadcrumb => ( 
         
//           <li key={breadcrumb.href}> | 
//             <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Breadcrumbs;
