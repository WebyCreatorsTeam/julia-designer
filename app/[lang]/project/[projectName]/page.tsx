import React from 'react'
import { getDictionary } from '../../dictionaries'

const page = async ({ params: { lang, projectName } }: { params: { lang: string, projectName: string } }) => {
    const title = decodeURIComponent(decodeURIComponent(projectName)).replaceAll('-', ' ')
    const dict = await getDictionary(lang)
    const pro = dict.project.find((pro) => pro.title === title)
    // console.log(pro)

    if (!pro) {
        // Handle the case when no project is found
        return <section
            // className='pageWidth'
            style={{
                height: '65vh',
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <h1>Page not found</h1>
        </section>
    }

    return (
        <section className='pageWidth'>
            <h1>{pro.title}</h1>
        </section>
    )
}

export default page