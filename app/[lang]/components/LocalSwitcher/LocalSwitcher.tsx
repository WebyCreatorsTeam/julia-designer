"use client";

import React from 'react'
import { usePathname, useRouter } from "next/navigation";
import { i18n } from '@/i18n.config';

const LocalSwitcher = () => {
    const pathName = usePathname();
    const currentLocale = pathName?.split("/")[1];
    const router = useRouter();

    const redirectPath = (locale: string) => {
        if (!pathName) return "/";
        const segments = pathName.split("/");
        segments[1] = locale;
        const newLink = segments.join("/");
        return router.push(newLink);
    };

    return (
        <div>
            <select
            onChange={(e) => redirectPath(e.target.value)}
            defaultValue={currentLocale}
            className="flex gap-x-3 bg-cdd-black text-center align-middle uppercase text-white sm:text-xs md:text-sm lg:text-base"
            id="language_switcher"
        >
            {i18n.locales.map((locale: string) => {
                return (
                    <option
                        // eslint-disable-next-line jsx-a11y/aria-props
                        aria-description={`pick ${locale} language`}
                        value={locale}
                        key={locale}
                    >
                        {locale}
                    </option>
                );
            })}
        </select>
        </div>
    )
}

export default LocalSwitcher