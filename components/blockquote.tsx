import React from 'react';
import Image from 'next/image'

// TO DO: Is it OK to just define colors for text footter etc as done below?
// const Blockquote = ({ quote, image, alt, footer, gold }: { quote: React.ReactNode, footer: React.ReactNode, image?: string, alt?: string, gold?: boolean }) => {

const Blockquote = ({ quote, image, alt, footer, gold, full }: { quote: React.ReactNode, footer: React.ReactNode, image?: string, alt?: string, gold?: boolean,  full?: boolean }) => {

  // Change background color if 'gold is true'

  // const bgColor = gold ?  'bg-ll-gold-50' : 'bg-ll-blue-950'  ;
  // const bgColorImage = gold ? 'bg-ll-gold-50' : 'bg-white' ;
  // const figureSize  = full ? 'w-full' :  'w-1/3';
  // const textColor = gold  ? 'text-black dark:text-ll-blue-200 font-medium' : 'text-ll-gold-50'  ;
  // const footerColor = gold  ?  'text-gray-800 dark:text-ll-blue-50' : 'text-ll-gold-200'  ;

  
  const bgColor = gold ?  'bg-ll-gold-50' : 'bg-ll-sandy border border-solid border-sandy-100 shadow-none py-8 px-12 mt-4'  ;
  const bgColorImage = gold ? 'bg-ll-gold-50' : 'bg-white' ;
  const figureSize  = full ? 'w-full' :  'w-1/3';
  const textColor = gold  ? 'text-black dark:text-ll-blue-200 font-medium' : 'text-black'  ;
  const footerColor = gold  ?  'text-gray-800 dark:text-ll-blue-50' : 'text-ll-gold-600'  ;


  return (
    // Layout 1 if iamge exists
    <div>
    {image ? (
     <blockquote className={`flex flex-wrap w-full border dark:border-none border-dotted rounded type-blockquote ${bgColorImage} dark:bg-gray-900 shadow-lg`}>

         <figure className={`w-full sm:${figureSize}`}>
          <Image
            src={image}
            alt={alt}
            width={768}
            height={468}
            className=" w-full h-full sm:h-48 sm:min-sm:h-48 max-h-96 xmd:w-48 md:h-auto object-cover" 
          />
         </figure>
         <div className="grow w-full sm:w-2/3 p-6 text-center md:text-left space-y-4">
             <p className="font-serif text-2xl font-medium dark:text-sky-100">{quote}</p>
             
             <div className="text-center md:text-right text-red-700 dark:text-sky-300">
               {footer}  
             </div>

         </div> 
     </blockquote>
     ) : (
      
     <blockquote className={`w-full rounded type-blockquote overflow-hidden border-1 border-white border-solid shadow-lg  grow p-6 text-left xmd:text-left space-y-4 ${bgColor} ${textColor} dark:bg-gray-900`} >
               <p className={`text-2xl  ${textColor}`}>
               {quote}
             </p>

             <div className={`text-right ${footerColor} dark:text-sky-400`} >
               {footer}
             </div>

      </blockquote> 
    )}
    </div>

  );
};
export default Blockquote;


