# Landslovjubileet 2024

This is the repo for the digital exhibition of the 2024 jubilee of _Landsloven_. The site is built with [Nextra](//nextra.site) and is statically generated from markdown files. The code is hosted on github and the site is hosted on Vercel.

Nextra is built with the Next.js framework that allows you to build static sites from markdown files. It uses [Tailwind CSS](https://tailwindcss.com/docs/preflight) for styling and MDX for rendering React components in markdown files. Many of the works in the exhibition are rendered with the [Clover-IIIF](https://samvera-labs.github.io/clover-iiif/) viewer.

[**Live Demo →**](https://exhibition-landsloven-nextra.vercel.app/)

## Local Development

First clone the repository:

```bash
git clone git@github.com:uib-ub/exhibition-landsloven-nextra.git
npm i
npm run dev
# Visit http://localhost:3000
```

## Folder Structure

```bash
└── 📁exhibition-landsloven-nextra
    └── 📁components # All react components here
        └── .gitkeep
        └── work.tsx # Client side rendering of the IIIF Manifest with Clover-IIIF
    └── middleware.ts # Handles i18n
    └── next-env.d.ts # Auto generated, ignore
    └── next.config.js # Next.js config
    └── package-lock.json
    └── package.json # Nextra and other dependencies
    └── 📁pages
        └── _app.js # Serves the app
        └── _meta.en.json # The navigation and sidebar config for the site
        └── _meta.no.json # The navigation and sidebar config for the site
        └── 📁arvetallet
            └── _meta.en.json # The navigation and sidebar config for the subpath
            └── _meta.no.json # The navigation and sidebar config for the subpath
            └── arvetallet.en.mdx 
            └── arvetallet.no.mdx
            └── ekteskap.en.mdx # Text pages available in the sidebar
            └── ekteskap.no.mdx # Text pages available in the sidebar
            └── ...
        └── arvetallet.en.mdx # The main page for the subpath, is full width
        └── arvetallet.no.mdx # The main page for the subpath, is full width
        └── ...
    └── .gitignore
    └── LICENSE
    └── README.md
    └── postcss.config.js # Imports necessary postcss plugins
    └── 📁styles
        └── globals.css # Global styles, imports tailwind
    └── tailwind.config.js # Tailwind CSS config
    └── theme.config.tsx # The Nextra config
    └── tsconfig.json # TypeScript config
```

## Components

The components are written in TypeScript and are located in the `components` folder. The `work.tsx` component is used to render the IIIF Manifest with Clover-IIIF.

All components are imported from `components/???` as a tsconfig path has been set up for easier importing no matter what folder level the page is on.

Component filenames are in cebab-case, and the component name is in PascalCase. E.g. `work.tsx` exports the `Work` component.

## License

This project is licensed under the MIT License.
