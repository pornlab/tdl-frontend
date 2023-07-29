import { Question, ThemeTypes } from 'app/features/dbList/interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage'

import vehicleLaw from '../themes/vehicleLaw.json'
import safeDriving from '../themes/safeDriving.json'
import vehicleMaintenance from '../themes/vehicleMaintenance.json'
import techniquesOfSafeDriving from '../themes/techniquesOfSafeDriving.json'
import trafficSigns from '../themes/trafficAndWarningSigns.json'
import roadTrafficLaw from '../themes/roadTrafficLaw.json'

export const sortRandom = (arr: Question[]) => arr.sort(() => Math.random() - 0.5)

export const getNoRandomAllQuestions = () => [
  ...vehicleLaw,
  ...vehicleMaintenance,
  ...techniquesOfSafeDriving,
  ...safeDriving,
  ...trafficSigns,
  ...roadTrafficLaw,
]

export const getQuestionsByTheme = (theme: ThemeTypes | string | undefined): Question[] => {
  if (!theme) return []
  switch (theme) {
    case ThemeTypes.VehicleLaw:
      return sortRandom(vehicleLaw)
    case ThemeTypes.VehicleMaintenance:
      return sortRandom(vehicleMaintenance)
    case ThemeTypes.TechniquesOfSafeDriving:
      return sortRandom(techniquesOfSafeDriving)
    case ThemeTypes.SafeDriving:
      return sortRandom(safeDriving)
    case ThemeTypes.TrafficSigns:
      return sortRandom(trafficSigns)
    case ThemeTypes.RoadTrafficLaw:
      return sortRandom(roadTrafficLaw)
    default:
      return []
  }
}

export const getMaraphoneQuestions = () =>
  sortRandom([
    ...sortRandom(vehicleLaw),
    ...sortRandom(vehicleMaintenance),
    ...sortRandom(techniquesOfSafeDriving),
    ...sortRandom(safeDriving),
    ...sortRandom(trafficSigns),
    ...sortRandom(roadTrafficLaw),
  ])

export const getFavouritesQuestions = async () => {
  const favourites: string | null = await AsyncStorage.getItem('favourites')
  if (!favourites || !favourites.length) return []

  const parsedQuestions = favourites
    .split(',')
    .map((i) => +i)
    .reverse()

  return getNoRandomAllQuestions()
    .map((i) => (parsedQuestions.includes(i.id) ? i : null))
    .filter((i) => i)
}

export const getExamQuestions = () => {
  const getRandQuestionsOfTheme = (theme) => sortRandom(theme).slice(0, 13)
  return sortRandom([
    ...getRandQuestionsOfTheme(vehicleLaw),
    ...getRandQuestionsOfTheme(vehicleMaintenance),
    ...getRandQuestionsOfTheme(techniquesOfSafeDriving),
    ...getRandQuestionsOfTheme(safeDriving),
    ...getRandQuestionsOfTheme(trafficSigns),
    ...getRandQuestionsOfTheme(roadTrafficLaw),
  ]).slice(0, 50)
}
