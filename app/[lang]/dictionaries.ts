// import "server-only";
const dictionaries = {
    en: () => import("@/dictionaries/en.json").then((module) => module.default),
    he: () => import("@/dictionaries/he.json").then((module) => module.default),
    ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
};

export const getDictionary = (locale: string, admin = false) => {
    if (admin) return dictionaries["en"]();
    const dictionary = dictionaries[locale]();
    return dictionary;
};