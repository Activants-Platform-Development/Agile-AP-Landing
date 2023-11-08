import i18next from "i18next";
//@ts-ignore
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./languages/en.json";
import th from "./languages/th.json";

const resources = {
  en: {
    translation: { ...en },
  },
  th: {
    translation: { ...th },
  },
};

i18next
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    supportedLngs: ["en", "th"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

// import i18next from "i18next";
// import HttpBackend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// const apiKey = "8fxZII7s2M6Cd29-VVCwaw";
// const loadPath = `https://api.i18nexus.com/project_resources/translations/{{lng}}/{{ns}}.json?api_key=${apiKey}`;

// i18next
//   .use(HttpBackend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     fallbackLng: "en",

//     ns: ["default"],
//     defaultNS: "default",

//     supportedLngs: ["en", "th"],

//     backend: {
//       loadPath: loadPath,
//     },
//   });

export default i18next;
