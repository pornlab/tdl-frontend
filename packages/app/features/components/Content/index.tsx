import React from 'react'
import {isWeb, ScrollView} from "@my/ui";

interface Props {
    children: React.ReactNode
}

export const Content: React.FC<Props> = ({ children }) => {
    return (
        <ScrollView
            w="100%"
            h="100%"
            bc="$background"
            contentContainerStyle={{
                display: 'flex',
                alignItems: 'center'
            }}
        >
            {children}
        </ScrollView>
    )
}