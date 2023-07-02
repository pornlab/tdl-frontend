import { Question, ThemeTypes } from 'app/features/dbList/interfaces'
import testQuestions from '../questions.json'
import vehicleLaw from '../themes/vehicleLaw.json'
import vehicleMaintenance from '../themes/vehicleMaintenance.json'
import techniquesOfSafeDriving from '../themes/techniquesOfSafeDriving.json'

const shuffle = (array: Question[]) => array.sort(() => Math.random() - 0.5)

export const getAllQuestions = () => {
  return testQuestions
}

export const getQuestionsByTheme = (theme: ThemeTypes | string): Question[] => {
  if (theme === 'test') {
    return testQuestions
  }
  switch (theme) {
    case ThemeTypes.VehicleLaw:
      return shuffle(vehicleLaw)
    case ThemeTypes.VehicleMaintenance:
      return shuffle(vehicleMaintenance)
    case ThemeTypes.TechniquesOfSafeDriving:
      return shuffle(techniquesOfSafeDriving)
    default:
      return shuffle(testQuestions)
  }
  // return testQuestions.filter((question) => question.theme === theme)
}

export const sortRandom = (arr: Question[]) => arr.sort(() => Math.random() - 0.5)

export const getQuestionsAndSortByTheme = (theme: ThemeTypes | string): Question[] =>
  getQuestionsByTheme(theme).sort(() => Math.random() - 0.5)

export const getMaraphoneQuestions = () => sortRandom(testQuestions)
