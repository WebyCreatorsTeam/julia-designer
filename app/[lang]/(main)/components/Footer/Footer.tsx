import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import be from './images/be.png'
import lin from './images/lin.png'
import email from "./images/email.png"
import { getDictionary } from '../../dictionaries'

const Footer = async ({ lang }: { lang: string }) => {
    const dict = await getDictionary(lang);
    return (
        <footer id={dict.navbar.links.contact}>
            <div className='socialLinks'>
                <Link href="https://www.behance.net/rbernally3097" target='_blank'>
                    <Image src={be} alt={"Behance Icon"} width={38} height={38} />
                </Link>
                <Link href="https://www.linkedin.com/in/julia-voroninail" target='_blank'>
                    <Image src={lin} alt={"Linkedin Icon"} width={38} height={38} />
                </Link>
            </div>
            <Link href="mailto:rbernally@gmail.com">
                <Image src={email} alt={"Email Icon"} width={17} height={14} />
                <p>rbernally@gmail.com</p>
            </Link>
            <p>Julia Voronina  2024 </p>
            {/*© <a href="https://www.katya-ru.dev">Katya Ru</a> */}
        </footer>
    )
}

export default Footer