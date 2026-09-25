import { View, Text } from 'react-native'
import React from 'react'
import { cn } from '@/lib/utils'

type DotPropsType = {
    hw: number,
    r?: number
    full?: boolean
}
const Dot = ({ hw = 8, r = 6, full }: DotPropsType) => {
    return (
        <View

            className={cn("bg-tertiary-fixed-variant",
                full && "rounded-full",
                `h-${hw}px`,
                `rounded-[${r}px]`
            )} />
    )
}

export default Dot