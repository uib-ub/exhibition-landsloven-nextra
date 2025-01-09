import Image from 'next/image';

const HomepageHero = ({ title, ingress, footer, logo }: { title?: string, ingress?: string, footer?: string, logo?: boolean }) => {
  const bgColor = logo ? 'dark:bg-ll-red-950' : 'dark:bg-ll-blue-950';
  const height = logo
    ? 'h-[250px] sm:h-[350px]  lg:h-[425px] xl:h-[485px]'
    : 'h-[300px] sm:h-[25vh] xl:h-[450px]';

  return (
    <div
      className={`
        grid grid-cols-12 grid-rows-1 -mx-6 has-logo-${logo} bg-ll-gold-50 ${bgColor}
        ${height}
      `}
    >
      <div
        className={`
          col-span-12 
          row-start-1 
          sm:col-start-5
          lg:col-start-4
          xl:col-start-4
          sm:row-start-1 
          sm:row-end-1 
          justify-center items-center flex flex-col p-4 text-center
        `}
      >
        {logo && (
          <>
            <Image
              className="svglogo object-cover block dark:hidden"
              src="/images/logos/logo_horizontal.svg"
              alt="Landsloven logo"
              width={550}
              height={100}
            />

            <Image
              className="svglogo object-cover hidden dark:block"
              src="/images/logos/logo_horizontal_white.svg"
              alt="Landsloven logo"
              width={550}
              height={100}
            />
          </>
        )}

        <h1
          className={`nx-mt-2 text-2xl sm:text-[1.6em] md:text-4xl xl:text-6xl  mb-2 font-medium  max-w-sm lg:max-w-xl dark:text-ll-gold ${logo ? 'text-ll-red sm:text-5xl' : ' '}`}
        >
          {title}
        </h1>
        <p className="dark:text-ll-gold-100 text-md leading-6 sm:leading-6 sm:text-xl md:text-2xl font-light inline-block mt-2 md:mt-3 max-w-prose">
          {ingress}
        </p>
        {footer && (
          <p className="max-w-prose text-sm sm:text-base mt-6">
            <cite className="text-base sm:text-lg my-3 italic text-ll-red-700 dark:text-ll-gold sm:dark:text-ll-gold">
              {footer}
            </cite>
          </p>
        )}
      </div>
      <div
        className={`
          col-span-6
          sm:col-start-1
          sm:col-span-4
          md:col-span-4
          lg:col-span-3
          xl:col-span-3 
          row-start-1

          dark:sm:bg-[url('/images/logos/landslov-ornament.png')] 
          sm:bg-[url('/images/logos/landslov-ornament.png')] 
          bg-cover bg-no-repeat bg-top
        `}
      >
      </div>
    </div>
  )
}

export default HomepageHero;