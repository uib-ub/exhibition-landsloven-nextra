import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'
 
//Alternative logo
// <!--Image src="/images/logo_horizontal.svg" alt="Landsloven logo" width={240} height={45} /-->

// TO DO: Usikker ang hvordan angi width heigh og fill color for svg bildene under siden svg overstyrer dette
// Vanlig CSS path { fill: red} virker ikke
  

const config: DocsThemeConfig = {
  logo: (
    <div className='flex gap-2'>
      <Image className="svglogo hidden dark:hidden sm:block" 
          src="/images/logo_horizontal.svg" alt="Landsloven logo" width={210} height={45} />
       <Image className="svglogo hidden dark:sm:block" 
          src="/images/logo_horizontal_white.svg" alt="Landsloven logo" width={210} height={45} />
      <Image className="sm:hidden dark:hidden block rounded-full" src="/images/logo_nett.svg" alt="Landsloven logo" width={60} height={60} />
      <Image className="sm:hidden block rounded-full" src="/images/logo_nett_white.svg" alt="Landsloven logo" width={60} height={60} />
      
      <p className='sm:hidden block text-xlg align-middle leading-loose mt-3'>Landsloven</p>
    </div>
  ),
  i18n: [
    { locale: 'no', text: 'Norsk' },
    { locale: 'en', text: 'Engelsk' },
  ],
  // TO DO: English placeholder ?
  search: {
    placeholder: 'Søk',
  },
  docsRepositoryBase: 'https://github.com/uib-ub/exhibition-landsloven-nextra',
  footer: {
    text: (
      <div className='font-serif'>
        <p>Universitetsbiblioteket i Bergen, Høyskolen på Vestlandet, Vestland fylkeskommune</p>
      </div>
    ),
  },
  /* primaryHue: {
    dark: 200,
    light: 200,
  },
  primarySaturation: {
    dark: 50,
    light: 50,
  }, */
}

export default config
