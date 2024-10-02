import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }: { params: { lang: string }; }) {
  const dict = await getDictionary(lang);
  return (
    <div >
      <p>{dict.home}</p>
    </div>
  );
}
