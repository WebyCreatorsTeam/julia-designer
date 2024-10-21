export const i18n = {
    locales: ["en", "ru", "he"],
    defaultLocale: "he",
} as const;

export type Locale = (typeof i18n)["locales"][number];