import { Languages } from 'app/configs/i18next'

export enum ThemeTypes {
  VehicleLaw = 'vehicleLaw',
  RoadTrafficLaw = 'roadTrafficLaw',
  TrafficSigns = 'trafficSigns',
  SafeDriving = 'safeDriving',
  TechniquesOfSafeDriving = 'techniquesOfSafeDriving',
  VehicleMaintenance = 'vehicleMaintenance',
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
  id: number
  title: Title
  answers: Answer[]
  isFavourite: boolean
  theme: string
  imageId: number | null
}
