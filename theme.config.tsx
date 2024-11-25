import Footer from 'components/footer';
import Breadcrumbs from 'components/nx-breadcrumbs';
import { format } from 'date-fns';
import { enGB, nb } from 'date-fns/locale';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs';

//Alternative logo
// <!--Image src="/images/logos/logos/logo_horizontal.svg" alt="Landsloven logo" width={240} height={45} /-->

// TO DO: Usikker ang hvordan angi width heigh og fill color for svg bildene under siden svg overstyrer dette
// Vanlig CSS path { fill: red} virker ikke

const SITE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://exhibition-landsloven-nextra.vercel.app/';

// theme.config.js
const config: DocsThemeConfig = {
  /* Needs some tweaking, Landsloven not mentioned :-( */
  useNextSeoProps() {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()

    return {
      titleTemplate: asPath === '/'
        ? frontMatter.title || ''
        : `%s – ${frontMatter.title || ''}`
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      SITE_URL +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta property="og:url" content={url} />
        <meta
          name="keywords"
          content={frontMatter.tags}
        />
        <meta name="color-scheme" content="light dark"></meta>
        <meta property="og:image" content={`${SITE_URL}${frontMatter.image ?? '/images/logos/landslovbanner.jpg'}`}></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:description" content={frontMatter.description || ''}></meta>
        <meta property="og:locale" content={locale} />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="any" href="/favicon.png" />
      </>
    )
  },
  logo: (
    <div className='flex gap-2'>
      <Image className="svglogo hidden dark:hidden sm:block"
        src="/images/logos/logo_horizontal.svg" alt="Landsloven logo" width={210} height={45} />
      <Image className="svglogo hidden dark:sm:block"
        src="/images/logos/logo_horizontal_white.svg" alt="Landsloven logo" width={210} height={45} />
      <Image className="sm:hidden dark:hidden block rounded-full" src="/images/logos/logo_nett.svg" alt="Landsloven logo" width={60} height={60} />
      <Image className="hidden dark:block dark:sm:hidden rounded-full" src="/images/logos/logo_nett_white.svg" alt="Landsloven logo" width={60} height={60} />

      <p className='sm:hidden block text-xlg align-middle leading-loose mt-3'>Landsloven</p>
    </div>
  ),
  i18n: [
    { locale: 'no', text: 'Norsk' },
    { locale: 'en', text: 'Engelsk' },
  ],
  search: {
    placeholder: () => {
      const { locale } = useRouter()
      return locale === 'en' ? 'Search' : 'Søk'
    },
  },
  // banner: {
  //   key: '1.0-release',
  //   text: (
  //   <p>Utsillingen er åpen</p> 
  //   )
  // },
  docsRepositoryBase: 'https://github.com/uib-ub/exhibition-landsloven-nextra',
  footer: {
    text: Footer
  },
  // Override breadcrumb
  main: ({ children }) => {
    return (
      <>
        <Breadcrumbs />
        {children}
      </>
    )
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
  gitTimestamp({ timestamp }) {
    const { locale, asPath } = useRouter()
    // Don't show timestamp on homepage
    if (asPath === '/') return null

    return (
      <div>
        {locale === 'en' ? `Last updated ${format(timestamp, 'LLLL d, yyyy', { locale: enGB })}` : `Sist oppdatert ${format(timestamp, 'd. LLLL yyyy', { locale: nb })}`}
      </div>
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
