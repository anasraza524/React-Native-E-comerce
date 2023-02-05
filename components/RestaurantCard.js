import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome ,Ionicons} from '@expo/vector-icons'; 
const RestaurantCard = ({
    id,title,imgUrl,
    rating,genre,address,short_description,
    dishes,long,lat
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
      source={{
          uri:imgUrl
      }}
      className="h-34 w-64 rounded-sm"
      />

      <View className="px-3 pb-4">

        <Text className="font-bold text-lg pt-2">
            {title}
        </Text>
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
    </TouchableOpacity>
  )
}

export default RestaurantCard