export const i18n = {
    locales: ["he", "ru", "en"],
    defaultLocale: "he",
} as const;

export type Locale = (typeof i18n)["locales"][number];