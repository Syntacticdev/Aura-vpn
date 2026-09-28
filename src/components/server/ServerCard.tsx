import { StyleSheet, Text, View } from 'react-native'
import { Image as EImage } from "expo-image"
import { SlidersHorizontal } from 'lucide-react-native';
import VPNNetworkBar from '../ui/VPNNetworkBar';


const ServerCard = () => {
    const blurhash =
        '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

    return (
        <View className=' shadow-card-lg flex-row items-center w-full bg-white rounded-2xl p-4 android:elevation gap-6'>
            <View className='bg-surface-dim rounded-full justify-center items-center h-12 w-12 '>
                <EImage placeholder={{ blurhash }} contentFit='cover' style={{ width: '80%', height: '80%', borderRadius: 100 }} source={require("@/assets/images/flags/gm.svg")} />
            </View>

            <View className='w-[55%]'>
                <View className='flex-row items-center'>
                    <View className='flex-row items-center gap-2'>
                        <Text className='text-xl font-hanken-bold '>Zurich</Text>
                        <Text className='text-lg font-hanken'>#01</Text>
                    </View>
                </View>
                <View className='flex-row w-full  items-center gap-2'>
                    <Text className='text-lg font-hanken '>Switzerland</Text>
                </View>
            </View>

            <View className='flex-row items-end gap-2 '>
                <Text className='text-lg font-jetbrainsMono-bold  '>12ms</Text>
                <VPNNetworkBar level={4} />
            </View>
        </View>
    )
}

export default ServerCard

const styles = StyleSheet.create({})