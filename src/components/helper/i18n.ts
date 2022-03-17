import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../languages/en.json';
import hi from '../languages/hi.json';
import dv from '../languages/dv.json';
import bn from '../languages/bn.json';
import ja from '../languages/ja.json';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: en,
    dv: dv,
    hi: hi,
    bn: bn,
    ja: ja,
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
