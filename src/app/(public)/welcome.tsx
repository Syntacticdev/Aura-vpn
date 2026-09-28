import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '@/components/ui/Safe-area-wrapper'
import Dot from '@/components/ui/Dot'
import OnboardingSpinner from '@/components/public/OnboardingSpinner'
import { ArrowRight, BadgeCheck, Shield } from 'lucide-react-native'
import { router } from 'expo-router'

const Welcome = () => {
    ;
    return (
        <SafeAreaWrapper>
            <View className='flex-1 items-center justify-center gap-2 p-4'>
                <OnboardingSpinner />
                <Text className='font-hanken-semibold text-3xl'>Privacy, Proven.</Text>
                <Text className='text-base text-center'>Zero-logs, RAM-only routing under sovereign Swiss
                    jurisdiction.</Text>

                <View className='flex-row items-center justify-center gap-2 w-3/4 flex-wrap my-5'>
                    <View className='flex-row items-center gap-2 bg-muted rounded-full py-1 px-2'>
                        <Dot color='green' hw={"8"} rounded={true} />
                        <Text className='text-sm font-jetbrainsMono-medium'>100% RAM Only</Text>
                    </View>
                    <View className='flex-row items-center gap-2 bg-muted rounded-full py-1 px-2'>
                        <Dot color='blue' hw={"8"} rounded={true} />
                        <Text className='text-sm font-jetbrainsMono-medium'>WireGuard-X</Text>
                    </View>
                    <View className='flex-row items-center gap-2 bg-muted rounded-full py-1 px-2'>
                        <Dot color='green' hw={"8"} rounded={true} />
                        <Text className='text-sm font-jetbrainsMono-medium'>Swiss Enclave</Text>
                    </View>
                </View>

                <View className='flex-row items-center gap-2'>
                    <BadgeCheck fill={"green"} color={"#fff"} />
                    <Text className='text-base'>Independently audited by CureS3 & PwC</Text>
                </View>

                <Pressable onPress={() => router.replace("/(public)/signup")} className='flex-row items-center justify-center w-full mt-3 bg-black rounded-lg p-4'>
                    <Text className='text-lg text-white font-hanken-bold'>Get Started</Text>
                    <ArrowRight color={"#fff"} />
                </Pressable>

                <View className='flex-row items-center gap-2 mt-4'>
                    <Text className='font-hanken'>Already have an account?</Text>
                    <Pressable><Text className='underline font-hanken-bold'>Sign In</Text></Pressable>
                </View>

                <View className='flex-row items-center gap-2'>
                    <Pressable><Text className='underline font-hanken-medium'>Terms</Text></Pressable>
                    <Pressable><Text className=''>&</Text></Pressable>
                    <Pressable><Text className='underline font-hanken'>Privacy Charters</Text></Pressable>
                </View>
            </View>
        </SafeAreaWrapper>
    )
}

export default Welcome

const styles = StyleSheet.create({})