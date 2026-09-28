import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AppLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='(tabs)' />
            {/* <Stack.Screen name="(modal)"
                options={{
                    animation: "slide_from_bottom",
                    presentation: "fullScreenModal"
                }}
            /> */}
        </Stack>
    )
}

export default AppLayout

const styles = StyleSheet.create({})