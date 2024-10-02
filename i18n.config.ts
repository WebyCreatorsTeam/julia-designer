export const i18n = {
    defaultLocale: "he",
    locales: ["he", "en", "ru"],
  } as const;
  
  export type Locale = (typeof i18n)["locales"][number];