export enum ThemeTypes {
  VehicleLaw = 'VehicleLaw',
  RoadTrafficLaw = 'RoadTrafficLaw',
  TrafficSigns = 'TrafficSigns',
  SafeDriving = 'SafeDriving',
  TechniquesOfSafeDriving = 'TechniquesOfSafeDriving',
  VehicleMaintenance = 'VehicleMaintenance',
}

export enum Languages {
  English = 'en',
  Russian = 'ru',
  Deutch = 'de',
  Spanish = 'es',
  Franch = 'fr',
}

export interface Value {
  value: string
}

export type Title = {
  [index in Languages]: Value
}

export type AnswerValue = {
  [index in Languages]: string
}

export interface Answer {
  value: AnswerValue
  isAnswer: boolean
}

export interface Question {
  title: Title
  answers: Answer[]
  isFavourite: boolean
  theme: string
}
