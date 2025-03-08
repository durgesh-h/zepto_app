import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppWrapper from '../../components/AppWrapper'
import { myColors } from '../../utils/Themes/Colors'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign';
const Login = () => {
  return (
    <AppWrapper>
      <StatusBar backgroundColor={myColors.violet} />
      <View style={{ flex: 1, backgroundColor: myColors.violet, paddingHorizontal: 20 }}>
        <View style={{ flex: 0.5 }}>
          <Image style={{ width: responsiveWidth(70), height: 100, alignSelf: 'center', marginTop: 40 }} source={{ uri: 'https://thehardcopy.co/wp-content/uploads/Zepto-Featured-Image-Option-2.png' }} />
          <Text style={{ color: myColors.white, textAlign: 'center', fontSize: responsiveFontSize(1.7), top: -10, letterSpacing: 2 }}>10 Minutes Delivery!</Text>
        </View>
        <View style={{ flex: 0.5, justifyContent: 'center' }}>
            <TouchableOpacity activeOpacity={0.8} style={{ backgroundColor: myColors.white, padding: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
             <AntDesign name="google" size={20} color={myColors.violet} />
              <Text style={{marginHorizontal: 10, fontSize:responsiveFontSize(1.7), fontWeight: 800}} >SignIn with Google</Text>
            </TouchableOpacity>
            <Text style={{top:10,color:myColors.white, fontSize:responsiveFontSize(1.7), fontWeight: 400, textAlign:"center"}} >I accept the terms & privacy policy</Text>

        </View>
      </View>
    </AppWrapper>
  )
}

export default Login