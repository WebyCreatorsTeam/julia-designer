// interface LocaleData {
//     navbar: {
//         links: {
//             about: string;
//             portfolio: string;
//             contact: string;
//         };
//     };
//     about: {
//         title: string;
//         description: string;
//     };
// }

// interface Dictionary {
//     [key: string]: () => Promise<LocaleData>;
// }

// import "server-only";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: any
// : Dictionary
 = {
    en: () => import("@/dictionaries/en.json").then((module) => module.default),
    he: () => import("@/dictionaries/he.json").then((module) => module.default),
    ru: () => import("@/dictionaries/ru.json").then((module) => module.default)
};

export const getDictionary = (locale: string
    // , admin = false
) => {
    // console.log(locale)
    // if (admin) return dictionaries["en"]();
    const dictionary = dictionaries[locale]();
    return dictionary;
};