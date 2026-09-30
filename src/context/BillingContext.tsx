import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'

type BillingContextVlaue = {
    selectedBillingPlanType: string;
    updateSelectedBillingPlanTypeFn: (type: string) => void
    selectedBillingPlanId: number;
    updateSelectedBillingPlanIdFn: (id: number) => void
}
export const BillingContext = React.createContext<BillingContextVlaue | null>(null)

export const BillingProvider = ({ children }: React.PropsWithChildren) => {
    const [selectedBillingPlanType, setSelectedBillingPlanType] = useState("MONTHLY")
    const [selectedBillingPlanId, setSelectedBillingPlanId] = useState<number>(1)

    const updateSelectedBillingPlanTypeFn = (type: string) => {
        setSelectedBillingPlanType(type)
    }

    const updateSelectedBillingPlanIdFn = (id: number) => {
        setSelectedBillingPlanId(id)
    }
    return (
        <BillingContext.Provider value={{
            selectedBillingPlanType,
            selectedBillingPlanId,
            updateSelectedBillingPlanIdFn,
            updateSelectedBillingPlanTypeFn
        }}>
            {children}
        </BillingContext.Provider>
    )
}

export function useBilling() {
    const value = useContext(BillingContext)
    if (!value) throw new Error("useBilling must be used inside its provider")
    return value
}

const styles = StyleSheet.create({})