
import {  Text, View } from 'react-native';
import RestaurantScreen from './screens/RestaurantScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
   
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
   
      </Stack.Navigator>
    
    </NavigationContainer>
  );
}

