import { View, Text,SafeAreaView,Image } from 'react-native'
import React ,{useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    
    navigation.setOptions({
      headerShown:false,
    })
    }, [])
  return (
    <SafeAreaView className="bg-white pt-5">
      <Text>
<View className="flex-row pb-3 items-center mx-4 space-x-2" >
<Image
source={{
  uri:"https://links.papareact.com/wru"
}}
className="h-7 w-7 bg-grey-500 p-4 rounded-full"
/>

<View>
<Text className="text-red-500">
  Discrption
</Text>
</View>

</View>

      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen

