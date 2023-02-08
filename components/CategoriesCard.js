import { View, Text, ScrollView, TouchableOpacity
,Image } from 'react-native'
import React from 'react'

const CategoriesCard = ({ImageUrl,title}) => {
  return (
    <TouchableOpacity className="relative mr-2">
        <Image
        source={{
            uri:"https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
        }}
        className="h-20 w-20 rounded"
        />
      <Text
      className="absolute bottom-1 left-1 text-white font-bold"
      >{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesCard