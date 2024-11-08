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
    └── 📁config
        └── sections
            └── tyvebolken.ts # Navigation and sidebar config for the subpath
            └── ... # Other subpaths
        └── site.ts # Navigation and sidebar config for frontpage
        └── types.d.ts # TypeScript types for the config
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
            └── introduksjon.en.mdx 
            └── introduksjon.no.mdx
            └── ekteskap.en.mdx # Text pages available in the sidebar
            └── ekteskap.no.mdx # Text pages available in the sidebar
            └── ...
        └── 📁[...other paths]
        └── index.en.mdx # The main page, is full width
        └── index.no.mdx # The main page, is full width
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

## Configuration of the site
We have `site.ts` and config files for the different subpaths. The config files are used by components on the mainpage and the subpaths. The `site.ts` file is used for the frontpage and the `tyvebolken.ts` file is used for the subpath `tyvebolken`, etc.

In these files we set title, href, path to image in `public` folder, alt text for image, ingress and className. Title, alt text and ingress are multilingual objects with `en` and `no` keys. The className *can* used to style the card in the `SubMenuCards` component.

```typescript
export sections = {
    title: {
        en: 'Thieves’ section',
        no: 'Tyvebolken'
    },
    href: '/tyvebolken',
    image: '/images/tyvebolken/tyvebolken.jpg',
    alt: {
        en: 'Illustration of',
        no: 'Illustrasjon av',
    },
    ingress: {
        en: 'The last section of the Laws of the Land is the Thieves’ section, which defines theft and describes how to hold thieves accountable.',
        no: 'Den siste bolken i Landsloven er Tyvebolken, som definerer tyveri og beskriver hvordan...',
    },
    className: 'tyvebolken'
}
```

## Design
Se https://exhibition-landsloven-nextra.vercel.app/design for information about typography and colors.

## Components

The components are written in TypeScript and are located in the `components` folder. The `work.tsx` component is used to render the IIIF Manifest with Clover-IIIF.

All components are imported from `components/???` as a tsconfig path has been set up for easier importing no matter what folder level the page is on.

Component filenames are in cebab-case, and the component name is in PascalCase. E.g. `work.tsx` exports the `Work` component.

### Work

The `Work` component is used to render the IIIF Manifest with Clover-IIIF. It takes an `id` prop that is the IIIF Manifest ID. The component is wrapped in a `Suspense` component to handle the loading state.

```jsx
<Work id="ubb-ms-0558" />

<Work id="ubb-ms-0558" marcus="https://marcus.uib.no/instance/manuscript/ubb-ms-0558.html"> 
    Caption or other text
</Work>
```

It can also take a `url` prop that is the URL to the IIIF Manifest. This is useful when the manifest is not hosted on the same domain as the site.

*NB*! The National Library of Norway's IIIF Manifests are not CORS enabled, so they cannot be used with the `url` prop.

```jsx
<Work url="https://api.nb.no/catalog/v1/iiif/9fc1417235e4f584c7bcc667b9e77ba2/manifest" />
```

### Figure
When you want to include an image with a caption and a link to the source, you can use the `Figure` component. If we can get IIIF manifest we use `<Work />`, but if not than we use `<Figure />`. It takes the following props:

```jsx
<Figure
    image="/images/tyvebolken/Bf_BRM0_47891_FK_02.jpg"
    title="Stor bronsenøkkel til Eidfjord kirke"
    alt="Stor bronsenøkkel liggende på en hvit duk"
    href="https://digitaltmuseum.org/0210112472912/brm0-47891-for-konservering-2"
>
    Tyvebolken forteller at en person som begikk tyveri for annen gang, og ikke kunne betale bøter, skulle brennemerkes – med en nøkkel!
</Figure>
```

Very important `image="/images/...` have a starting `/` and is relative to the `public` folder. An url is also possible, but the domain must be whitelisted in the `next.config.js` file.


### Card  
The 'Card' component takes the following arguments:

    interface CardProps {
    title: string;
    ingress?:string;
    image?: string;
    alt?: string;
}

> To DO: Beskrivelser / forklaring


### Container
The 'Container' component is a div with 'different width' and one can set CSS class (useful for styling 'Initial letter').
Margin is 'Y-margin'

'interface ContainerProps {
  width?: string;
  padding?: string;
  margin?: string;
  stil?: string;
  children?: ReactNode;
}'



    <Container stil="firstletter" margin={6}>
    

Margin is 'top margin'.

stil can be for example 'fistletter' or 'initial'. 
(these are defined in global.css



### Figure

When you want to include an image with a caption and a link to the source, you can use the `Figure` component. If we can get IIIF manifest we use `<Work />`, but if not than we use `<Figure />`. It takes the following props:

  

```jsx

	<Figure
		image="/images/tyvebolken/Bf_BRM0_47891_FK_02.jpg"
		title="Stor bronsenøkkel til Eidfjord kirke"
		alt="Stor bronsenøkkel liggende på en hvit duk"
		href="https://digitaltmuseum.org/0210112472912/brm0-47891-for-konservering-2"
	>

	</Figure>
```


Very important `image="/images/...` have a starting `/` and is relative to the `public` folder. An url is also possible, but the domain must be whitelisted in the `next.config.js` file.

  

### Blockquote

When you want to include a blockquote with a footer, you can use the `Blockquote` component. It takes the following props:

  

```jsx

	<Blockquote
		quote='«Det er forståelig at noen som ikke kan få seg arbeid til livsopphold, stjeler mat, og på den måten berger livet sitt fra sult, da skal han ikke straffes for det tjuveriet.»'
		footer='Tyvebolken, kapittel 1'
		image=  (optional),  url
		alt=(optional),  alt  text  for  image
		gold = {1} optional
		full = {1} optional
	/>

```
  

### Card

The 'Card' component takes the following arguments:
  

	interface CardProps {
		title: string;
		ingress?:string;
		image?: string;
		alt?: string;
	}


> To DO: Beskrivelser / forklaring

 

### Container

The 'Container' component is a div with 'different width' and one can set CSS class (useful for styling 'Initial letter').

Margin is 'Y-margin'

  

	'interface ContainerProps {
		width?: string;
		padding?: string;
		margin?: string;
		stil?: string;
		children?: ReactNode;
	}'

  
   
### FlexGrid

TO DO: 
  

### LogoBanner

  

### Spacer
The 'Spacer' component is a just for visually divide items. Height is in pixels

    <Spacer height="36" /> 

Or maybe 

    <Spacer height={6}/>c



### SubMenuCards

    <SubMenuCards items={sections.items} shadow='shadow-none'/>

columns, gap and shadow are optional
  

### SitatHero

The 'SitatHero' component is mainly used for creating banner at the top, it takes the following arguments:

	 ({ title, ingress, footer }

Like this:

	<SitatHero 
	    title={sections.introduksjon.title['no']} // or plain text
	    ingress='«Hvis noen ikke får retten sin hjemme i bygdene eller hos lagmannen, da skal saksøkeren stevne til lagtinget den han ikke får rett av.»'  
	    footer='Tingfarebolken, kapittel 10'
	/>

 

## License

This project is licensed under the MIT License.
