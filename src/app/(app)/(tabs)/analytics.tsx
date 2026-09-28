import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWrapper from '@/components/ui/Safe-area-wrapper'
import Header from '@/components/ui/Header'
import Dot from '@/components/ui/Dot'
import { cn } from '@/lib/utils'
import { Ad, ChartNoAxesCombined, CircleCheck, CircleChevronDown, Download, Earth, EyeOff, LockKeyhole, MapPin, Radio, RefreshCcw, ShieldCheck, ShieldKeyhole, TriangleAlert, Upload } from 'lucide-react-native'

const Analytics = () => {
  const days = ["SESSION", "TODAY", "7 DAYS", "30 DAYS"]
  const [activeDays, setActiveDays] = useState(days[1])
  return (
    <SafeAreaWrapper edges={["top"]}>
      <ScrollView className='px-4'>
        <Header />
        <View className='flex-row justify-between items-center my-4'>
          <View>
            <Text className='text-md font-jetbrainsMono'>TELEMETRY DECK</Text>
            <Text className='text-3xl font-hanken-bold'>Network Diagnostics</Text>
          </View>
          <View className='flex-row items-center bg-surface-dim h-fit px-2 gap-2 p-2 rounded-full '>
            <Dot hw={"8"} rounded={true} />
            <Text className='font-hanken-semibold'>LIVE FEED</Text>
          </View>
        </View>

        <View className='flex-row bg-muted p-2 rounded-full justify-between my-4'>
          {days.map((d) => (
            <Pressable onPress={() => setActiveDays(d)} key={d} className={
              cn("px-4 py-2 rounded-full",
                d == activeDays ? "bg-black" : "bg-muted"
              )}>
              <Text className={cn("text-black font-hanken ",
                d == activeDays && "text-white font-hanken-semibold"
              )}>{d}</Text>
            </Pressable>
          ))}
        </View>

        <View className='p-4'>
          <View className='flex-row items-center  mt-7 justify-between'>
            <View className='flex-row items-center gap-2'>
              <ChartNoAxesCombined color={"blue"} />
              <Text className=' font-hanken-semibold '>TUNNEL THROUGHPUT RATE</Text>
            </View>

            <View className='flex-row items-center gap-2'>
              <View className='flex-row items-center gap-2'>
                <Dot hw={"8"} color='#502dcc' rounded={true} />
                <Text className='text-lg'>DL</Text>
              </View>
              <View className='flex-row items-center gap-2'>
                <Dot hw={"8"} rounded={true} color='#a02e2e' />
                <Text className='text-lg'>UL</Text>
              </View>
            </View>
          </View>

          <View className='flex-row my-5 gap-8 font-hanken-semibold'>
            <View className='gap-1'>
              <Text>CURRENT SPEED</Text>
              <View className='flex-row items-end gap-2'>
                <Text className='text-3xl font-jetbrainsMono-bold'>126.7</Text>
                <Text className='text-c_primary text-lg font-hanken-bold '>Mbps</Text>
              </View>
            </View>
            <View className='gap-1'>
              <Text>BURST PEAK</Text>
              <View className='flex-row items-end gap-2'>
                <Text className='text-3xl font-jetbrainsMono-bold'>126.7</Text>
                <Text className='text-surface-variant text-lg font-hanken-bold '>Mbps</Text>
              </View>
            </View>
          </View>
        </View>

        <View className='flex-row justify-between bg-muted p-2 rounded-md'>
          <View className='flex-row items-end gap-2'>
            <Download color={"blue"} />
            <View className='flex-row items-end gap-1'>
              <Text className='text-xl font-jetbrainsMono-semibold'>14.2</Text>
              <Text className='text-md'>GB</Text>
            </View>
            <Text className='text-md'>RECV</Text>
          </View>

          <View className='bg-surface-variant h-fit w-[1px]' />

          <View className='flex-row items-end gap-2'>
            <Upload color={"#5e5e5e"} />
            <View className='flex-row items-end gap-1'>
              <Text className='text-xl font-jetbrainsMono-semibold'>2.8</Text>
              <Text className='text-md'>GB</Text>
            </View>
            <Text className='text-md'>SENT</Text>
          </View>
        </View>

        <View className='flex-row mt-6 justify-between items-center '>
          <Text className='text-sm font-hanken-semibold'>MASKED INGRES / EGRESS TOPOLOGY</Text>
          <Text className='bg-[#49d42a] py-1 px-2 font-hanken-semibold text-sm rounded-full'>CLOAK ACTIVE</Text>
        </View>


        <View className='justify-center items-center '>
          <View className='flex-row items-center gap-4 bg-muted p-4 rounded-md my-2'>
            <View className='bg-surface-dim w-11 h-11 rounded-full items-center justify-center'>
              <MapPin />
            </View>
            <View className='flex-1'>
              <Text className='text-lg font-hanken-semibold'>Real Physical ISP</Text>
              <Text className='text-lg font-hanken-bold '>Comcast Cable</Text>
            </View>
            <View className='flex-row items-center bg-[#c0e8a2] py-1 px-2 rounded-md gap-2'>
              <EyeOff size={16} />
              <Text className='font-hanken-semibold'>HIDDEN</Text>
            </View>
          </View>

          <CircleChevronDown color={"#2563eb"} />

          <View className='flex-row items-center gap-4 bg-muted p-4 rounded-md my-2'>
            <View className='bg-c_primary w-11 h-11 rounded-full items-center justify-center'>
              <Earth color={"#fff"} />
            </View>
            <View className='flex-1'>
              <Text className='text-lg font-hanken-semibold text-c_primary '>Virtual Egress Gateway</Text>
              <Text className='text-lg font-hanken-bold '>Comcast Cable</Text>
            </View>
            <View className='flex-row items-center bg-surface-dim py-1 px-2 rounded-md gap-2'>
              <LockKeyhole color={"#2563eb"} size={16} />
              <Text className='font-hanken-semibold text-c_primary'>HIDDEN</Text>
            </View>
          </View>
        </View>

        <View className='shadow-card mt-6 android:elevation-md bg-white rounded-2xl p-4'>
          <View className='flex-row  justify-between items-center '>
            <View className='flex-row gap-2 items-center'>
              <ShieldCheck />
              <Text className='text-sm font-hanken-semibold'>INTEGRITY AUDIT</Text>
            </View>
            <Text className='bg-surface-dim py-1 px-2 font-hanken-semibold text-sm rounded-full'>100% SECURE</Text>
          </View>

          <View className=' gap-2 mt-4 '>
            <View className='flex-row  justify-between bg-muted px-1 py-4 rounded-md items-center '>
              <View className='flex-row items-center gap-2'>
                <CircleCheck color={"#005236"} />
                <Text className='text-lg font-hanken-semibold'>DNS Leaked Prevention</Text>
              </View>
              <Text className='py-1 px-2 linenums={1} line-clamp-1 font-jetbrainsMono-bold text-sm rounded-full'>Zero Leaks Detected</Text>
            </View>
            <View className='flex-row  justify-between bg-muted px-2 py-4 rounded-md items-center '>
              <View className='flex-row items-center gap-2'>
                <CircleCheck color={"#005236"} />
                <Text className='text-lg font-hanken-semibold'>IPv6 Routing Shield</Text>
              </View>
              <Text className='py-1 px-2 linenums={1} line-clamp-1 font-jetbrainsMono-bold text-sm rounded-full'>Hardened & Masked</Text>
            </View>
            <View className='flex-row  justify-between bg-muted px-2 py-4 rounded-md items-center '>
              <View className='flex-row items-center gap-2'>
                <CircleCheck color={"#005236"} />
                <Text className='text-lg font-hanken-semibold'>WebRTC STUN Cloak</Text>
              </View>
              <Text className='py-1 px-2 linenums={1} line-clamp-1 font-jetbrainsMono-bold text-sm rounded-full'>Isolated Sandbox</Text>
            </View>
          </View>
        </View>


        <View className='bg-surface-dim p-4 rounded-lg mt-4'>
          <View className='flex-row justify-between items-center rounded-lg '>
            <Text className='font-jetbrainsMono-medium'>CRYPTOGRAPHIC ENGINE</Text>
            <Text className='bg-white p-1 text-sm rounded-md font-hanken-semibold text-c_primary'>HW ACCELERATED</Text>
          </View>
          <View className='flex-row justify-between items-center rounded-lg '>
            <Text className='font-hanken-bold text-lg'>ChaCha20-Poly1305</Text>
            <Text className=' p-2 text-lg font-jetbrainsMono-medium rounded-md'>256-Bit WireGuard</Text>
          </View>
        </View>


        {/* THREAT SHIELD CARD */}
        <View className='shadow-card my-4 p-4 rounded-lg bg-white android:elevation-sm'>
          <View className='flex-row mt-6 justify-between items-center '>
            <View className='flex-row items-center gap-2'>
              <ShieldKeyhole />
              <Text className='text-sm font-hanken-semibold'>THREAT SHIELD ACTIVITY</Text>
            </View>
            <Text className='py-1 px-2 text-c_primary font-hanken-semibold text-sm rounded-full'>24H CYCLE</Text>
          </View>

          <View className='flex-row mt-2 gap-4'>
            <View className='bg-black items-center rounded-md p-4'>
              <Text className='text-2xl text-white font-hanken-semibold'>284</Text>
              <Text className='text-muted'>DROPPED</Text>
            </View>
            <View className='flex-1'>
              <Text className='font-hanken-bold text-lg'>Malicious Packets Intercepted</Text>
              <Text>Autonomous edge filter defense
                operational.</Text>
            </View>
          </View>

          <View className='flex-row gap-2 mt-2'>
            <View className='items-center bg-muted p-4 w-[32%] h-46'>
              <Ad size={36} />
              <Text className='font-hanken-bold text-lg'>198</Text>
              <Text className='text-sm'>ADS PURGED</Text>
            </View>
            <View className='items-center bg-muted p-4 w-[32%] h-46'>
              <Radio size={36} />
              <Text className='font-hanken-bold text-lg'>74</Text>
              <Text className='text-sm'>TRACKERS</Text>
            </View>
            <View className='items-center bg-muted p-4 w-[32%] h-46'>
              <TriangleAlert size={36} color={"red"} />
              <Text className='font-hanken-bold text-lg'>12</Text>
              <Text className='text-xs'>BAD DOMAINS</Text>
            </View>
          </View>
        </View>


        {/* AUDIT BUTTON */}

        <Pressable className='bg-black rounded-lg items-center p-3 mb-5'>
          <View className='flex-row items-center gap-2'>
            <RefreshCcw color="#fff" />
            <Text className='text-lg text-white font-hanken-bold'>Run Deep Security Audit</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaWrapper>
  )
}

export default Analytics

const styles = StyleSheet.create({})