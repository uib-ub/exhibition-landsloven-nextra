import Link from 'next/link';
import useBreadcrumbs from '../hooks/usebreadcrumbs';
import { ArrowRightIcon, CloseIcon  } from 'nextra/icons'
import Image from 'next/image'
import site from 'config/site';


import React, { useState } from 'react';
// import { usePathname } from "next/navigation";
 
const items = site.bolkene.items

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the visibility state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <nav className="xbg-ll-gold-50 py-1 px-2 nextra-breadcrumb nx-mt-1.5 nx-flex nx-items-center nx-gap-1 nx-overflow-hidden text-sm nx-text-gray-500 dark:nx-text-gray-400 contrast-more:nx-text-current">
        
       <div className="flex flex-row flex-wrap text-normal p-2">
  
        <Link href="/">
              <Image className="block rounded-full" src="/images/logo_nett.svg" alt="Landsloven logo" width={30} height={30} />
        </Link>
        <div 
            className="cursor-pointer pt-2 px-1 hover:text-ll-blue-700 hover:stroke-ll-blue-700 hover:bg-ll-blue-200" 
            onClick={toggleVisibility}          >
            <ArrowRightIcon className="nx-w-3.5 nx-shrink-0 hover:stroke-ll-blue-700 hover:rotate-90" />  
        </div>
         

        <div id="dropdown" className={`px-2 py-4 absolute xtop-0 z-10 ${isVisible ? 'opacity-100 h-auto' : 'opacity-0 h-1 pointer-events-none'} bg-ll-sandy-100 divide-y divide-gray-100 shadow-2xl w-auto dark:bg-gray-700`}
               onClick={toggleVisibility}     >
            <div className="cursor-pointer pt-2 px-1 right align-right float-right" 
            onClick={toggleVisibility}    >X</div>     
            <div className="px-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                {Object.keys(items).map(key => (
                      <Link className="block px-4 py-0 my-2 hover:text-ll-blue-600 dark:hover:bg-gray-600 dark:hover:text-white text-ll-blue-700 text-base  hover:underline font-medium font-sans" href={items[key].href}>{items[key].title.en}</Link>  
                ))}
            </div>
        </div>


        {breadcrumbs.map(breadcrumb => (
          <div className="flex my-1 flex-row flex-wrap" key={breadcrumb.href}>
          
          { (breadcrumb.index !== 1) ? (
              <Link className="text-black font-medium font-sans hover:text-ll-blue-500 hover:underline" href={breadcrumb.href}>{breadcrumb.label}</Link>
            ) : (
              <div className="flex "><ArrowRightIcon className="nx-w-3.5 nx-shrink-0 m-1" /> {breadcrumb.label}</div> 
            )
          }
        </div> 
        ))}
      </div>
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


// <select id="dropdown" className={`z-10 hidden ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
// {Object.keys(items).map(key => (
//   <option key={key} value={key}>
//     {items[key].title.en} {/* or items[key].title.no if you want the Norwegian title */}
//   </option>
// ))}
// </select>
