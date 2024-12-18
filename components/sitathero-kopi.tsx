import Image from 'next/image';
import Container from 'components/container'

const SitatHero = ({ title, ingress, footer, logo }: { title?: string, ingress?: string, footer?: string, logo?: boolean }) => {
  return (

    <div className={`flex has-logo-${logo} bg-ll-gold-50 dark:bg-ll-blue-950 dark:sm:bg-[url('/images/banner_overlay-neg.png')] -mx-6 dm:m-0 mb-3 p-8  relative left-0 right-0 min-h-[32vw] sm:min-h-[25vw]  bg-[url('/images/banner_overlay_transp.png')] sm:bg-[url('/images/banner_overlay.png')] sm:bg-contain bg-no-repeat bg-left`}>
      <Container>
        <div className={`flex flex-wrap float-right sm:bg-ll-gold-50 dark:sm:bg-ll-blue-950 sm:pl-4 md:bg-none md:pl-0 sm:w-3/5 max-w-4xl h-auto center-text-${logo}`}>
          {logo && (
            <Image
              className="py-0  px-4  -mt-6 mb-5"
              src="/images/logos/logo_horizontal.svg"
              alt="Landsloven logo"
              width={550}
              height={100} />
          )}

          <h4 className='text-red-700 w-full nx-mt-2 text-2xl sm:text-4xl dark:text-ll-gold font-medium mb-2'>{title}</h4>
          <p className="text-black dark:text-ll-gold-100 text-xl sm:bg-contain sm:text-3xl font-light">{ingress}</p>
          {footer && (
            <p className="w-full text-right mt-1 text-sm sm:text-base pt-2 pb-12"> <cite className="text-base sm:text-lg my-3 italic text-gray-700 dark:text-ll-gold sm:dark:text-ll-gold">{footer}</cite></p>
          )}
        </div>
      </Container>

    </div>

  );
}

export default SitatHero;