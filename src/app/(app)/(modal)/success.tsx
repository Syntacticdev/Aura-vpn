import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '@/components/ui/Safe-area-wrapper'
import Dot from '@/components/ui/Dot'
import { Check, CheckCircle, CheckCircle2, Copy, CreditCard, Power, Verified } from 'lucide-react-native'
import { HorizontalDivider, Host } from '@expo/ui/jetpack-compose'
import { router } from 'expo-router'

const Success = () => {
    return (
        <SafeAreaWrapper>
            <ScrollView contentContainerClassName="p-4">
                <View className='flex-row items-center gap-2 bg-surface-dim  self-center py-2 px-4 rounded-full'>
                    <Dot hw="8" color='green' rounded={true} />
                    <Text className='text-sm font-jetbrainsMono-semibold'>PAYMENT CONFIRMED</Text>
                    <Dot hw="4" color='green' rounded={true} />
                    <Text className='text-sm font-jetbrainsMono-semibold'>PLAN ACTIVATED</Text>
                </View>

                <View className='bg-muted w-32 h-32 rounded-full justify-center self-center items-center my-5'>
                    <View className='bg-surface-variant w-3/5 h-3/5 rounded-full items-center justify-center'>
                        <Check size={43} color={"#fff"} />
                    </View>
                </View>

                <View className='justify-center items-center gap-2'>
                    <Text className='text-3xl font-hanken-bold'>Payment Successful</Text>
                    <Text className='text-base text-center font-jetbrainsMono'>Your Aura Pro subscription is now active across all
                        your devices. High-speed encrypted routing is ready.</Text>
                </View>

                <View className=' rounded-lg bg-surface-dim p-4 gap-2 my-5'>
                    <View className='flex-row items-center justify-between'>
                        <View>
                            <Text className='font-jetbrainsMono text-sm'>PLAN DETAILS</Text>
                            <Text className='font-hanken-bold text-xl'>AURA PRO UNLIMITED</Text>
                        </View>

                        <View className='flex-row items-center gap-1 px-2 py-1 justify-center rounded-full bg-tertiary-fixed-variant'>
                            <Verified fill={"#ffff"} color="#005236"></Verified>
                            <Text className=' text-white text-sm font-hanken-bold'>PLAN ACTIVE</Text>
                        </View>
                    </View>
                    <Host style={{ flex: 1, marginVertical: 5 }}>
                        <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
                    </Host>
                    <View className='flex-row items-center gap-3'>
                        <View>
                            <Text className='font-jetbrainsMono text-sm'>AMOUNT PAID</Text>
                            <Text className='font-hanken-bold text-xl'>$47.88 / billed annually</Text>
                        </View>

                        <View className=' gap-1 px-2 py-1 justify-center rounded-full'>
                            <Text className='font-jetbrainsMono text-sm'>PAYMENT METHOD</Text>
                            <View className='flex-row items-center gap-2'>
                                <CreditCard />
                                <Text className='font-hanken text-lg'>CARD</Text>
                            </View>
                        </View>
                    </View>
                    <Host style={{ flex: 1, marginVertical: 5, }}>
                        <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
                    </Host>
                    <View className='flex-row justify-between items-center'>
                        <View className='flex-row items-center gap-2'>
                            <CheckCircle color={"#005236"} />
                            <Text className='text-base'>Renew Nov 14, 2026</Text>
                        </View>
                        <Pressable className='flex-row items-center gap-2'>
                            <Copy />
                            <Text className='text-base text-hanken-bold text-c_primary'>COPY REF</Text>
                        </Pressable>
                    </View>
                </View>

                {/* FEATURES */}
                <View className='mt-5'>
                    <Text className='font-jetbrainsMono text-base'>INCLUDED FEATURES</Text>

                    <View className='gap-2 mt-2'>
                        <View className='flex-row items-center gap-2'>
                            <CheckCircle2 color={"#005236"} />
                            <Text>10 Simultaneous Devices</Text>
                        </View>
                        <View className='flex-row items-center gap-2'>
                            <CheckCircle2 color={"#005236"} />
                            <Text>10 Gbps RAM-Only Routing</Text>
                        </View>
                        <View className='flex-row items-center gap-2'>
                            <CheckCircle2 color={"#005236"} />
                            <Text>CleanNet AD & Tracker Shield</Text>
                        </View>
                    </View>
                </View>

                {/* VPN ENABLE BUTTON */}
                <Pressable className='flex-row items-center justify-center p-4 gap-2 mt-5 bg-black rounded-lg'>
                    <Power color={"#49af67"} />
                    <Text className='text-white font-hanken-bold text-xl'>Enable VPN</Text>
                </Pressable>
                <Pressable onPress={() => router.dismissAll()} className='flex-row items-center justify-center p-4 gap-2 my-5 bg-black rounded-lg'>
                    <Text className='text-white font-hanken-bold text-xl'>CLOSE</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaWrapper>
    )
}

export default Success

const styles = StyleSheet.create({})