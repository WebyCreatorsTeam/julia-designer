import Image from "next/image";
import hero from './images/hero-small.svg'
import hero2 from './images/hero-big22.svg'
import Projects from "./components/Projects/Projects";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Home({ params: { lang } }: { params: { lang: string }; }) {

  return (
    <section className="">
      <section className="hero">
        <Image
          className="hidden lg:block"
          src={hero2} alt="Julia" width={1920} height={300} />
        <Image
          className="lg:hidden block"
          src={hero} alt="Julia" width={1440} height={300} />
      </section>
      <Projects lang={lang} />
    </section>
  );
}
