import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { HomeScreen } from '../../features/home/Screen'
import { UserDetailScreen } from '../../features/user/detail-screen'

const Stack = createNativeStackNavigator<{
  home: undefined
  'user-detail': {
    id: string
  }
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
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User1',
        }}
      />
      <Stack.Screen
        name="theme-detail"
        component={UserDetailScreen}
        options={{
          title: 'Theme1',
        }}
      />
    </Stack.Navigator>
  )
}
