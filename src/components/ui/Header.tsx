import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    const logo = require("@/assets/images/logo.png")
    const user = require("@/assets/images/user.png")
    return (

        <View className='flex-row justify-between items-center '>

            <View className='flex-row items-center justify-center gap-2'>
                <Image resizeMode='contain' source={logo} className='w-10 h-10' />
                <Text className='text-2xl font-bold font-hanken-bold'>Aura VPN</Text>
                <Text className='text-sm font-hanken-regular bg-black text-white font-jetbrainsMono-medium px-2 py-1 rounded-full'>Secure</Text>
            </View>

            <Pressable>
                <View className='w-10 h-10 border border-2 border-muted rounded-full items-center justify-center overflow-hidden'>

                    <Image resizeMode='contain' source={user} className='w-10 h-10 ' />
                </View>
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})