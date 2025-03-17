import { Alegreya, Alegreya_Sans, MedievalSharp, Metamorphous } from 'next/font/google';
// import { Alegreya, Alegreya_Sans, Metamorphous } from 'next/font/google';
import "../styles/globals.css";
import { init } from "@socialgouv/matomo-next";
import { useEffect } from 'react';

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

// There was not many antiqua fonts available on Google Fonts, so I chose MedievalSharp 
// for the medieval look and Alegreya for the serifs.

// Example of using a custom font with next/font. Multiple fonts can be added.
// Make sure to add the font to the tailwind.config.js file as well.
// Use the fonts in the className like this: className="font-antiqua"
const antiqua = MedievalSharp({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-antiqua',
})

const gotic = Metamorphous({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-gotic',
})

// Alegreya is a variable font with many weights and styles.
// No need to add the weight and style properties.
const serif = Alegreya({
  subsets: ['latin'],
  variable: '--font-serif',
})

const sans = Alegreya_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-sans',
})

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);

  return (
    /* Set base font size here */
    <main className={`${serif.variable} ${sans.variable} ${antiqua.variable} ${gotic.variable} font-sans text-[20px] nx-text-[20px]`}>
      <Component {...pageProps} />
    </main>
  )
}