import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Login from '../screens/Login/Login';
import Details from '../screens/Details/Details';
import Cart from '../screens/Cart/Cart';
import Splash from '../screens/Splash/Splash';
import Wishlist from '../screens/Wishlist/Wishlist';


const Stack = createNativeStackNavigator();
const StackRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Splash">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Wishlist" component={Wishlist} />

    </Stack.Navigator>
  )
}

export default StackRoutes