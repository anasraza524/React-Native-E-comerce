import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React,{useState} from 'react'
import { AntDesign } from '@expo/vector-icons'; 
import { useDispatch,useSelector } from 'react-redux';
import { addToBasket,removeFromBasket, SelectBasketItems,SelectBasketItemsWithId } from '../Feature/BasketSlice';
const DishesRow = ({id, name,description,price,image}) => {
 const [isPressed, setIsPressed] = useState(false)
  const dispatch = useDispatch()
  const items = useSelector((state)=>SelectBasketItemsWithId(state,id))
 const AddItemsInBasket = () => { 

dispatch(addToBasket({id, name,description,price,image}))
   }
 
console.log(items)

   const RemoveItemsFromBasket = () => { 
    if(!items.length > 0) return

dispatch(removeFromBasket({id}))
    }
    
 return (

<> 
   <TouchableOpacity
  onPress={()=>{
    setIsPressed(!isPressed)
  }}

    className={`bg-white border p-4 border-gray-200
    ${isPressed && "border-b-0"}
    `}
    >
     <View className="flex-row">
<View className="flex-1 pr-2">
<Text className="text-lg mb-1">{name}</Text>
<Text className="text-gray-400 ">{description}</Text>
<Text className="text-gray-400 mt-2 ">{price}</Text>
</View>

<View>
  <Image
  style={{borderWidth:1,borderColor:"#F3F3F4"}}
  source={{
    uri:image
  }}
  className="h-20 w-20 bg-gray-300 p-4"
  />

 
</View>
     </View>
    </TouchableOpacity>

    {isPressed && (
      <View className="bg-white px-4">
        <View className="flex-row items-center space-x-2 pb-3">
        <TouchableOpacity
       onPress={AddItemsInBasket}
        >   
        <AntDesign name="pluscircle" size={20} color="green" />
           </TouchableOpacity>
           <Text>
            {items.length}
       
           </Text>
           <TouchableOpacity
         onPress={RemoveItemsFromBasket}
          disabled={!items.length}
           >   
        <AntDesign name="minuscircle" size={20} 
        
       color={items.length > 0?"green":"gray"}
         />
           </TouchableOpacity>
        </View>
    
    
      </View>
    )

    }
</>
  )
}

export default DishesRow