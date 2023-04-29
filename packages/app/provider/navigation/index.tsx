import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import * as React from 'react'
import { useMemo } from 'react'
import { useColorScheme } from 'react-native'

export function NavigationProvider({ children }: { children: React.ReactNode }) {
  const scheme = useColorScheme()
  return (
    <NavigationContainer
      theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
      linking={useMemo(
            () => ({
                prefixes: [Linking.createURL('/')],
                config: {
                    initialRouteName: 'home',
                    screens: {
                        home: '',
                        'theme-detail': 'theme/:id',
                        'create-question': 'theme/:id/question/create',
                        'admin-panel': 'admin-panel',
                    },
                },
            }),
            []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
