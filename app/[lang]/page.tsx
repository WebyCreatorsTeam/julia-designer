import Image from "next/image";
// import hero from './images/hero-big.png'
import hero2 from './images/hero-big2.png'
import Projects from "./components/Projects/Projects";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Home({ params: { lang } }: { params: { lang: string }; }) {

  return (
    <section className="">
      <section className="hero">
        {/* <Image
          // className="xl:hidden block" 
          src={hero} alt="Julia" width={1440} height={300} /> */}
        <Image
          // className="hidden xl:block"
          className="hero-image"
          // style={{ objectFit: "cover" }}
          src={hero2} alt="Julia" width={1440} height={300} />
      </section>
      {/* <section> */}
      <Projects lang={lang} />
      {/* </section> */}
    </section>
  );
}
