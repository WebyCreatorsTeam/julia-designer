// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getDictionary } from "./dictionaries";
// import Image from "next/image";
// import hero from './images/hero.png'
import Hero from "./components/Hero/Hero";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Home({ params: { lang } }: { params: { lang: string }; }) {
  // const dict = await getDictionary(lang);
  // console.log(dict)
  return (
    <section>
      <Hero />
      
      {/* <p>{dict.home}</p> */}
    </section>
  );
}
