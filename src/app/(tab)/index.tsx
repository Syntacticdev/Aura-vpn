import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWrapper from '@/components/ui/Safe-area-wrapper'
import { ArrowDown, ArrowUp, Power, RotateCcwClock, ShieldKeyhole, SlidersHorizontal } from "lucide-react-native"
import { Host, Switch, Box } from '@expo/ui/jetpack-compose';
import { size, clip, background, Shapes } from '@expo/ui/jetpack-compose/modifiers';
import { Image as EImage } from "expo-image"
import Header from '@/components/ui/Header';
const Connect = () => {
  const [checked, setChecked] = useState(false);



  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <SafeAreaWrapper>
      <ScrollView className='px-4'>
        {/* Header Section */}
        <Header />


        <View className="flex-row items-center self-center my-6 bg-primary-fixed gap-2 px-4 py-2 rounded-full ">
          <View className=" bg-tertiary-fixed-variant  w-2 h-2 rounded-full " />
          <Text className='font-hanken-semibold text-tertiary-fixed-variant '>UNPROTECTED</Text>
        </View>

        <View className=' justify-center items-center '>
          <Text className='text-3xl  font-hanken-bold  '>Not Connected</Text>
          <Text className='text-md font-hanken '>Your actual IP and traffic are visible to your ISP</Text>
        </View>


        <View className="flex-row items-center justify-center self-center my-6 bg-surface-dim gap-2 px-4 py-3 rounded-full ">
          <View className="flex-row items-center self-center  bg-primary-fixed gap-2 rounded-md p-1 ">
            <Text className='text-sm'>EXPOSED</Text>
          </View>
          <Text className=' font-jetbrainsMono-semibold text-black text-sm '>84.115.18.24</Text>
          <View className=" bg-surface-variant w-1 h-1 rounded-sm " />
          <Text className='text-sm'>Berlin, DE</Text>
        </View>


        <View className='bg-surface-dim w-56 h-56 justify-center items-center rounded-full self-center  '>
          <View className='bg-white w-4/5 h-4/5 rounded-full justify-center items-center '>
            <View className='bg-surface-dim justify-center items-center gap-2 h-4/5 w-4/5 rounded-full '>
              <Power />
              <Text className='text-center text-sm font-jetbrainsMono-medium '>QUICK CONNECT</Text>
            </View>
          </View>
        </View>

        <View className="flex-row items-center justify-center self-center my-6 bg-surface-dim gap-2 py-2 px-8 rounded-full ">
          <RotateCcwClock />
          <Text className=' font-jetbrainsMono-semibold text-black text-sm '>LAST SESSION:</Text>
          <Text className='text-sm font-hanken '>42m ago</Text>
        </View>

        <View className='flex-1 flex-row justify-between mx-2 my-6 bg-white p-4 rounded-md  shadow-xs '>
          <View className='justify-center items-center '>
            <Text className='font-jetbrainsMono-semibold'>LATENCY</Text>
            <View className='flex-row gap-1  '>
              <Text className=' font-jetbrainsMono-medium  '>--</Text>
              <Text className=' font-jetbrainsMono-medium  '>ms</Text>
            </View>
          </View>
          <View className='justify-center items-center '>
            <Text className='font-jetbrainsMono-semibold '>DOWN</Text>
            <View className='flex-row justify-center items-center gap-1  '>
              <ArrowDown size={16} />
              <Text className=' font-jetbrainsMono-medium  '>0.0M</Text>
            </View>
          </View>
          <View className='justify-center items-center '>
            <Text className='font-jetbrainsMono-semibold '>UP</Text>
            <View className='flex-row gap-1  '>
              <ArrowUp size={16} />
              <Text className=' font-jetbrainsMono-medium  '>0.0M</Text>
            </View>
          </View>
          <View className='justify-center items-center '>
            <Text className='font-jetbrainsMono-semibold '>PROTOCOL</Text>
            <Text className=' bg-surface-dim py-1 px-2 text-sm rounded-full '>STANDBY</Text>
          </View>
        </View>

        <View className='flex-row items-center'>
          <View className='bg-surface-dim rounded-full overflow-hidden justify-center items-center h-16 w-16 '>
            <EImage placeholder={{ blurhash }} contentFit='cover' style={{ width: '60%', height: '60%', borderRadius: 100 }} source={require("@/assets/images/flags/gm.svg")} />
          </View>

          <View className='flex-1'>
            <View className='flex-row items-center justify-center gap-2'>
              <Text className='text-2xl font-hanken-bold'>Frankfurt #04</Text>
              <Text className='bg-surface-dim p-1 rounded-md font-hanken-bold'>FASTEST</Text>
            </View>
            <View className='flex-row items-center justify-center gap-2'>
              <Text className='font-hanken-semibold  '>Optimal Server</Text>
              <View className=" bg-surface-variant w-1 h-1 rounded-sm " />
              <Text className='font-hanken-semibold'>18ms latency</Text>
            </View>
          </View>

          <Pressable className='bg-black rounded-full py-2 px-4 font-hanken-bold'>
            <Text className='text-white'>Connect</Text>
          </Pressable>
        </View>


        <View className='flex-row justify-between mt-8 py-2'>
          <Text className='text-md font-hanken-semibold '>DEFENSE SUITE</Text>
          <Text className='text-md text-c_primary font-hanken-semibold '>ARMED (OFFLINE)</Text>
        </View>

        <View className='gap-4 my-2'>
          {/* CARDS */}
          <View className='flex-row items-center gap-6'>
            <View className='bg-surface-dim rounded-full justify-center items-center h-12 w-12 '>
              <ShieldKeyhole size={24} />
            </View>

            <View className='w-3/5'>
              <View className='flex-row items-center'>
                <Text className='text-xl font-hanken-bold '>Cryptographic Kill Switch</Text>
              </View>
              <View className='flex-row items-center gap-2'>
                <Text className='font-hanken-semibold  '>Optimal Server</Text>
                <View className=" bg-surface-variant w-1 h-1 rounded-sm " />
                <Text className='font-hanken-semibold'>18ms latency</Text>
              </View>
            </View>

            <Host matchContents>
              <Switch
                value={checked}
                onCheckedChange={setChecked}
                colors={{
                  checkedThumbColor: '#ffffff',
                  checkedTrackColor: '#000000',
                  checkedIconColor: '#ffffff',
                  uncheckedThumbColor: '#ffffff',
                  uncheckedTrackColor: '#000000',
                  uncheckedBorderColor: '#D1D5DB',
                  uncheckedIconColor: '#9CA3AF',
                }}>
                <Switch.ThumbContent>
                  <Box
                    modifiers={[
                      size(Switch.DefaultIconSize, Switch.DefaultIconSize),
                      clip(Shapes.Circle),
                      background(checked ? '#FFFFFF' : '#E5E7EB'),
                    ]}
                  />
                </Switch.ThumbContent>
              </Switch>
            </Host>
          </View>
          <View className='flex-row items-center w-full  gap-6'>
            <View className='bg-surface-dim rounded-full justify-center items-center h-12 w-12 '>
              <ShieldKeyhole size={24} />
            </View>

            <View className='w-3/5'>
              <View className='flex-row items-center'>
                <Text className='text-xl font-hanken-bold '>Threat Shield CleanNet</Text>
              </View>
              <View className='flex-row w-full  items-center gap-2'>
                <Text className='font-hanken-semibold  '>
                  Blocked
                  <Text className='font-hanken-bold text-lg'> 142 </Text>
                  trackers and phising attempts today
                </Text>
              </View>
            </View>

            <SlidersHorizontal className='self-center' />
          </View>

        </View>
      </ScrollView>
    </SafeAreaWrapper>
  )
}

export default Connect

const styles = StyleSheet.create({})