import { View, Text, StatusBar, Image } from 'react-native'
import React, { useEffect } from 'react'
import AppWrapper from '../../components/AppWrapper'
import { myColors } from '../../utils/Themes/Colors'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('key')
        .then(result => {
          if (result) {
            navigation.replace('Home')
          }
          else {
            navigation.replace('Login')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }, 3000)
  }, [navigation]);


  return (
    <AppWrapper>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: myColors.violet }}>
        <StatusBar hidden />
        <Image style={{ width: responsiveWidth(100), height: 100 }} source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Logo_of_Zepto.png?20230827063407' }} />
      </View>
    </AppWrapper>
  )
}

export default Splash