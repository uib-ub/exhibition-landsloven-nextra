import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Landsloven</span>,
  project: {
    link: 'https://github.com/uib-bub/exhibition-landsloven-nextra',
  },
  i18n: [
    { locale: 'no', text: 'Nynorsk' },
    { locale: 'en', text: 'Engelsk' },
  ],
  search: {
    placeholder: 'Søk',
  },
  docsRepositoryBase: 'https://github.com/uib-bub/ex-landsloven-nextrahi',
  footer: {
    text: 'Universitetsbiblioteket i Bergen, Høyskolen på Vestlandet, Vestland fylkeskommune',
  },
}

export default config
