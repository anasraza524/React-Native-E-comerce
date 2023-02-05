import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoriesCard from './CategoriesCard'
const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingBottom:10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}
    >
        {/* Categories Card Components */}
        <CategoriesCard ImageUrl="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
         title="testing" />
       <CategoriesCard ImageUrl="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
         title="testing" />
          <CategoriesCard ImageUrl="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
         title="testing" />
          <CategoriesCard ImageUrl="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
         title="testing" />
          <CategoriesCard ImageUrl="https://clicklovegrow.com/wp-content/uploads/2020/03/Naomi-Sherman-Advanced-Graduate4.jpg"
         title="testing" />
    </ScrollView>
  )
}

export default Categories