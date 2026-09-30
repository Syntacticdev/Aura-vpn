import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SafeAreaWrapper from '@/components/ui/Safe-area-wrapper'
import { ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react-native'
import { router } from 'expo-router'
import { cn } from '@/lib/utils'
import SubscriptionCard from '@/components/ui/SubscriptionCard'
import subscriptions from '@/data/subscription'
import { useBilling } from '@/context/BillingContext'

const subscription = () => {
    enum BillingPeriod {
        Monthly = "monthly",
        Yearly = "yearly",
    }

    const BillingPlans = [
        {
            type: "ANNUALLY",
            label: "ANNUALLY BILLED",
            discount: "60%"
        },
        {
            type: "MONTHLY",
            label: "MONTHLY BILLED",
            discount: ""

        }
    ]

    const { selectedBillingPlanType, updateSelectedBillingPlanTypeFn } = useBilling()
    return (
        <SafeAreaWrapper>
            <ScrollView contentContainerClassName="p-4">
                <View className='flex-row gap-5'>
                    <Pressable onPress={() => router.dismiss()} className='rounded-full p-2 bg-surface-dim'>
                        <ArrowLeft />
                    </Pressable>
                    <View className='flex-1 flex-row items-center gap-2'>
                        <ShieldCheck color="blue" />
                        <Text>AURA TIER SELECTOR</Text>
                    </View>
                </View>
                <Text className='text-3xl font-hanken-semibold text-center my-5'>Elevate Your Privacy Armor</Text>

                <View className='mb-4'>
                    <View className='flex-row bg-muted h-[60px] rounded-full p-2 gap-1'>
                        {BillingPlans.map((plan) => (
                            <Pressable onPress={() => updateSelectedBillingPlanTypeFn(plan.type)} key={plan.type} className={cn("flex-row w-2/4 overflow-hidden min-w-0 gap-1 justify-center items-center rounded-full px-2",
                                selectedBillingPlanType == plan.type && "bg-black"
                            )}>
                                <Text className={cn(' font-hanken-bold w-2/4 text-center text-wrap text-sm',
                                    selectedBillingPlanType == plan.type && "text-white"
                                )}>{plan.label}</Text>
                                {plan.discount && <Text className='p-2 rounded-full bg-[#5dab50] rounded-fulltext-xs'>SAVE {plan.discount}</Text>}
                            </Pressable>
                        ))}
                    </View>

                    <View className='gap-2 mt-4'>
                        {subscriptions.map((plan) => (
                            <SubscriptionCard
                                key={plan.type}
                                subscription={plan}
                            />
                        ))}
                    </View>
                </View>

                <View className=' gap-2'>
                    <Text className='text-base font-hanken'>EXPRESS INSTANT AUTHORIZATION</Text>

                    <View className='my-3 flex-row items-center gap-2'>
                        <Pressable className='flex-row items-center justify-center flex-1 min-w-0 p-4 bg-black rounded-lg gap-2'>
                            <Text className='text-white text-2xl font-hanken'>Pay</Text>
                            <Image className='w-8 h-8' source={require("@/assets/images/apple.png")} />
                        </Pressable>
                        <Pressable className='flex-row items-center justify-center flex-1 min-w-0 p-4 bg-black rounded-lg gap-2'>
                            <Text className='text-white text-2xl font-hanken'>Pay</Text>
                            <Image className='w-8 h-8' source={require("@/assets/images/google.png")} />
                        </Pressable>
                    </View>
                </View>

                {/* FREE TRIAL BUTTON */}

                <Pressable className='p-4 bg-black rounded-lg flex-row items-center justify-center gap-2'>
                    <Text className='text-white text-lg font-hanken-bold'>Activate 30-Day Risk-Free Trial</Text>
                    <ArrowRight color={"#fff"} />
                </Pressable>
            </ScrollView>
        </SafeAreaWrapper>
    )
}

export default subscription

const styles = StyleSheet.create({})