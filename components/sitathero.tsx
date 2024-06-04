import Image from 'next/image';
import Container from 'components/container'

const SitatHero = ({ title, ingress, footer }: { title?: string, ingress?: string, footer?: string }) => {
  return (
 
      <div className="flex grid bg-ll-sandy -mx-6 dm:m-0 p-8 relative left-0 right-0 min-h-[32vw]  sm:min-h-[25vw]  bg-[url('/images/banner_overlay_transp.png')] sm:bg-[url('/images/banner_overlay.png')] sm:bg-contain bg-no-repeat bg-left">
        <Container>
         <div className="flex flex-col justify-center float-right sm:w-1/2 h-auto">
  
            <h2 className='text-red-700 nx-mt-2 text-2xl sm:text-4xl dark:text-red-700 font-medium mb-2'>{title}</h2>
        
            <p className="text-black text-xl sm:text-3xl">{ingress}</p>
            <p className="text-black text-right"> <cite className="text-base sm:text-base my-3 italic dark:text-black">{footer}</cite></p> 
            <p>&nbsp;</p> 
           
         </div>
         </Container>
    
    </div>
 
  );
}

export default SitatHero;