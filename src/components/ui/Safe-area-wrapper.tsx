import { cn } from "@/lib/utils"
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context"

type SafeAreaWrapperProps = SafeAreaViewProps

const SafeAreaWrapper = ({ className, ...props }: SafeAreaWrapperProps) => {
    return (
        <SafeAreaView className={cn("flex-1 bg-white", className)} {...props} />
    )
}

export default SafeAreaWrapper