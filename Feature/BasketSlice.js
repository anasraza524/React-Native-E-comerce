import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  items: [],
}

export const BasketSlice = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
     
      state.items =[...state.items, action.payload]
    },
    removeFromBasket: (state,action) => {
      const itemsIndex  = state.items.findIndex(
        (items)=>items.id === action.payload.id)
        let newBasket =[...state.items]
        if(itemsIndex >0){
newBasket.slice(itemsIndex,1)
        }
        else{
          console.warn(
            `Cant remove food id :${action.payload.id} from buskit` 
          )
        }
        state.items= newBasket;
    },
    
  },
})

// Action creators are generated for each case reducer function
export const {addToBasket,RemoveFromBasket  } = BasketSlice.actions

export const SelectBasketItems = (state)=>state.Basket.items;
export const SelectBasketItemsWithId =(state,id)=>{
  state.Basket.items.filter((item)=>  item.id === id 
  ) 
} 
export const SelectBasketTotal  =
 (state)=>state.Basket.items.reduce((total,item)=>
(total += item.price),0);
export default BasketSlice.reducer