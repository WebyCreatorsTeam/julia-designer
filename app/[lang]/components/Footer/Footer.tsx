import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import be from './images/be.png'
import lin from './images/lin.png'
import email from "./images/email.png"

const Footer = () => {
    return (
        <footer>
            <div className='socialLinks'>
                <Link href="" target='_blank'>
                    <Image src={be} alt={"Becanse Icon"} width={38} height={38} />
                </Link>
                <Link href="" target='_blank'>
                    <Image src={lin} alt={"Linkedin Icon"} width={38} height={38} />
                </Link>
            </div>
            {/* <div> */}
            <Link href="mailto:rbernally@gmail.com">
                <Image src={email} alt={"Email Icon"} width={17} height={14} />
                <p>rbernally@gmail.com</p>
            </Link>
            {/* </div> */}
            <p>Julia Voronina 2024</p>
        </footer>
    )
}

export default Footer