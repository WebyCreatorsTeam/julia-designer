import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string }; }) {
  // const dict = await getDictionary(lang);
  // console.log(dict)
  return (
    <div >
      {/* <p>{dict.home}</p> */}
    </div>
  );
}
