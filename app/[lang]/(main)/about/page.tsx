import React from 'react'
import { getDictionary } from '../dictionaries';
import { playfairDisplay } from '../fonts/fonts';
import Image from 'next/image';
import julia from './julia-image.png'

const page = async ({ params: { lang } }: { params: { lang: string }; }) => {
    const dict = await getDictionary(lang);

    return (
        <section className='pageWidth'>
            <h1 className={playfairDisplay.className}>{dict.about.title}</h1>
            <section className='aboutSection'>
                <Image src={julia} alt="Julia Image" width={282} height={282}/>
                <div dangerouslySetInnerHTML={{ __html: dict.about.description }}></div>
            </section>
        </section>
    )
}

export default page

//../../images/julia-image.png