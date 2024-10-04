"use client";

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react'

interface FilterLang {
    [key: string]: {
        all: string;
        webDesign: string;
        socialMedia: string;
        printProduction: string;
    };
}

const filterLang: FilterLang = {
    en: { all: "All projects", webDesign: "Web design", socialMedia: "Social media", printProduction: "Print production" },
    ru: { all: "Все проекты", webDesign: "Веб-дизайн", socialMedia: "Социальные медиа", printProduction: "Печатная продукция " },
    he: { all: "כל הפרויקטים", webDesign: "עיצוב אינטרנטי", socialMedia: "מדיה חברתית", printProduction: "מוצרי הדפסה" },
}

const Filter = ({ lang }: { lang: string }) => {
    const params = useSearchParams();
    
    const toggleQuery = (key: string, value: string) => {
        const query = Object.fromEntries(params);
        if (query[key] === value) {
            delete query[key];
        } else {
            query[key] = value;
        }

        return query
    }

    const active = params.get("type")?.toLowerCase() || ""

    return (
        <section className='filter'>
            <Link
                className={active === "" ? 'active' : undefined}
                href={`/${lang}/projects`}
            >{filterLang[lang].all}</Link>
            <Link
                className={active === filterLang[lang].webDesign.replaceAll(' ', '-').toLowerCase() ? 'active' : undefined}
                href={{
                    pathname: `/${lang}/projects`,
                    query: toggleQuery("type", filterLang[lang].webDesign.replaceAll(' ', '-'))
                }}
            >{filterLang[lang].webDesign}</Link>
            <Link
                className={active === filterLang[lang].socialMedia.replaceAll(' ', '-').toLowerCase() ? 'active' : undefined}
                href={{
                    pathname: `/${lang}/projects`,
                    query: toggleQuery("type", filterLang[lang].socialMedia.replaceAll(' ', '-'))
                }}>{filterLang[lang].socialMedia}</Link>
            <Link
                className={active === filterLang[lang].printProduction.replaceAll(' ', '-').toLowerCase() ? 'active' : undefined}
                href={{
                    pathname: `/${lang}/projects`,
                    query: toggleQuery("type", filterLang[lang].printProduction.replaceAll(' ', '-'))
                }}>{filterLang[lang].printProduction}</Link>
        </section>
    )
}

export default Filter