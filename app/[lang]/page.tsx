// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { getDictionary } from "./dictionaries";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function Home({ params: { lang } }: { params: { lang: string }; }) {
  // const dict = await getDictionary(lang);
  // console.log(dict)
  return (
    <div >
      {/* <p>{dict.home}</p> */}
    </div>
  );
}
