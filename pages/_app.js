import { Inknut_Antiqua } from 'next/font/google';
import "../styles/globals.css";

// There was not many antiqua fonts available on Google Fonts, so I chose Inknut Antiqua for now.

// Example of using a custom font with next/font. Multiple fonts can be added.
// Make sure to add the font to the tailwind.config.js file as well.
// Use the fonts in the className like this: className="font-antiqua"
const antiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['600', '900'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-antiqua',
})

export default function MyApp({ Component, pageProps }) {

  return (
    <main className={`${antiqua.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}