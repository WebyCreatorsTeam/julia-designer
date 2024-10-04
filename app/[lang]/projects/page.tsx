import React, { Suspense } from 'react'
import AllProjects from './AllProjects';
import Filter from './Filter';

const page = async ({ params: { lang }, searchParams: { type } }: { params: { lang: string }; searchParams: { type: string; } }) => {

    return (
        <section className='pageWidth'>
            <h1>{lang == "he" ? "פורטפוליו" : lang == "ru" ? "Портфолио" : "Portfolio"}</h1>
            <Filter lang={lang} />
            <Suspense fallback={<div>Loading...</div>}>
                <AllProjects lang={lang} type={type}/>
            </Suspense>
        </section>
    )
}

export default page