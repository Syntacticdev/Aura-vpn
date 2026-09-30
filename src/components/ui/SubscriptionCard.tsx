import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CheckCircle2 } from 'lucide-react-native'
import Dot from './Dot'
import { subscriptionsPropType } from '@/data/subscription'
import { useBilling } from '@/context/BillingContext'
import { cn } from '@/lib/utils'

const SubscriptionCard = ({
    subscription

}: { subscription: subscriptionsPropType }) => {
    const { selectedBillingPlanType, selectedBillingPlanId, updateSelectedBillingPlanIdFn } = useBilling()
    return (
        <Pressable onPress={() => updateSelectedBillingPlanIdFn(subscription.id)}>
            <View className={cn('shadow-card android:elevation-sm rounded-lg p-4',
                selectedBillingPlanId == subscription.id ? "bg-white" : "bg-surface-dim"
            )}>
                <View className='flex-1 flex-row justify-between'>
                    <View>
                        <View className='flex-row items-center gap-2'>
                            <Text className='font-hanken-bold text-2xl'>{subscription.name}</Text>
                            {subscription.version && <Text className='bg-surface-dim font-hanken-bold text-sm px-2 py-1 rounded-md'>{subscription.version}</Text>}
                        </View>
                        <Text className='text-base font-hanken-semibold'>{subscription.description}</Text>
                    </View>
                    <View>
                        {selectedBillingPlanId == subscription.id ?
                            <CheckCircle2 size={34} /> :
                            <Dot color='#cce9f1' hw={"34"} rounded={true} />
                        }
                    </View>
                </View>

                <View className='bg-surface-dim flex-row justify-between items-center my-1 p-4 rounded-md'>
                    <View className='flex-row items-end'>
                        <Text className='text-4xl font-hanken-bold'>{subscription.type == selectedBillingPlanType.toLowerCase() ? subscription.referenceFee : subscription.fee}</Text>
                        <Text>/ month</Text>
                    </View>
                    <View className='gap-1'>
                        <Text className='font-hanken text-base'>{subscription.referenceFee}/mo</Text>
                        <View>
                            {subscription.type == selectedBillingPlanType.toLowerCase() ?
                                <Text className='font-hanken text-base'>BILLED MONTHLY</Text> :
                                <Text className='font-hanken text-base'>BILLED $47.88/YR</Text>
                            }
                        </View>
                    </View>
                </View>

                <View className='gap-2 mt-3'>
                    {subscription.features.map((feature, i) => (
                        <View key={i} className='flex-row items-center gap-2'>
                            <CheckCircle2 color={"green"} />
                            <Text className='font-hanken text-base'>{feature}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </Pressable>
    )
}

export default SubscriptionCard

const styles = StyleSheet.create({})