import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Load translations from backend
  .use(LanguageDetector) // Automatically detect the user's language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to YAML files
    },
    fallbackLng: 'en', // Default language
    ns: ['ui', 'time'], // UI-only translations bundled with the template
    defaultNS: 'ui', // Default namespace
    supportedLngs: ['en', 'zh'],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
