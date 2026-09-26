import { View, Text } from 'react-native'
import React from 'react'
import { cn } from '@/lib/utils'

type DotPropsType = {
    color?: string,
    hw: string,
    radius?: number
    rounded?: boolean
}
const Dot = ({ hw = "8", radius = 6, rounded, color }: DotPropsType) => {
    return (
        <View
            className={cn(!color && "bg-tertiary-fixed-variant", rounded && "rounded-full")}
            style={{
                ...(color ? { backgroundColor: color } : {}),
                height: Number(hw),
                width: Number(hw),
                borderRadius: rounded ? 9999 : radius,
            }}
        />
    )
}

export default Dot