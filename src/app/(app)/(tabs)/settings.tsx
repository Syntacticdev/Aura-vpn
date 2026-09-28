import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWrapper from '@/components/ui/Safe-area-wrapper'
import Header from '@/components/ui/Header'
import { BadgeCheck, ChevronRight, LockKeyhole, RotateCcw, ShieldCheck } from 'lucide-react-native'
import {
  HorizontalDivider,
  Host,
  LinearProgressIndicator,
  RadioButton,
  Switch,
} from '@expo/ui/jetpack-compose';
import { fillMaxWidth } from '@expo/ui/jetpack-compose/modifiers';
import { cn } from '@/lib/utils'

const Settings = () => {

  const [alwaysOn, setAlwaysOn] = useState(false)
  const [wifiAlwayOn, setWifiAlwayOn] = useState(true)
  const [activeTunnel, setActiveTunnel] = useState("wireguard")
  return (
    <SafeAreaWrapper edges={["top"]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className='flex-1'
        contentContainerClassName='p-4 pb-12'
      >
        <Header />


        {/* ACCOUNT CREDENTIALS */}
        <View>
          <View className='flex-row items-center justify-between my-4'>
            <Text className='font-jetbrainsMono'>ACCOUNT CREDENTIALS</Text>
            <Text className='bg-muted py-1 px-2 rounded-md'>ACTIVE SUBSCRIPTION</Text>
          </View>


          <View className='shadow-card bg-white android:elevation-sm p-4 rounded-lg'>
            <View className=' flex-row items-center w-full p-4  gap-6'>
              <View className='bg-muted rounded-full justify-center items-center h-12 w-12 '>
                <ShieldCheck />
              </View>

              <View className='w-[60%]'>
                <View className='flex-row items-center'>
                  <View className='flex-row items-center gap-2'>
                    <Text className='text-2xl font-hanken-bold '>Aura Pro Unlimited</Text>
                    {/* <Text className='text-lg font-hanken'>#01</Text> */}
                  </View>
                </View>
                <View className='flex-row w-full  items-center gap-2'>
                  <Text className='text-lg font-hanken '>Auto-renews Oct 24, 2026</Text>
                </View>
              </View>

              <Pressable>
                <Text className='text-c_primary text-lg'>Manage</Text>
              </Pressable>
            </View>

            <View className='flex-row justify-between items-center'>
              <View className='h-28 w-[48%] gap-2 py-4 px-2 bg-muted rounded-lg overflow-hidden'>
                <Text className='font-jetbrainsMono'>DEVICE ALLOCATION</Text>
                <View className='flex-row items-end'>
                  <Text className='text-2xl font-jetbrainsMono-bold'>10</Text>
                  <Text className='font-jetbrainsMono'> / 10 max</Text>
                </View>
                <Host matchContents={{ vertical: true }} style={{ width: '100%' }}>
                  <LinearProgressIndicator
                    color={"#000"}
                    progress={0.7}
                    modifiers={[fillMaxWidth()]}
                  />
                </Host>
              </View>

              <View className='h-28 w-[48%] gap-2 py-4 px-2 bg-muted rounded-lg overflow-hidden'>
                <Text className='font-jetbrainsMono  '>CRYPTOGRAPHIC TIER</Text>
                <View className='flex-row items-end'>
                  <Text className='text-xl font-jetbrainsMono-bold'>Quantum-Safe</Text>
                </View>
                <Text className='text-sm'>AES-256-GCM / ChaCha</Text>
              </View>
            </View>

          </View>
        </View>

        {/* TUNNEL SECURITY */}
        <View className='p-4'>
          <Text className=' font-jetbrainsMono-semibold'>TUNNEL SECURITY</Text>

          <View className='shadow-card bg-white android:elevation-sm my-4 p-2 rounded-lg'>
            <View className='flex-row items-center w-full p-4  gap-6'>
              <View className='w-[80%] gap-2'>
                <View className='flex-row items-center'>
                  <View className='flex-row items-center gap-2'>
                    <Text className='text-xl font-hanken-bold '>Always-On VPN / Kill Switch</Text>
                    <LockKeyhole />
                  </View>
                </View>
                <View className='flex-row w-full  items-center gap-2'>
                  <Text className='text-lg font-hanken text-sm '>Block all network traffic if connection
                    unexpectedly drops or reconnects.</Text>
                </View>
              </View>

              <Host matchContents>
                <Switch
                  value={alwaysOn}
                  onCheckedChange={setAlwaysOn}
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

            <Host style={{ flex: 1, marginVertical: 5 }}>
              <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
            </Host>

            <View className='rounded-md  flex-row items-center w-full p-4  gap-6'>
              <View className='w-[80%] gap-2'>
                <View className='flex-row items-center'>
                  <View className='flex-row items-center gap-2'>
                    <Text className='text-xl font-hanken-bold '>Auto-Connect on Wi-Fi</Text>
                  </View>
                </View>
                <View className='flex-row w-full  items-center gap-2'>
                  <Text className='text-lg font-hanken text-sm '>Automatically establish tunnel over
                    untrusted, public, or newly joined networks.</Text>
                </View>
              </View>

              <Host matchContents>
                <Switch
                  value={wifiAlwayOn}
                  onCheckedChange={setWifiAlwayOn}
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

            <Host style={{ flex: 1, marginVertical: 5 }}>
              <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
            </Host>

            <View className='flex-row items-center w-full p-4  gap-6'>
              <View className='w-[80%] gap-2'>
                <View className='flex-row items-center'>
                  <View className='flex-row items-center gap-2'>
                    <Text className='text-xl font-hanken-bold '>Split Tunneling</Text>
                    <Text className='text-sm font-hanken-semibold bg-surface-dim p-1 rounded-md'>2 APPS</Text>
                  </View>
                </View>
                <View className='flex-row w-full  items-center gap-2'>
                  <Text className='text-lg font-hanken text-sm '>Exclude specific applications from secure VPN
                    routing.</Text>
                </View>
              </View>

              <View className=" justify-end items-end flex-1 ">
                <ChevronRight />
              </View>
            </View>

            <Host style={{ flex: 1, marginVertical: 5 }}>
              <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
            </Host>

            <View className='rounded-md  flex-row items-center w-full p-4  gap-6'>
              <View className='w-[80%] gap-2'>
                <View className='flex-row items-center'>
                  <View className='flex-row items-center gap-2'>
                    <Text className='text-xl font-hanken-bold '>Local Network Discovery</Text>
                  </View>
                </View>
                <View className='flex-row w-full  items-center gap-2'>
                  <Text className='text-lg font-hanken text-sm '>Allow access to printers, AirDrop, Smart TVs,
                    and local LAN subnets.</Text>
                </View>
              </View>

              <Host matchContents>
                <Switch
                  value={wifiAlwayOn}
                  onCheckedChange={setWifiAlwayOn}
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

          </View>

        </View>

        {/* TUNNEL PROTOCOL */}
        <View>
          <View className='flex-row justify-between items-end'>
            <Text className=' font-jetbrainsMono-semibold'>TUNNEL SECURITY</Text>
            <Text className=' text-c_primary font-jetbrainsMono-semibold'>PORT: 51820</Text>
          </View>

          <View className='my-4 w-full gap-2'>
            <Pressable onPress={() => setActiveTunnel("wireguard")}>
              <View className={cn("flex-row w-full items-start shadow-card bg-white android:elevation-sm rounded-lg p-3",
                activeTunnel == "wireguard" && "border-2 border-black"
              )}>
                <Host matchContents>
                  <RadioButton
                    selected={activeTunnel == "wireguard"}
                    onClick={() => setActiveTunnel("wireguard")}
                  />
                </Host>
                <View className='flex-1 gap-2 min-w-0'>
                  <View className='flex-row flex-wrap items-center gap-2'>
                    <Text className='text-2xl font-hanken-bold'>WireGuard®</Text>
                    <Text className='text-sm bg-black text-white rounded-full px-1'>RECOMMENDED</Text>
                  </View>
                  <Text>Next-gen cryptography, ultra-low latency &
                    maximum throughput for high-speed streaming.
                  </Text>
                  <Host style={{ width: '100%', marginVertical: 5 }}>
                    <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
                  </Host>
                  <View className='flex-row py-2 items-center justify-between gap-2'>
                    <View className='flex-row flex-1 min-w-0 items-center gap-1'>
                      <Text className='font-hanken'>OVERHEAD:</Text>
                      <Text className='font-hanken-semibold'>32 bytes</Text>
                    </View>
                    <View className='flex-row flex-1 min-w-0 items-center justify-end gap-1'>
                      <Text className='font-hanken'>HANDSHAKE:</Text>
                      <Text className='font-hanken-semibold'>{'<5ms'}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </Pressable>

            <Pressable onPress={() => setActiveTunnel("openvpn")}>
              <View className={cn("flex-row w-full items-start shadow-card bg-white android:elevation-sm rounded-lg p-3",
                activeTunnel == "openvpn" && "border-2 border-black"
              )}>
                <Host matchContents>
                  <RadioButton
                    selected={activeTunnel == "openvpn"}
                    onClick={() => setActiveTunnel("openvpn")}
                  />
                </Host>
                <View className='flex-1 min-w-0 gap-2'>
                  <View className='flex-row flex-wrap items-center gap-2'>
                    <Text className='text-2xl font-hanken-bold'>OpenVPN (UDP / TCP)</Text>
                    <Text className='text-sm bg-surface-dim text-black rounded-md px-1'>LEGACY</Text>
                  </View>
                  <Text>Battle-tested industry standard, uniquely
                    optimized for bypassing strict DPI firewalls.
                  </Text>
                </View>
              </View>
            </Pressable>

            <Pressable onPress={() => setActiveTunnel("openvpn")}>
              <View className={cn("flex-row w-full items-start shadow-card bg-white android:elevation-sm rounded-lg p-3",
                activeTunnel == "IKE" && "border-2 border-black"
              )}>
                <Host matchContents>
                  <RadioButton
                    selected={activeTunnel == "IKE"}
                    onClick={() => setActiveTunnel("IKE")}
                  />
                </Host>
                <View className='flex-1 gap-2 min-w-0'>
                  <View className='flex-row flex-wrap items-center gap-2'>
                    <Text className='text-2xl font-hanken-bold'>IKEv2 / IPsec</Text>
                    <Text className='text-sm bg-surface-dim text-black rounded-md px-1'>MOBILE</Text>
                  </View>
                  <Text>Instant reconnection logic when toggling between
                    cellular data and intermittent Wi-Fi.</Text>
                </View>
              </View>
            </Pressable>
          </View>
        </View>


        {/* AUDITING */}
        <View className='my-3 p-4'>
          <Text className=' font-jetbrainsMono-semibold'>ADVANCED TELEMETRY & AUDITINGs</Text>

          <View className='gap-2'>
            <View className='flex-row items-center w-full p-4  gap-6'>
              <View className='w-[80%] gap-2'>
                <View className='flex-row items-center'>
                  <View className='flex-row items-center gap-2'>
                    <Text className='text-xl font-hanken-bold '>Custom DNS Servers</Text>
                  </View>
                </View>
                <View className='flex-row w-full  items-center gap-2'>
                  <Text className='font-hanken text-sm text-c_primary '>Aura Private DNS (1.1.1.1 / 1.0.0.1
                    fallback)</Text>
                </View>
              </View>

              <View className=" justify-end items-end flex-1 ">
                <ChevronRight />
              </View>
            </View>

            <Host style={{ flex: 1 }}>
              <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
            </Host>

            <View className='flex-row items-center w-full p-4  gap-6'>
              <View className=' min-w-0 gap-2'>
                <View className='flex-row items-center'>
                  <View className='flex-row items-center gap-2'>
                    <Text className='text-xl font-hanken-bold '>Diagnostics Log</Text>
                  </View>
                </View>
                <View className='flex-row w-full  items-center gap-2'>
                  <Text className='font-hanken text-sm'>Zero Logs Policy (Strictly Enforced)</Text>
                </View>
              </View>

              <View className=" justify-end items-end flex-1 ">
                <Text className='py-1 px-2 font-bold rounded-md bg-surface-dim'>AUDIT PROOF</Text>
              </View>
            </View>

            <Host style={{ flex: 1, marginVertical: 5 }}>
              <HorizontalDivider thickness={StyleSheet.hairlineWidth} />
            </Host>

            <View className='flex-row items-center w-full p-4  gap-6'>
              <View className=' min-w-0 gap-2'>
                <View className='flex-row items-center'>
                  <View className='flex-row items-center gap-2'>
                    <Text className='text-sm font-hanken-bold '>App Runtime Integrity</Text>
                  </View>
                </View>
                <View className='flex-row w-full  items-center gap-2'>
                  <Text className='font-hanken-bold text-sm'>v4.2.0 (Build 892) . Clean build</Text>
                </View>
              </View>

              <View className=" justify-end items-end flex-1 ">
                <BadgeCheck color="#5e5e5e" />
              </View>
            </View>

          </View>
        </View>

        <Pressable className='flex-row gap-2 bg-surface-dim justify-center items-center rounded-lg py-4'>
          <RotateCcw size={20} />
          <Text className='font-hanken-bold'>Reset Network Stack to Defaults</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaWrapper>
  )
}

export default Settings

const styles = StyleSheet.create({})