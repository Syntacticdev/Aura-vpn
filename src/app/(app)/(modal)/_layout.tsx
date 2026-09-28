import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const ModalLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        />
    )
}

export default ModalLayout

const styles = StyleSheet.create({})