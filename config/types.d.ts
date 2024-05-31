export type TLandingPage = {
  title: {
    no: string,
    en: string
  },
}

export type TPage = {
  title: {
    no: string,
    en: string
  },
  href: string,
  ingress: {
    no: string,
    en: string
  },
  image: string,
  alt: {
    no: string,
    en: string
  },
  className?: string
}

export type TSubPage = {
  title: {
    no: string,
    en: string
  },
  href?: string,
  ingress: {
    no: string,
    en: string
  },
  image: string,
  alt: {
    no: string,
    en: string
  },
  className?: string
  items: {
    [key: string]: TPage
  }
}

export type PagesConfig = TSubPage

export type SiteConfig = {
  [key: string]: TLandingPage | TPage | TSubPage
}
