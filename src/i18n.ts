// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en", // Default language if the user's language is not available
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      // Path to your translation files
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
  });

export default i18n;
