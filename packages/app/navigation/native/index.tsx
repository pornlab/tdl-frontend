import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { HomeScreen } from 'app/features/home/Screen'
import { ThemesScreen } from 'app/features/themes'
import { QuestionView } from 'app/features/question'
import { QuestionList } from 'app/features/questionList'
import { Favourites } from 'app/features/Favourites'
import { Marathon } from 'app/features/Marathon'
import { Exam } from 'app/features/Exam'
import { AboutApp } from 'app/features/AboutApp'

const Stack = createNativeStackNavigator<{
  home: undefined
  themes: undefined
  favourites: undefined
  marathon: undefined
  exam: undefined
  aboutApp: undefined
  question: {
    id: string
  }
  theme: {
    id: string
  }
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Thailand Driving License',
        }}
      />
      <Stack.Screen
        name="themes"
        component={ThemesScreen}
        options={{
          title: 'Themes',
          headerBackTitle: 'Menu',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="question"
        component={QuestionView}
        options={{
          title: 'Вопрос',
          headerBackTitle: 'Themes',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="theme"
        component={QuestionList}
        options={{
          title: 'Вопросы',
          headerBackTitle: 'Themes',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="favourites"
        component={Favourites}
        options={{
          title: 'Избранное',
          headerBackTitle: 'меню',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="marathon"
        component={Marathon}
        options={{
          title: 'Марафон',
          headerBackTitle: 'Меню',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="exam"
        component={Exam}
        options={{
          title: 'Экзамен',
          headerBackTitle: 'Меню',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen
        name="aboutApp"
        component={AboutApp}
        options={{
          title: 'О приложении',
          headerBackTitle: 'Меню',
          headerTitleStyle: {
            fontSize: 20,
          },
        }}
      />
      {/*<Stack.Screen*/}
      {/*    name="create-question"*/}
      {/*    component={CreateQuestionScreen}*/}
      {/*    options={{*/}
      {/*        title: 'Добавление вопроса',*/}
      {/*    }}*/}
      {/*/>*/}
    </Stack.Navigator>
  )
}
