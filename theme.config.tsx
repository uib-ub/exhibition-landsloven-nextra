import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Landsloven</span>,
  project: {
    link: 'https://github.com/uib-bub/exhibition-landsloven-nextra',
  },
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
