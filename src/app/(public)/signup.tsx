import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWrapper from '@/components/ui/Safe-area-wrapper'
import Dot from '@/components/ui/Dot'
import { ArrowRight, Eye, EyeOff, KeyRound, LockKeyhole, Mail, Server, ShieldCheck } from 'lucide-react-native'
import { KeyboardAwareScrollView, KeyboardToolbar } from 'react-native-keyboard-controller';
import { router } from 'expo-router'

const Signup = () => {
    const [passwordObscure, setPasswordObscure] = useState(true)
    const AppIcon = require("@/assets/images/logo.png")
    const google = require('@/assets/images/google.png')
    const apple = require('@/assets/images/apple.png')
    return (
        <SafeAreaWrapper>
            <KeyboardAwareScrollView
                bottomOffset={24}
                contentContainerClassName="flex-grow p-4"
                keyboardDismissMode="interactive"
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}

            >
                <View className='flex-row items-end self-center'>
                    <Image resizeMode='contain' source={AppIcon} className='w-14 h-14 self-center' />
                    <Text className='text-[28px] font-hanken-semibold '>AURA</Text>
                </View>
                <View className='flex-row items-center self-center rounded-full my-4 gap-2 bg-surface-dim py-1 px-2'>
                    <Dot hw='10' rounded={true} />
                    <Text className='text-sm font-hanken-semibold'>ZERO-LOG PROTOCOL . 256-BIT ENCRYPTED</Text>
                </View>

                <View className='items-center gap-2 p-4'>
                    <Text className='text-3xl font-hanken-bold'>Create Secure Account</Text>
                    <Text className='text-center text-base'>Reclaim your digital sovereignty. Private by
                        design, encrypted end-to-end with
                        logging.</Text>
                </View>

                <View className='gap-4'>
                    <Pressable className='flex-row items-center justify-center gap-4 bg-black rounded-2xl p-4'>
                        <Image resizeMode='contain' className='w-8 h-8' source={apple} />
                        <Text className='text-lg text-white font-hanken-semibold'>Continue with Apple</Text>
                    </Pressable>
                    <Pressable className='flex-row items-center justify-center gap-4 bg-white shadow-card android:elevation-sm rounded-2xl p-4'>
                        <Image resizeMode='contain' className='w-8 h-8' source={google} />
                        <Text className='text-lg  font-hanken-semibold'>Continue with Google</Text>
                    </Pressable>
                </View>

                {/* LINE BREAKER */}
                <View className='relative my-4 h-6 justify-center'>
                    <View className='h-px w-full bg-primary-fixed' />
                    <View
                        pointerEvents='none'
                        className='absolute inset-0 items-center justify-center'
                    >
                        <Text className='bg-white px-3 text-xs font-hanken-semibold tracking-wider  text-surface-variant'>
                            OR CONTINUE WITH EMAIL
                        </Text>
                    </View>
                </View>

                {/* Form */}

                <View className='my-5 gap-2'>
                    <View className='gap-1'>
                        <Text className='text-base font-jetbrainsMono-bold tracking-wider'>EMAIL ADDRESS</Text>
                        <View className='flex-row items-center gap-2 rounded-lg bg-muted px-4 py-2'>
                            <Mail />
                            <TextInput numberOfLines={1} className='flex-1' placeholder='ciphe@network.secure' />
                        </View>
                    </View>
                    <View className='gap-1'>
                        <Text className='text-base font-jetbrainsMono-bold tracking-wider'>PASSWORD</Text>
                        <View className='flex-row items-center gap-2 rounded-lg bg-muted px-4 py-2'>
                            <LockKeyhole />
                            <TextInput secureTextEntry={passwordObscure} numberOfLines={1} className='flex-1' placeholder='ciphe@network.secure' />
                            {passwordObscure ? <EyeOff onPress={() => setPasswordObscure(false)} /> : <Eye onPress={() => setPasswordObscure(true)} />}
                        </View>
                    </View>


                    <View className='flex-row px-4 py-6 rounded-lg bg-muted gap-2'>
                        <ShieldCheck size={36} color={"#2563eb"} />
                        <View className='flex-1 min-w-0 gap-2'>
                            <Text className='font-jetbrainsMono-bold text-xl'>Strict Zero-Logs Guarantee</Text>
                            <Text className='text-base'>We do not track, collect, or log your browsing history, connection addresses.</Text>
                        </View>
                    </View>

                    <Pressable className='flex-row items-center justify-center gap-2 rounded-lg bg-black p-4 mt-4'>
                        <Text className='text-base font-jetbrainsMono-semibold text-white'>Create Aura Account</Text>
                        <ArrowRight size={24} color={"#fff"} />
                    </Pressable>

                    <Text className='text-center mt-4'>By proceeding, you agree to Aura VPN's <Text className='text-xl font-hanken-bold'>Terms of
                        Service</Text> and <Text className='text-xl font-hanken-bold'>Privacy Policy.</Text></Text>

                    <View className='flex-row items-center justify-center gap-1 mt-3'>
                        <Text className='text-base'>Already have an Aura account? </Text>
                        <Pressable onPress={() => router.push("/(public)/signin")}><Text className='text- font-hanken-bold text-xl text-c_primary '>Sign In</Text></Pressable>
                    </View>
                </View>

                <View className='flex-row justify-center my-4 item-center gap-3'>
                    <View className='flex-row items-center gap-1'>
                        <LockKeyhole size={20} color={"#3ac4a1"} />
                        <Text className='text-[f1f5f9]'>AES-256-GCM</Text>
                    </View>
                    <View className='flex-row items-center gap-1'>
                        <KeyRound size={20} color={"#3ac4a1"} />
                        <Text className='text-[f1f5f9]'>WireGuard-X</Text>
                    </View>
                    <View className='flex-row items-center gap-1'>
                        <Server size={20} color={"#3ac4a1"} />
                        <Text className='text-[f1f5f9]'>Private DNS</Text>
                    </View>
                </View>

            </KeyboardAwareScrollView>
            <KeyboardToolbar />

        </SafeAreaWrapper >
    )
}

export default Signup

const styles = StyleSheet.create({})