import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const PublicLayout = () => {
    return (
        <Stack screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='welcome' />
            <Stack.Screen options={{
                headerShown: false
            }} name='signin' />
        </Stack>
    )
}

export default PublicLayout

const styles = StyleSheet.create({})