import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

import EnMenu from '../../i18next/en/mainMenu.json'
import EnThemes from '../../i18next/en/themes.json'
import EnQuestion from '../../i18next/en/question.json'

import RuMenu from '../../i18next/ru/mainMenu.json'
import RuThemes from '../../i18next/ru/themes.json'
import RuQuestion from '../../i18next/ru/question.json'

import EsMenu from '../../i18next/es/mainMenu.json'
import EsThemes from '../../i18next/es/themes.json'
import EsQuestion from '../../i18next/es/question.json'

import DeMenu from '../../i18next/de/mainMenu.json'
import DeThemes from '../../i18next/de/themes.json'
import DeQuestion from '../../i18next/de/question.json'

import FrMenu from '../../i18next/fr/mainMenu.json'
import FrThemes from '../../i18next/fr/themes.json'
import FrQuestion from '../../i18next/fr/question.json'

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
      return { mainMenu: EnMenu, themes: EnThemes, question: EnQuestion }
    }
    case Languages.Russian: {
      return { mainMenu: RuMenu, themes: RuThemes, question: RuQuestion }
    }
    case Languages.Deutch: {
      return { mainMenu: DeMenu, themes: DeThemes, question: DeQuestion }
    }
    case Languages.Franch: {
      return { mainMenu: FrMenu, themes: FrThemes, question: FrQuestion }
    }
    case Languages.Spanish: {
      return { mainMenu: EsMenu, themes: EsThemes, question: EsQuestion }
    }
    default: {
      return { mainMenu: EnMenu, themes: EnThemes, question: EnQuestion }
    }
  }
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
