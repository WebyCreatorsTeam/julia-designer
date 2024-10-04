import { getDictionary } from '../../dictionaries'
import Image from 'next/image'
import Link from 'next/link'

const Projects = async ({ lang }: { lang: string }) => {
    const dict = await getDictionary(lang)

    return (
        <>
            <section className='pageWidth'>
                <section className="projects">
                    {dict.project.map((project: { title: string, desc: string, url: string, image: string }, idx: number) => {
                        return (
                            <div key={idx} className='projectItem'>
                                <Image src={project.image} alt={project.title} width={486} height={486} />
                                <div className='projectText'>
                                    <h2>{project.title}</h2>
                                    <p>{project.desc}</p>
                                    <Link href={`/${lang}/project/${project.title.replaceAll(' ', '-')}`}>{lang == "he" ? "צפה בפרויקט" : lang == "ru" ? "Смотреть проект" : "See project"}</Link>
                                </div>
                            </div>
                        )
                    })}
                </section>
                <Link href={`/${lang}/projects`} className='moreProjects'>
                    {lang == "he" ? "לכל הפרויקטים" : lang == "ru" ? "Все проекты" : "See all projects"}
                </Link>
            </section>
        </>
    )
}

export default Projects