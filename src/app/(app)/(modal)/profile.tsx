import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWrapper from '@/components/ui/Safe-area-wrapper'
import { ArrowLeft, Bug, ChevronRight, CircleX, EllipsisVertical, Files, KeyRound, LaptopMinimal, LaptopMinimalCheck, LockKeyhole, LogOut, ScrollText, Settings, Smartphone } from 'lucide-react-native'
import Dot from '@/components/ui/Dot'
import { router } from 'expo-router'
import { HorizontalDivider, Host, Switch } from '@expo/ui/jetpack-compose'

const Profile = () => {
    const [faceID, setfaceID] = useState(false)
    return (
        <SafeAreaWrapper edges={["top"]}>
            <ScrollView contentContainerClassName='p-4'>
                {/* HEADER  */}
                <View className='flex-row items-center gap-4'>
                    <Pressable onPress={() => router.back()}>
                        <ArrowLeft />
                    </Pressable>

                    <View className='flex-1'>
                        <Text className='text-2xl font-hanken-bold'>Account & Profile</Text>
                        <View className='flex-row items-center gap-2'>
                            <Dot hw="8" rounded={true} />
                            <Text className='text-lg font-jetbrainsMono '>ENCLAVE ID #8841-X</Text>
                        </View>
                    </View>

                    <Pressable>
                        <Settings />
                    </Pressable>
                </View>

                {/* PROFILE */}

                <View className='shadow-card android:elevation-sm bg-white rounded-lg my-4 p-4 gap-2'>
                    {/* Profile Card */}
                    <View className='flex-row gap-4'>
                        <View className='border-surface-dim overflow-hidden border-2 rounded-full w-24 h-24'>
                            <Image className='w-full h-full' source={require("@/assets/images/user.png")} />
                        </View>
                        <View className='gap-3'>
                            <View className='flex-row items-center gap-3'>
                                <Text className='font-hanken-bold text-2xl'>Elena Rostova</Text>
                                <Text className=' bg-[#aff1d6] text-tertiary-fixed-variant py-1 px-2 font-hanken-bold text-sm rounded-md border-surface-variant border2'>VERIFIED</Text>
                            </View>
                            <View className='flex-row  items-center gap-2 bg-muted rounded-md p-2'>
                                <Text className='text-base'>cipher.node99@aura.net</Text>
                                <Pressable><Files size={18} /></Pressable>
                            </View>
                        </View>
                    </View>

                    <View className='bg-surface-dim p-4 my-4 gap-1 rounded-lg '>
                        <View className='flex-row items-center justify-between'>
                            <Text className='font-jetbrainsMono-bold text-xl'>AURA PRO UNLIMITED</Text>
                            <Text className='bg-[#aff1d6] text-tertiary-fixed-variant py-1 px-2 font-hanken-bold text-sm rounded-md border-surface-variant border-2'>ACTIVE</Text>
                        </View>
                        <Text className='text-based'>Hardware Key Rooted • Renews Nov 14, 2026</Text>
                    </View>

                    <Host style={{ width: '100%', marginVertical: 5 }}>
                        <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
                    </Host>
                    <Pressable onPress={() => router.push("/(app)/(modal)/subscription")} className='bg-black rounded-lg p-4'>
                        <Text className='text-white text-base text-center font-hanken-bold'>Manage Tier</Text>
                    </Pressable>
                </View>


                {/* SECURITY */}

                <View>
                    <View className='flex-row items-center justify-between my-4'>
                        <Text className='font-jetbrainsMono'>CRYPTOGRAPHIC SECURITY</Text>
                        <Text className='text-surface-variantbtext-base py-1 px-2 rounded-md'>ZERO-LEAK ACTIVE</Text>
                    </View>

                    <View className='shadow-card gap-2 bg-white android:elevation-sm rounded-lg'>
                        <View className='rounded-md  flex-row items-center w-full p-4  gap-6'>
                            <View className='bg-surface-dim rounded-lg h-12 w-12 items-center justify-center'>
                                <LockKeyhole />
                            </View>
                            <View className='flex-1 min-w-0 gap-2'>
                                <View className='flex-row items-center'>
                                    <View className='flex-row items-center gap-2'>
                                        <Text className='text-base font-hanken-bold '>Face ID Enclave Authentication</Text>
                                    </View>
                                </View>
                                <View className='flex-row w-full  items-center gap-2'>
                                    <Text className='text-lg font-hanken text-sm '>Biometric hardware gate enabled</Text>
                                </View>
                            </View>

                            <Host matchContents>
                                <Switch
                                    value={faceID}
                                    onCheckedChange={setfaceID}
                                    colors={{
                                        checkedThumbColor: '#000000',
                                        checkedTrackColor: '#EDE9FE',
                                        uncheckedThumbColor: '#9CA3AF',
                                        uncheckedTrackColor: '#F3F4F6',
                                        uncheckedBorderColor: '#D1D5DB',
                                    }}
                                />
                            </Host>
                        </View>

                        <Host style={{ width: '100%', marginVertical: 5 }}>
                            <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
                        </Host>

                        <View className='rounded-md  flex-row items-center w-full p-4  gap-6'>
                            <View className='bg-surface-dim rounded-lg h-12 w-12 items-center justify-center'>
                                <KeyRound />
                            </View>
                            <View className='flex-1 min-w-0 gap-2'>
                                <View className='flex-row items-center'>
                                    <View className='flex-row items-center gap-2'>
                                        <Text className='text-base font-hanken-bold '>YubiKey & Hardware TOTP</Text>
                                    </View>
                                </View>
                                <View className='flex-row w-full  items-center gap-2'>
                                    <Text className='text-lg font-hanken text-sm '>FIDO2 WebAuthn & NFC tokens</Text>
                                </View>
                            </View>
                            <Text className=' bg-surface-dim text-tertiary-fixed-variant py-1 px-2 font-hanken-bold text-sm rounded-md border-muted border2'>CONFIGURED (2)</Text>

                        </View>

                        <Host style={{ width: '100%', marginVertical: 5 }}>
                            <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
                        </Host>

                        <View className='rounded-md  flex-row items-center w-full p-4  gap-6'>
                            <View className='bg-surface-dim rounded-lg h-12 w-12 items-center justify-center'>
                                <KeyRound />
                            </View>
                            <View className='flex-1 min-w-0 gap-2'>
                                <View className='flex-row items-center'>
                                    <View className='flex-row items-center gap-2'>
                                        <Text className='text-base font-hanken-bold '>Master Seedphrase Backup</Text>
                                    </View>
                                </View>
                                <View className='flex-row w-full  items-center gap-2'>
                                    <Text className='text-lg font-hanken text-sm '>Encrypted paper & airgapped vault</Text>
                                </View>
                            </View>
                            <Text className=' bg-[#acdec7]  py-1 px-2 font-hanken-bold text-base rounded-md border-muted border2'>VERIFIED 12W</Text>
                            <ChevronRight />
                        </View>
                    </View>
                </View>

                {/* DEVICE */}

                <View>
                    <View className='flex-row items-center justify-between my-4'>
                        <Text className='font-jetbrainsMono'>ACTIVE DEVICES (1 OF 4)</Text>
                        <Text className=' text-c_primary text-base py-1 px-2 rounded-md'> + Add Device</Text>
                    </View>

                    <View className='shadow-card gap-2 bg-white android:elevation-sm rounded-lg'>
                        <View className='rounded-md  flex-row items-center w-full p-4  gap-6'>
                            <View className='bg-surface-dim rounded-lg h-12 w-12 items-center justify-center'>
                                <Smartphone />
                            </View>
                            <View className='flex-1 min-w-0 gap-2'>
                                <View className='flex-row items-center'>
                                    <View className='flex-row items-center gap-2'>
                                        <Text className='text-lg font-hanken-bold '>Tecno Camon 40 Pro</Text>
                                        <Text className='bg-black text-white py-1 px-2 rounded-md'>THIS DEVICE</Text>
                                    </View>
                                </View>
                                <View className='w-full  gap-2'>
                                    <Text className='font-jetbrainsMono text-base'>iOS 18.2 • WireGuard-X vs. 1</Text>
                                    <Text className='text-surface-variant font-hanken-bold'> • Online now • IOGbps Tunnel</Text>
                                </View>
                            </View>
                            <EllipsisVertical />
                        </View>

                        <Host style={{ width: '100%', marginVertical: 5 }}>
                            <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
                        </Host>

                        <View className='rounded-md  flex-row items-center w-full p-4  gap-6'>
                            <View className='bg-surface-dim rounded-lg h-12 w-12 items-center justify-center'>
                                <LaptopMinimal />
                            </View>
                            <View className='flex-1 min-w-0 gap-2'>
                                <View className='flex-row items-center'>
                                    <View className='flex-row items-center gap-2'>
                                        <Text className='text-lg font-hanken-bold '>MacBook Pro</Text>
                                    </View>
                                </View>
                                <View className='w-full  gap-2'>
                                    <Text className='font-jetbrainsMono text-base'>macOS Sonoma • Zurich #01 Relay</Text>
                                    <Text className='text-surface-variant font-hanken-bold'> Last active 12m ago</Text>
                                </View>
                            </View>
                            <EllipsisVertical />
                        </View>
                    </View>
                </View>

                <Pressable className='flex-row items-center justify-center gap-3 p-4 my-4 border-surface-dim border-2 bg-muted rounded-lg'>
                    <CircleX />
                    <Text className='font-hanken-medium'>Revoke All Other Sessions (1)</Text>
                </Pressable>

                {/* DATA SOVEREIGNTY */}
                <View>
                    <View className='flex-row items-center justify-between my-4'>
                        <Text className='font-jetbrainsMono'>DATA SOVEREIGNTY & AUDIT</Text>
                    </View>

                    <View className='shadow-card gap-2 bg-white android:elevation-sm rounded-lg'>
                        <View className='rounded-md  flex-row items-center w-full p-4  gap-6'>
                            <View className='bg-surface-dim rounded-lg h-12 w-12 items-center justify-center'>
                                <LaptopMinimalCheck />
                            </View>
                            <View className='flex-1 min-w-0 gap-2'>
                                <View className='flex-row items-center'>
                                    <View className='flex-row items-center gap-2'>
                                        <Text className='text-base font-hanken-bold '>Encrypted Sync Across Devices</Text>
                                    </View>
                                </View>
                                <View className='flex-row w-full  items-center gap-2'>
                                    <Text className='text-lg font-hanken text-sm '>Zero-knowledge end-to-end node state</Text>
                                </View>
                            </View>

                            <Host matchContents>
                                <Switch
                                    value={faceID}
                                    onCheckedChange={setfaceID}
                                    colors={{
                                        checkedThumbColor: '#000000',
                                        checkedTrackColor: '#EDE9FE',
                                        uncheckedThumbColor: '#9CA3AF',
                                        uncheckedTrackColor: '#F3F4F6',
                                        uncheckedBorderColor: '#D1D5DB',
                                    }}
                                />
                            </Host>
                        </View>

                        <Host style={{ width: '100%', marginVertical: 5 }}>
                            <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
                        </Host>

                        <View className='rounded-md  flex-row items-center w-full p-4  gap-6'>
                            <View className='bg-surface-dim rounded-lg h-12 w-12 items-center justify-center'>
                                <Bug />
                            </View>
                            <View className='flex-1 min-w-0 gap-2'>
                                <View className='flex-row items-center'>
                                    <View className='flex-row items-center gap-2'>
                                        <Text className='text-base font-hanken-bold '>Diagnostic & Crash Report</Text>
                                    </View>
                                </View>
                                <View className='flex-row w-full  items-center gap-2'>
                                    <Text className='text-lg font-hanken text-sm '>Strict zero data collection policy</Text>
                                </View>
                            </View>

                            <Host matchContents>
                                <Switch
                                    value={faceID}
                                    onCheckedChange={setfaceID}
                                    colors={{
                                        checkedThumbColor: '#000000',
                                        checkedTrackColor: '#EDE9FE',
                                        uncheckedThumbColor: '#9CA3AF',
                                        uncheckedTrackColor: '#F3F4F6',
                                        uncheckedBorderColor: '#D1D5DB',
                                    }}
                                />
                            </Host>
                        </View>

                        <Host style={{ width: '100%', marginVertical: 5 }}>
                            <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
                        </Host>

                        <View className='rounded-md  flex-row items-center w-full p-4  gap-6'>
                            <View className='bg-surface-dim rounded-lg h-12 w-12 items-center justify-center'>
                                <ScrollText />
                            </View>
                            <View className='flex-1 min-w-0 gap-2'>
                                <View className='flex-row items-center'>
                                    <View className='flex-row items-center gap-2'>
                                        <Text className='text-base font-hanken-bold '>Export Cryptographic Audit Log</Text>
                                    </View>
                                </View>
                                <View className='flex-row w-full  items-center gap-2'>
                                    <Text className='text-lg font-hanken text-sm '>Signed JSON verification report</Text>
                                </View>
                            </View>
                            <ChevronRight />
                        </View>
                    </View>

                    <View className='gap-2 my-4'>
                        <Pressable className='flex-row items-center justify-center gap-2 bg-black p-4 rounded-lg'>
                            <LogOut color={"#fff"} />
                            <Text className='text-white text-base font-hanken-semibold'>Signout of Aura Enclave</Text>
                        </Pressable>
                        <Pressable>
                            <Text className='text-red-700 text-base text-center'>Delete Account & Purge Identity</Text>
                        </Pressable>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaWrapper>
    )
}

export default Profile

const styles = StyleSheet.create({})