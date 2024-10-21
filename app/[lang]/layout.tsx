import type { Metadata, ResolvingMetadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import { rubik } from "./fonts/fonts";
import Footer from "./components/Footer/Footer";
import { getSEODictionary } from "./dictionaries";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function generateMetadata({ params }: { params: { lang: string } }, parent: ResolvingMetadata): Promise<Metadata> {
  const { lang } = params
  const seo_dec = await getSEODictionary(lang)

  return {
    title: { absolute: seo_dec.title },
    description: seo_dec.description,
    metadataBase: new URL("https://julia-designer.vercel.app"),
    keywords: seo_dec.keywords,
    authors: seo_dec.authors,
    creator: seo_dec.creator,

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },

    openGraph: {
      title: seo_dec.title,
      description: seo_dec.description,
      url: `https://julia-designer.vercel.app/${lang}`,
      siteName: seo_dec.title,
      type: 'website',
      images: [
        {
          url: `https://julia-designer.vercel.app/${lang}/julia.png`,
          width: 512,
          height: 512,
          alt: 'J Letter',
        }
      ],
    },

    alternates: {
      canonical: 'https://julia-designer.vercel.app',
      languages: {
        'en': 'https://julia-designer.vercel.app/en',
        'ru': 'https://julia-designer.vercel.app/ru',
        'he': 'https://julia-designer.vercel.app/he',
      },
    },

  }
}

// export const metadata: Metadata = {
//   title: "Julia Voronina | Creative Designs & Branding",
//   description: 'Explore stunning graphic design services tailored to elevate your brand. From logos to marketing materials, I bring your vision to life with creativity and expertise.',
//   keywords: 'graphic design, logo design, branding, creative design, web design, marketing materials, illustration, freelance graphic designer',
//   authors: [{ name: 'Katya Ru', url: 'https://www.katya-ru.dev' }, { name: 'Julia Voronina' }],
//   creator: 'Katya Ru',

//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//     },
//   },

//   openGraph: {
//     title: "Julia Voronina | Creative Designs & Branding",
//     description: 'Explore stunning graphic design services tailored to elevate your brand. From logos to marketing materials, I bring your vision to life with creativity and expertise.',
//     url: 'https://julia-designer.vercel.app',
//     siteName: 'Julia Voronina | Creative Designs & Branding',
//     type: 'website',
//     images: [
//       {
//         url: 'https://julia-designer.vercel.app/julia.png',
//         width: 537,
//         height: 537,
//         alt: 'Coffe Image',
//       }
//     ],
//   },

//   alternates: {
//     canonical: 'https://julia-designer.vercel.app',
//     languages: {
//       'en': 'https://julia-designer.vercel.app/en',
//       'ru': 'https://julia-designer.vercel.app/ru',
//       'he': 'https://julia-designer.vercel.app/he',
//     },
//   },
// };

export default function RootLayout({ children, params: { lang } }: Readonly<{ children: React.ReactNode; params: { lang: string }; }>) {
  return (
    <html lang={lang} dir={lang === "he" ? "rtl" : "ltr"}>
      <body className={rubik.className}     >
        <Navbar lang={lang} />
        <main>
          {children}
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
