import type { Metadata } from "next";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const metadata: Metadata = {
    title: "Julia Voronina | Creative Designs & Branding",
    description:  "Explore stunning graphic design services tailored to elevate your brand. From logos to marketing materials, I bring your vision to life with creativity and expertise.",
    metadataBase: new URL("https://julia-designer.vercel.app"),
    keywords:  "graphic design, logo design, branding, creative design, web design, marketing materials, illustration, freelance graphic designer",
    authors:  [{ name: "Katya Ru", url: "https://www.katya-ru.dev" }, { name: "Julia Voronina" }],
    creator:  "Katya Ru",

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },

    openGraph: {
      title:  "Julia Voronina | Creative Designs & Branding",
      description:  "Explore stunning graphic design services tailored to elevate your brand. From logos to marketing materials, I bring your vision to life with creativity and expertise.",
      url: `https://julia-designer.vercel.app`,
      siteName:  "Julia Voronina | Creative Designs & Branding",
      type: 'website',
      images: [
        {
          url: `https://julia-designer.vercel.app/julia.png`,
          width: 512,
          height: 512,
          alt: 'J Letter',
        },
        {
          url: `https://julia-designer.vercel.app/julia.png`,
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
    }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode;  }>) {
  return ( children );
}
