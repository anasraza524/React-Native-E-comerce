import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { SelectBasketItems, SelectBasketTotal } from '../Feature/BasketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const items = useSelector(SelectBasketItems)
  const navigation = useNavigation()
  const BasketTotal = useSelector(SelectBasketTotal)
    return (
    <View className="absolute bottom-10 w-full z-50">
     <TouchableOpacity className="mx-5 bg-(#00CCBB) p-4 rounded-lg 
     flex-row items-center space-x-1">
<Text className="text-white font-extrabold text-lg bg-(#01A296) first-letter:py-1 px-2"> 
{items.length}
</Text>
<Text className="flex-1 font-extrabold text-lg"> 
View Basket
</Text>
<Text className="text-white font-extrabold text-lg"> 

Rs:{BasketTotal}
</Text>
     </TouchableOpacity>
    </View>
  )
}

export default BasketIcon