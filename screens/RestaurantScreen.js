import { View, Text,SafeAreaView,
    Image,TouchableOpacity
    ,TextInput,ScrollView } from 'react-native'
    import { AntDesign,Ionicons ,FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'; 
    
import { useNavigation, useRoute } from '@react-navigation/native'
import React ,{useLayoutEffect} from 'react'
const RestaurantScreen = () => {

const navigation = useNavigation()
    const {
        params :{
            id,title,ImageUrl,
            rating,genre,address,short_description,
            dishes,long,lat
    }}= useRoute()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown:false,
        })
    }, [])
  return (
    <ScrollView>
<View>
    <Image
        source={{
            uri:ImageUrl
        }}
        className="w-full h-56 bg-gray-300 p-4"
        />
    <TouchableOpacity
    onPress={navigation.goBack}
    className="absolute top-14 left-5 p-2 bg-gray-300 rounded-full "
    >
<Ionicons name="arrow-back" size={20} color="black" />
    </TouchableOpacity>
</View>
      

<View className="bg-white">
<View className="px-4 pt-4">
<Text className="text-3xl font-bold">
    {title}
</Text>
<View className="flex-row space-x-2 my-1" >

<View className="flex-row items-center space-x-1">
        <FontAwesome  name="star" size={22} color="yellow" />
        <Text className=" text-xs text-gray-500">
        <Text className="text-yellow-500">
           {rating}
           </Text>
           .{genre}
        </Text>
        </View>
        <View className="flex-row items-center space-x-1">
<Ionicons name="location-sharp" size={22} color="gray" opacity={0.5} />
<Text className="text-xm text-gray-500">
NearBy. {address}
</Text>

</View>
        </View>

        <Text className="text-gray-300 mt-2 pb-4">
           {short_description}
            </Text>  
</View>

<TouchableOpacity className="flex-row items-center space-x-2">

<MaterialCommunityIcons name="chat-question" size={20} color="black" />
</TouchableOpacity>
</View>
    </ScrollView>
  )
}

export default RestaurantScreen