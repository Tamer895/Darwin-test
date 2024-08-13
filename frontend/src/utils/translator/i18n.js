// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    debug: false,
    supportedLngs: ['en', 'ru', 'kz'],
    fallbackLng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    ns: ['header', 'footer', 'studio', 'inputs', 'home', 'auth'],
    defaultNS: 'header',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
