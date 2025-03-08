import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackRoute from './src/routes/StackRoute';

const App = () => {
  return (
   <NavigationContainer>
       <StackRoute/>
   </NavigationContainer>
  );
};

export default App;