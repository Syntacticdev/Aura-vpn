import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ModalLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}

        >
            <Stack.Screen
                options={{
                    animation: "slide_from_bottom",
                    presentation: "formSheet"
                }}
                name='subscription' />
        </Stack>
    )
}

export default ModalLayout

const styles = StyleSheet.create({})