import React from 'react'
import { getDictionary } from '../../dictionaries'
import Image from 'next/image'

const Projects = async ({ lang }: { lang: string }) => {
    const dict = await getDictionary(lang)
    // console.log(dict.project)
    return (
        <section className='pageWidth projects'>
            {dict.project.map((project: { title: string, desc: string, url: string, image: string, urlText: string }, idx: number) => {
                return (
                    <div key={idx} className='projectItem'>
                        <Image src={project.image} alt={project.title} width={486} height={486} />
                        <div className='projectText'>
                            <h2>{project.title}</h2>
                            <p>{project.desc}</p>
                            <a href={project.url} target="_blank" rel="noreferrer">{project.urlText}</a>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default Projects