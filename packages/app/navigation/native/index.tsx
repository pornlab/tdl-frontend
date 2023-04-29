import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { HomeScreen } from '../../features/home/Screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import {ThemeDetailScreen} from "app/features/theme/detail-screen";
import {Text, Button} from "@my/ui";
import { ListChecks, Star, AlarmClock, Info, Plus } from '@tamagui/lucide-icons'
import {CreateQuestionScreen} from "app/features/question/Create";

const Stack = createNativeStackNavigator<{
  home: undefined
  'theme-detail': {
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
          title: 'Темы для изучения',
            // headerStyle: {
            //     backgroundColor: '#f4511e',
            // },
            // headerTintColor: '#fff',
            // headerTitleStyle: {
            //     fontWeight: 'bold',
            // },
        }}
      />
        <Stack.Screen
            name="theme-detail"
            component={ThemeDetailScreen}
            options={{
                title: 'Тема',
                headerBackTitle: 'Back'
            }}
        />
        <Stack.Screen
            name="create-question"
            component={CreateQuestionScreen}
            options={{
                title: 'Добавление вопроса',
            }}
        />
    </Stack.Navigator>
  )
}
