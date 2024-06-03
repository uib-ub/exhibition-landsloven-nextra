import Image from 'next/image'

const Quoter = ({  image, alt, quote, name, worktitle }: {  image?: string, alt?: string, tag?: string, quote?: string, name?: string, worktitle?: string }) => {

  return (
    // Layout 1 if iamge exists
    <div>
    {image ? (
     <div className={"flex flex-wrap w-full rounded type-card xoverflow-hidden shadow-lg"}>

         <figure className="w-full sm:w-1/3">
          <Image
            src={image}
            alt={alt}
            width={768}
            height={468}
            className=" w-full h-full sm:h-48 sm:min-sm:h-48 max-h-96 xmd:w-48 md:h-auto  mx-auto object-cover" 
          />
         </figure>
         <div className="grow w-full sm:w-2/3 p-6 text-center md:text-left space-y-4">
             <p className="font-serif text-2xl font-medium dark:text-slate-100">
               {quote}
             </p>
             
             <div className="text-center md:text-right text-red-700 dark:text-sky-400">
               {name}  
             </div>
             <div className="text-slate-700 dark:text-slate-400">
               {worktitle}
             </div> 
         </div> 
     </div>
     ) : (
     <div className="w-full rounded type-card overflow-hidden border-1 border-white border-solid shadow-lg  grow p-6 text-left xmd:text-left space-y-4 bg-red-700 xbg-sky-500 text-white dark:bg-slate-100">
             <p className="text-2xl">
               {quote}
             </p>

             <div className="text-right text-sky-100 dark:text-sky-400">
               {name}
             </div>
             <div className="text-right text-sky-50 dark:text-slate-400">
               {worktitle}
             </div> 
          </div> 
    )}
    </div>

  );
};

export default Quoter;
