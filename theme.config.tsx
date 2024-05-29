import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div className='flex gap-4'>
      <div className='text-ll-red'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <circle cx="12" cy="12" r="12" />
        </svg>
      </div>
      <span className=''>Landsloven</span>
    </div>
  ),
  i18n: [
    { locale: 'no', text: 'Norsk' },
    { locale: 'en', text: 'Engelsk' },
  ],
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
