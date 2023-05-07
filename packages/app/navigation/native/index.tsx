import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'

import { HomeScreen } from '../../features/home/Screen'
import {ThemesScreen} from "app/features/themes";
import {UserDetailScreen} from "app/features/user/detail-screen";

const Stack = createNativeStackNavigator<{
    home: undefined
    themes: undefined
    'user-detail': {
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
                        fontSize: 20
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
