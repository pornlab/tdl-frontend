import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import EnMenu from '../../i18next/en/mainMenu.json'
import EnThemes from '../../i18next/en/themes.json'

import RuMenu from '../../i18next/ru/mainMenu.json'
import RuThemes from '../../i18next/ru/themes.json'

import EsMenu from '../../i18next/es/mainMenu.json'
import EsThemes from '../../i18next/es/themes.json'

import DeMenu from '../../i18next/de/mainMenu.json'
import DeThemes from '../../i18next/de/themes.json'

import FrMenu from '../../i18next/fr/mainMenu.json'
import FrThemes from '../../i18next/fr/themes.json'

export enum Languages {
  English = 'en',
  Russian = 'ru',
  Deutch = 'de',
  Spanish = 'es',
  Franch = 'fr',
}

export const getTranslationsByLanguage = (language: Languages) => {
  switch (language) {
    case Languages.English: {
      return { mainMenu: EnMenu, themes: EnThemes }
    }
    case Languages.Russian: {
      return { mainMenu: RuMenu, themes: RuThemes }
    }
    case Languages.Deutch: {
      return { mainMenu: DeMenu, themes: DeThemes }
    }
    case Languages.Franch: {
      return { mainMenu: FrMenu, themes: FrThemes }
    }
    case Languages.Spanish: {
      return { mainMenu: EsMenu, themes: EsThemes }
    }
    default: {
      return { mainMenu: EnMenu, themes: EnThemes }
    }
  }
  // return {
  //   mainMenu: require(`../../i18next/${language}/mainMenu.json`),
  //   themes: require(`../../i18next/${language}/themes.json`),
  // }
}

export const i18n = i18next.use(initReactI18next).init({
  lng: Languages.English,
  returnEmptyString: false,
  resources: {
    [Languages.Deutch]: getTranslationsByLanguage(Languages.Deutch),
    [Languages.English]: getTranslationsByLanguage(Languages.English),
    [Languages.Spanish]: getTranslationsByLanguage(Languages.Spanish),
    [Languages.Franch]: getTranslationsByLanguage(Languages.Franch),
    [Languages.Russian]: getTranslationsByLanguage(Languages.Russian),
  },
})

// export const initI18next = () =>
//   i18next.init({
//     lng: 'ru',
//     returnEmptyString: false,
//     resources: {
//       de: { mainMenu: require('../../i18next/de/mainMenu.json') },
//       en: { mainMenu: require('../../i18next/en/mainMenu.json') },
//       es: { mainMenu: require('../../i18next/es/mainMenu.json') },
//       fr: { mainMenu: require('../../i18next/fr/mainMenu.json') },
//       ru: { mainMenu: require('../../i18next/ru/mainMenu.json') },
//     },
//   })
