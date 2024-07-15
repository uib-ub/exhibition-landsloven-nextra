import Image from 'next/image';
import Container from 'components/container'
import React, { Fragment } from "react"; 

const SitatHero = ({ title, ingress, footer, logo  }: { title?: string, ingress?: string, footer?: string, logo?: boolean }) => {
const bgColor =  logo ? 'dark:bg-ll-red-950 min-h-[35vh] sm:min-h-[40vh]' : 'dark:bg-ll-blue-950 min-h-[32vw] sm:min-h-[25vw]';
const smbgColor =  logo ? 'sm:dark:bg-ll-red-950' : 'sm:dark:bg-ll-blue-950';

return (
 
      <div className={`flex has-logo-${logo} bg-ll-gold-50 ${bgColor} relative left-0 right-0 
        dark:sm:bg-[url('/images/banner_overlay-neg.png')] -mx-6 dm:m-0 mb-3 p-8  
        bg-[url('/images/banner_overlay_transp.png')] sm:bg-[url('/images/banner_overlay.png')] sm:bg-contain bg-no-repeat bg-left`}>
        <Container>
        <div className={`flex flex-wrap float-right sm:bg-ll-gold-50 ${smbgColor} sm:pl-4 md:bg-none md:pl-0 sm:w-3/5 min-w-[360px] opacity-50max-w-4xl h-auto center-text-${logo}`}>
            { logo && (
              <Fragment>
               <Image 
                    className="py-0 px-4 -mt-6 mb-5 svglogo block dark:hidden" 
                    src="/images/logo_horizontal.svg" 
                    alt="Landsloven logo" 
                    width={550} 
                    height={100}  />
                
              <Image 
                    className="py-0 px-4 -mt-6 mb-5 svglogo hidden dark:block" 
                    src="/images/logo_horizontal_white.svg" 
                    alt="Landsloven logo" 
                    width={550} 
                    height={100}  
                    />
              </Fragment>                    
            )}
     
             <h4 className={`nx-mt-2 text-2xl mb-2  ${logo ? 'text-ll-red text-center sm:text-5xl dark:text-ll-gold' : 'dark:text-ll-gold font-medium sm:text-4xl'}`}>{title}</h4>
            <p className="dark:text-ll-gold-100 text-xl sm:bg-contain pr-7 sm:text-3xl font-light">{ingress}</p>
            {footer && (
              <p className="w-full text-right mt-1 text-sm sm:text-base pt-2 pr-8 pb-12"> <cite className="text-base sm:text-lg my-3 italic text-ll-red-700 dark:text-ll-gold sm:dark:text-ll-gold">{footer}</cite></p> 
            )}            
         </div>
         </Container>
    
    </div>
 
  );
}

export default SitatHero;