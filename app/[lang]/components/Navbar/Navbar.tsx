import React from 'react'
import LocalSwitcher from '../LocalSwitcher/LocalSwitcher'
import { getDictionary } from '../../dictionaries';
import Link from 'next/link';

const Navbar = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);
  console.log(dict)
  return (
    <div>
      <LocalSwitcher />
      <Link href={`/${lang}/about`}>{dict.navbar.links.about}</Link>
      <Link href={`/${lang}`}>{dict.navbar.links.portfolio}</Link>
      <Link href={`/${lang}`}>{dict.navbar.links.contact}</Link>
      Navbar
    </div>
  )
}

export default Navbar