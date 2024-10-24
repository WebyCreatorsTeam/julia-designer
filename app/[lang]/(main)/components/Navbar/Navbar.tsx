import React from 'react'
import LocalSwitcher from '../LocalSwitcher/LocalSwitcher'
import { getDictionary } from '../../dictionaries';
import Link from 'next/link';

const Navbar = async ({ lang }: { lang: string }) => {
  const dict = await getDictionary(lang);

  return (
    <nav>
      <LocalSwitcher />
      <Link href={`/${lang}`}>{dict.navbar.links.home}</Link>
      <Link href={`/${lang}/about`}>{dict.navbar.links.about}</Link>
      <Link href={`/${lang}/projects`}>{dict.navbar.links.portfolio}</Link>
      <Link href={`#${dict.navbar.links.contact}`}>{dict.navbar.links.contact}</Link>
    </nav>
  )
}

export default Navbar