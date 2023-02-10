import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  items: [],
}

export const BasketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
     
      state.items =[...state.items, action.payload]
    },
    removeFromBasket: (state,action) => {
      const index  = state.items.findIndex(
        (items)=>items.id === action.payload.id)
        let newBasket =[...state.items]
        if(index >=0){
newBasket.splice(index,1)
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

export const SelectBasketItems = (state)=>state.basket.items;
export const SelectBasketItemsWithId =(state,id)=>
  state.basket.items.filter((item)=>  item.id === id 
 
  ) 


export const SelectBasketTotal  = (state)=>
 state.basket.items.reduce((total,item) =>(total += item.price),0);


export default BasketSlice.reducer