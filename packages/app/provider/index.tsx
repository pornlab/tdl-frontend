import config from '../tamagui.config'
import * as React from 'react'
import { useState } from 'react'
import { NavigationProvider } from './navigation'
import { TamaguiProvider, TamaguiProviderProps } from '@my/ui'
import { useColorScheme } from 'react-native'
import { i18n } from 'app/configs/i18next'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const [i18nLoaded, setI18nLoaded] = useState(false)
  const scheme = useColorScheme()

  i18n.then(() => setI18nLoaded(true))

  if (!i18nLoaded) return null
  const theme = scheme === 'dark' ? 'dark' : 'light'
  const inverseTheme = scheme === 'dark' ? 'light' : 'dark'
  return (
    <TamaguiProvider config={config} disableInjectCSS defaultTheme={theme} {...rest}>
      {/*{!isWeb && <StatusBar style={inverseTheme} />}*/}
      <NavigationProvider>{children}</NavigationProvider>
    </TamaguiProvider>
  )
}
