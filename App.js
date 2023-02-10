
import {  Text, View } from 'react-native';
import RestaurantScreen from './screens/RestaurantScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BasketScreen from './screens/BasketScreen';
import { Provider } from 'react-redux';
import { store } from './store';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Provider store={store}>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="BasketScreen" component={BasketScreen} />
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

