import { View, Text,SafeAreaView,
    Image,TouchableOpacity
    ,TextInput,ScrollView } from 'react-native'
    import { AntDesign,Ionicons ,FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons'; 
    import DishesRow from '../components/DishesRow';
import { useNavigation, useRoute } from '@react-navigation/native'
import React ,{useLayoutEffect} from 'react'
import BasketIcon from '../components/BasketIcon';
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
    <>
    <BasketIcon/>
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


{/* DishesRow  */}

{/* {dishes.map((dishes)=>{
    <DishesRow
    key={dishes._id}
    id={dishes._id}
    name={dishes.name}
    description={dishes.description}
    price={dishes.price}
    image={dishes.image}
    />
})
} */}
</View >
<View className="pb-30">
<Text className="m-2 text-lg font-bold">
    Menu
</Text >
<DishesRow
 id="1111"
 name="asdasd"
 description="asdasd"
 price="1200"
 image="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
/>
<DishesRow
 id="2222"
 name="asdasd"
 description="asdasd"
 price="1200"
 image="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
/>
<DishesRow
 id="3333"
 name="asdasd"
 description="asdasd"
 price="1200"
 image="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
/>
<DishesRow
 id="4444"
 name="asdasd"
 description="asdasd"
 price="1200"
 image="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
/>
<DishesRow
 id="5555"
 name="asdasd"
 description="asdasd"
 price="1200"
 image="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
/>
</View>
    </ScrollView></>
  )
}

export default RestaurantScreen