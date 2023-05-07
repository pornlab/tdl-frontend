import config from '../tamagui.config'
import * as React from 'react';
import { NavigationProvider } from './navigation'
import {isWeb, TamaguiProvider, TamaguiProviderProps} from '@my/ui'
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? 'dark' : 'light';
  const inverseTheme = scheme === 'dark' ? 'light' : 'dark';
  return (
    <TamaguiProvider config={config} disableInjectCSS defaultTheme={theme} {...rest}>
        {/*{!isWeb && <StatusBar style={inverseTheme} />}*/}
      <NavigationProvider>{children}</NavigationProvider>
    </TamaguiProvider>
  )
}
