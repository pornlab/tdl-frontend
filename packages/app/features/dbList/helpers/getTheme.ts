import { Question, ThemeTypes } from 'app/features/dbList/interfaces'
import questions from '../questions.json'

export const getQuestionsByTheme = (theme: ThemeTypes | string): Question[] =>
  questions.filter((question) => question.theme === theme)

export const sortRandom = (arr: Question[]) => arr.sort(() => Math.random() - 0.5)

export const getQuestionsAndSortByTheme = (theme: ThemeTypes | string): Question[] =>
  getQuestionsByTheme(theme).sort(() => Math.random() - 0.5)

export const getMaraphoneQuestions = () => sortRandom(questions)
