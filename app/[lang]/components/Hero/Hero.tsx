import Image from 'next/image'
import React from 'react'
import hero from '../../images/hero.png'

const Hero = () => {
    return (
        <section className='hero'>
            <section className='hero-background'></section>
            {/* <Image src={hero} alt="Julia" width={1440} height={300} /> */}
            <Image src={hero} alt="Julia" width={1920} height={300} />
        </section>
    )
}

export default Hero