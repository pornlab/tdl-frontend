import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { HomeScreen } from '../../features/home/Screen'
import { UserDetailScreen } from '../../features/user/detail-screen'
import {ThemeDetailScreen} from "app/features/theme/detail-screen";

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
        }}
      />
      <Stack.Screen
        name="theme-detail"
        component={ThemeDetailScreen}
        options={{
          title: 'Тема',
        }}
      />
    </Stack.Navigator>
  )
}
