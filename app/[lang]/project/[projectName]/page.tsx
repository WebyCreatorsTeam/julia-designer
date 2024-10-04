import React from 'react'
import { getDictionary } from '../../dictionaries'

const page = async ({ params: { lang, projectName } }: { params: { lang: string, projectName: string } }) => {
    const title = decodeURIComponent(decodeURIComponent(projectName)).replaceAll('-', ' ')
    const dict = await getDictionary(lang)
    const pro = dict.project.find((pro) => pro.title === title)
    // console.log(pro)
    return (
        <section className='pageWidth'>
            <h1>{pro.title}</h1>
        </section>
    )
}

export default page