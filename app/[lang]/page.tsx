// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getDictionary } from "./dictionaries";
import Image from "next/image";
import hero from './images/hero-big.png'
// import Hero from "./components/Hero/Hero";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Home({ params: { lang } }: { params: { lang: string }; }) {
  // const dict = await getDictionary(lang);
  // console.log(dict)
  return (
    <section className="">
      <section className="hero">
        <Image src={hero} alt="Julia" width={1440} height={300}/>
        {/* <Hero /> */}
        {/* <Image src={hero} alt="Julia" width={1440} height={300} />  */}
        {/* 
        */}
      </section>
      {/* <p>{dict.home}</p> */}
    </section>
  );
}
