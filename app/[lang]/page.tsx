import Image from "next/image";
import hero from './images/hero-small.svg'
import hero2 from './images/hero-big22.svg'
import Projects from "./components/Projects/Projects";
import { Metadata, ResolvingMetadata } from "next";
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
      url: 'https://julia-designer.vercel.app',
      siteName: seo_dec.title,
      type: 'website',
      images: [
        {
          url: 'https://julia-designer.vercel.app/julia.png',
          width: 537,
          height: 537,
          alt: 'Coffe Image',
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

export default async function Home({ params: { lang } }: { params: { lang: string }; }) {
  return (
    <section className="">
      <section className="hero">
        <Image
          className="hidden lg:block"
          src={hero2} alt="Julia" width={1900} height={300} />
        <Image
          className="lg:hidden block"
          src={hero} alt="Julia" width={1400} height={300} />
      </section>
      <Projects lang={lang} />
    </section>
  );
}
