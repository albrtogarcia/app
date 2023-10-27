import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      ...require('./locales/es/esMain.json'),
      ...require('./locales/es/esCore.json'),
    },
  },
}

// append to url ?lng=en to test
const options = {
  order: ['querystring', 'navigator'],
  lookupQuerystring: 'language',
}

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: options,
    fallbackLng: 'es',
    lng: 'es',
    keySeparator: '.', // object delimiter
    interpolation: { escapeValue: false },
  })

export default i18n
