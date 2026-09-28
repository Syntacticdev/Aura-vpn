import { FlatList, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWrapper from '@/components/ui/Safe-area-wrapper'
import Header from '@/components/ui/Header'
import { Search } from "lucide-react-native"
import VPNNetworkBar from '@/components/ui/VPNNetworkBar'
import ServerCard from '@/components/server/ServerCard'
import { cn } from '@/lib/utils'

const Server = () => {
  const tabs = ["RECOMMENDED", "FAVOURITE", "ULTRA-FAST"]
  const [activeTab, setActiveTab] = useState(tabs[0])
  return (
    <SafeAreaWrapper edges={['top']}>

      <FlatList
        contentContainerClassName='px-5 pb-6'
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className='h-3' />}
        ListHeaderComponent={() => (
          <View>
            <Header />
            <View className='bg-muted flex-row gap-2 items-center px-4 py-2 my-4 rounded-lg '>
              <Search size={24} />
              <TextInput numberOfLines={1} placeholderTextColor={"#000"} className='flex-1 font-hanken text-lg ' placeholder='Search country, city or IP' />
            </View>
            <ScrollView contentContainerClassName='gap-3' className='mb-4 ' horizontal showsHorizontalScrollIndicator={false}>
              {tabs.map((t) => (
                <Pressable onPress={() => setActiveTab(t)} key={t} className={
                  cn("px-4 py-2 rounded-full",
                    t == activeTab ? "bg-black" : "bg-muted"
                  )}>
                  <Text className={cn("text-black font-hanken ",
                    t == activeTab && "text-white font-hanken-semibold"
                  )}>{t}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        )}

        data={Array.from({ length: 6 })}

        renderItem={({ item, index }) => (
          <View>
            <ServerCard />
            {/* <VPNNetworkBar level={index + 1} /> */}
          </View>
        )}

      />

    </SafeAreaWrapper>
  )
}

export default Server

const styles = StyleSheet.create({})