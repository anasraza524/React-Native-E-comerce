import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import RestaurantCard from './RestaurantCard';
import { AntDesign } from '@expo/vector-icons'; 
const FeatureRow = ({id,title,description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
      <Text className="font-bold text-lg">{title}</Text>
      <AntDesign name="arrowright" size={18} color="black" />
      </View>
      <Text className="text-gary-500 px-4">{description}</Text>
    
    <ScrollView
    horizontal
    contentContainerStyle={
        {
            paddingHorizontal:15
        }
    }
    showsHorizontalScrollIndicator={false}
    className="pt-4"
    >
        {/*RestaurantCard  */}
<RestaurantCard
 id={123}
 title="Saggi"
 imgUrl="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
 rating={4.5}
 genre="japaen"
 address="asdasd"
 short_description="Asdasdad"
 dishes={[]}
  long={20} lat={0}
/> 
<RestaurantCard
 id={123}
 title="Saggi"
 imageUrl='https://newlinesmag.com/wp-content/uploads/Karachistreetfoodweb.jpg'
 rating={4.5}
 genre="japaen"
 address="asdasd"
 short_description="Asdasdad"
 dishes={[]}
  long={20} lat={0}
/> 
<RestaurantCard
 id={123}
 title="Saggi"
 imageUrl='https://newlinesmag.com/wp-content/uploads/Karachistreetfoodweb.jpg'
 rating={4.5}
 genre="japaen"
 address="asdasd"
 short_description="Asdasdad"
 dishes={[]}
  long={20} lat={0}
/> 
<RestaurantCard
 id={123}
 title="Saggi"
 imgUrl='https://newlinesmag.com/wp-content/uploads/Karachistreetfoodweb.jpg'
 rating={4.5}
 genre="japaen"
 address="asdasd"
 short_description="Asdasdad"
 dishes={[]}
  long={20} lat={0}
/> 
    </ScrollView>
    </View>
  )
}

export default FeatureRow