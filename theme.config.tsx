import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div className='flex gap-3'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
        <circle cx="12" cy="12" r="12" />
      </svg>
      <span className='font-antiqua'>Landsloven</span>
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
    text: 'Universitetsbiblioteket i Bergen, Høyskolen på Vestlandet, Vestland fylkeskommune',
  },
}

export default config
