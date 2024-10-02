"use client";

import React from 'react'
import { usePathname, useRouter } from "next/navigation";
import { i18n } from '@/i18n.config';

const LocalSwitcher = () => {
    const pathName = usePathname();
    // const currentLocale = pathName?.split("/")[1];
    const router = useRouter();

    const redirectPath = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        const newLink = segments.join("/");
        return router.push(newLink);
    };

    return (
        <>
            {i18n.locales.map((locale: string) => {
                return (
                    <div
                        onClick={() => redirectPath(locale)}
                        key={locale}
                        // className={
                        //     currentLocale === locale
                        //         ? "text-gray-500"
                        //         : "text-gray-300 hover:text-gray-500"
                        // }
                    >
                        {locale.toLocaleUpperCase()}
                    </div>
                );
            })}
        </>
    )
}

export default LocalSwitcher