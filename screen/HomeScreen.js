import { View, Text,SafeAreaView } from 'react-native'
import React ,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const navigation = useNavigation
useLayoutEffect(() => {
navigation.setOptions({
  headerShown:false,
})
}, [])
const HomeScreen = () => {
  return (
    <SafeAreaView className="bg-white pt-5">
      <Text>HomeSreen
<View className="flex-raw pb-3 item-center mx-4 space-x-2" >
<Image
source={{
  url:"https://links.papareact.com/wru"
}}
className="h-7 w-7 bg-grey-500 p-4 rounded-full"
/>

</View>

      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen

