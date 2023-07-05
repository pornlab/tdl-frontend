import { Question, ThemeTypes } from 'app/features/dbList/interfaces'
import testQuestions from '../questions.json'
import vehicleLaw from '../themes/vehicleLaw.json'
import vehicleMaintenance from '../themes/vehicleMaintenance.json'
import techniquesOfSafeDriving from '../themes/techniquesOfSafeDriving.json'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const sortRandom = (arr: Question[]) => arr.sort(() => Math.random() - 0.5)

export const getAllQuestions = () => {
  return testQuestions
}

export const getNoRandomAllQuestions = () => [
  ...vehicleLaw,
  ...vehicleMaintenance,
  ...techniquesOfSafeDriving,
]

export const getQuestionsByTheme = (theme: ThemeTypes | string | undefined): Question[] => {
  if (!theme) return []
  if (theme === 'test') {
    return testQuestions
  }
  switch (theme) {
    case ThemeTypes.VehicleLaw:
      return sortRandom(vehicleLaw)
    case ThemeTypes.VehicleMaintenance:
      return sortRandom(vehicleMaintenance)
    case ThemeTypes.TechniquesOfSafeDriving:
      return sortRandom(techniquesOfSafeDriving)
    default:
      return sortRandom(testQuestions)
  }
  // return testQuestions.filter((question) => question.theme === theme)
}

export const getMaraphoneQuestions = () =>
  sortRandom([...vehicleLaw, ...vehicleMaintenance, ...techniquesOfSafeDriving])

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
