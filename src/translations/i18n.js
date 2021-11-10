import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';
import vi from './locales/vi.json';

const options = {
  order: ['localStorage'],
  lookupLocalStorage: 'i18nextLng',
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: options,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vi,
      },
    },
  });

export default i18n;
