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
            {pathName.length <= 3 && (
                <>
                    {i18n.locales.map((locale: string) => {
                        return (
                            <div
                                onClick={() => redirectPath(locale)}
                                key={locale}
                            >
                                {locale.toLocaleUpperCase()}
                            </div>
                        );
                    })}
                    <span>|</span>
                </>
            )}
        </>
    )
}

export default LocalSwitcher