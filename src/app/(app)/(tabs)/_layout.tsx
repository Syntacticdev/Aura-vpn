import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { ChartNoAxesCombined, GlobeCode, Shield, SlidersHorizontal } from 'lucide-react-native'

const TabLayout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "black",
            tabBarInactiveTintColor: "#4edea3",

            tabBarLabelStyle: {
                fontFamily: "JetBrainsMono",
                fontSize: 10,
            },
            tabBarStyle: {
                height: 70,
                paddingBottom: 10
            }
        }}>
            <Tabs.Screen name='index' options={{
                tabBarIcon: ({ color, focused, size }) => (
                    <Shield color={color} size={21} />
                ),
                title: "CONNECT"
            }} />
            <Tabs.Screen name='server' options={{

                tabBarIcon: ({ color, focused, size }) => (
                    <GlobeCode color={color} size={21} />
                ),
                title: "SERVERS"
            }} />
            <Tabs.Screen name='analytics' options={{
                tabBarIcon: ({ color, focused, size }) => (
                    <ChartNoAxesCombined color={color} size={21} />
                ),
                title: "ANALYTICS"
            }} />
            <Tabs.Screen name='settings' options={{
                tabBarIcon: ({ color, focused, size }) => (
                    <SlidersHorizontal color={color} size={21} />
                ),
                title: "SETTINGS"
            }} />
        </Tabs>
    )
}

export default TabLayout

const styles = StyleSheet.create({})