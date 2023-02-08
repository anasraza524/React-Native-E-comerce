import { View, Text,SafeAreaView,
  Image
  ,TextInput,ScrollView } from 'react-native'
import React ,{useLayoutEffect} from 'react'
import Categories from '../components/Categories';
import { useNavigation } from '@react-navigation/native'
import {AntDesign,FontAwesome5,
  Feather
} from '@expo/vector-icons';
import FeatureRow from '../components/FeatureRow';

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    
    navigation.setOptions({
      headerShown:false,
    })
    }, [])
  return (
    <SafeAreaView className="bg-white pt-5">
     
<View className="flex-row pb-3 items-center mx-4 space-x-2" >
<Image
source={{
  uri:"https://links.papareact.com/wru"
}}
className="h-7 w-7 bg-grey-500 p-4 rounded-full"
/>

<View className="flex-1">
<Text className="font-bold text-gray-400 text-xs">
  Deliver Now!
</Text>
<Text className="font-bold text-xl">
  current Location
  <AntDesign name="down" size={20} color="black" />
</Text>
</View>
<FontAwesome5 name="user" size={24} color="black" />
</View>
     
{/* Search */}
<View className="flex-row items-center space-x-2 pb-2 mx-4 " >
<View className="flex-row rounded-lg flex-1  space-x-2 bg-gray-200 p-3">
<AntDesign name="search1" size={20} color="black" />
<TextInput
placeholder="Restaurant & canteen"
keyboardType="default"
/>
  </View>
  <Feather name="settings" size={24} color="black" />
</View>


{/* Scroll View  */}

<ScrollView className="bg-gray-100"

contentContainerStyle={{
  paddingBottom:150,
}}>
{/* categories Scroll */}
<Categories/>


{/* feature Row */}
<FeatureRow
id="12"
title="asds"
description="asdsad"
/>
<FeatureRow
id="12"
title="asds"
description="asdsad"
/>
<FeatureRow
id="12"
title="asds"
description="asdsad"
/>
</ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen

