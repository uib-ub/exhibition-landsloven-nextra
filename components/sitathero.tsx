import Image from 'next/image';
import Container from 'components/container'

const SitatHero = ({ title, ingress, footer }: { title?: string, ingress?: string, footer?: string }) => {
  return (
 
      <div className="flex grid bg-ll-sandy -mx-6 dm:m-0 p-8 relative left-0 right-0 min-h-[32vw]  sm:min-h-[25vw]  bg-[url('/images/banner_overlay_transp.png')] sm:bg-[url('/images/banner_overlay.png')] sm:bg-contain bg-no-repeat bg-left">
        <Container>
         <div className="flex flex-col justify-center float-right sm:bg-ll-sandy sm:pl-4 md:bg-none md:pl-0  sm:w-1/2 md:w-3/5 h-auto">
  
            <h4 className='text-red-700 nx-mt-2 text-2xl sm:text-4xl dark:text-red-700 font-medium mb-2'>{title}</h4>
        
            <p className="text-black text-xl sm:text-3xl">{ingress}</p>
            <p className="text-black text-right"> <cite className="text-base sm:text-lg my-3 italic dark:text-black">{footer}</cite></p> 
            <p>&nbsp;</p> 
           
         </div>
         </Container>
    
    </div>
 
  );
}

export default SitatHero;