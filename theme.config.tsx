import site from 'config/site';
import { format } from 'date-fns';
import { enGB, nb } from 'date-fns/locale';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DocsThemeConfig } from 'nextra-theme-docs';
import React from 'react';

//Alternative logo
// <!--Image src="/images/logo_horizontal.svg" alt="Landsloven logo" width={240} height={45} /-->

// TO DO: Usikker ang hvordan angi width heigh og fill color for svg bildene under siden svg overstyrer dette
// Vanlig CSS path { fill: red} virker ikke

const config: DocsThemeConfig = {
  /* Needs some tweaking, Landsloven not mentioned :-( */
  useNextSeoProps() {
    const { asPath, locale } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: `%s – ${site.index.title[locale]}`
      }
    }
    if (asPath === '/') {
      return {
        titleTemplate: `${site.index.title[locale]}`
      }
    }
  },
  logo: (
    <div className='flex gap-2'>
      <Image className="svglogo hidden dark:hidden sm:block"
        src="/images/logo_horizontal.svg" alt="Landsloven logo" width={210} height={45} />
      <Image className="svglogo hidden dark:sm:block"
        src="/images/logo_horizontal_white.svg" alt="Landsloven logo" width={210} height={45} />
      <Image className="sm:hidden dark:hidden block rounded-full" src="/images/logo_nett.svg" alt="Landsloven logo" width={60} height={60} />
      <Image className="hidden dark:block dark:sm:hidden rounded-full" src="/images/logo_nett_white.svg" alt="Landsloven logo" width={60} height={60} />

      <p className='sm:hidden block text-xlg align-middle leading-loose mt-3'>Landsloven</p>
    </div>
  ),
  i18n: [
    { locale: 'no', text: 'Norsk' },
    { locale: 'en', text: 'Engelsk' },
  ],
  // TO DO: English placeholder ?
  search: {
    placeholder: () => {
      const { locale } = useRouter()
      return locale === 'en' ? 'Search' : 'Søk'
    },
  },
  docsRepositoryBase: 'https://github.com/uib-ub/exhibition-landsloven-nextra',
  footer: {
    text: (
      <div className='font-serif'>
        <p>Universitetsbiblioteket i Bergen, Høyskolen på Vestlandet, Vestland fylkeskommune</p>
      </div>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1, // MAKE navigation menu closed for folders on load
  },
  toc: {
    title: () => {
      const { locale } = useRouter()
      return (
        <>
          {locale === 'en' ? 'On this page' : 'På denne siden'}
        </>
      )
    },
    float: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  head: (
    <React.Fragment>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="any" href="/favicon.png" />
    </React.Fragment>
  ),
  gitTimestamp({ timestamp }) {
    const { locale } = useRouter()
    return (
      <>
        {locale === 'en' ? `Last updated ${format(timestamp, 'LLLL d, yyyy', { locale: enGB })}` : `Sist oppdatert ${format(timestamp, 'd. LLLL yyyy', { locale: nb })}`}
      </>
    )
  },
  /* 
  navigation: {
    prev: true,
    next: true
  },
  primaryHue: {
    dark: 200,
    light: 200,
  },
  primarySaturation: {
    dark: 50,
    light: 50,
  }, */
}

export default config
