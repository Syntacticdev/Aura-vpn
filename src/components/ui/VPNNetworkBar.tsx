import { StyleSheet, Text, View } from 'react-native'
import { Signal, SignalHigh, SignalLow, SignalMedium, SignalZero } from "lucide-react-native"

const VPNNetworkBar = ({ level }: { level: number }) => {

    switch (level) {
        case 1:
            return <SignalZero color={"#A5B1C2"} size={36} />
        case 2:
            return <SignalLow color={"#FF9F43"} size={36} />
        case 3:
            return <SignalMedium color={"#FFD200"} size={36} />
        case 4:
            return <SignalHigh color={"#2ED573"} size={36} />
        case 5:
            return <Signal color={"#10AC84"} size={36} />
        default:
            return <SignalZero color={"#A5B1C2"} size={36} />
    }
}

export default VPNNetworkBar

const styles = StyleSheet.create({})