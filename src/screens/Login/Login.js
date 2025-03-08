import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import AppWrapper from '../../components/AppWrapper'
import { myColors } from '../../utils/Themes/Colors'
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions'
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ navigation }) => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '225672493371-kadnp1i9ldmpifqb8uml8hj0cajolh8j.apps.googleusercontent.com', // Replace with your Firebase Web Client ID
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        await AsyncStorage.setItem('key', JSON.stringify(userInfo)); // Store as string
        navigation.replace('Home');
      console.log(userInfo, '------> userInfo');

      }
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Operation (e.g. sign-in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated');
      } else {
        console.log('Some other error happened:', error);
      }
    }
  };

  return (
    <AppWrapper>
      <StatusBar backgroundColor={myColors.violet} />
      <View style={{ flex: 1, backgroundColor: myColors.violet, paddingHorizontal: 20 }}>
        <View style={{ flex: 0.5 }}>
          <Image
            style={{ width: responsiveWidth(70), height: 100, alignSelf: 'center', marginTop: 40 }}
            source={{ uri: 'https://thehardcopy.co/wp-content/uploads/Zepto-Featured-Image-Option-2.png' }}
          />
          <Text style={{ color: myColors.white, textAlign: 'center', fontSize: responsiveFontSize(1.7), top: -10, letterSpacing: 2 }}>
            10 Minutes Delivery!
          </Text>
        </View>
        <View style={{ flex: 0.5, justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={signIn}
            activeOpacity={0.8}
            style={{ backgroundColor: myColors.white, padding: 10, borderRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <AntDesign name="google" size={20} color={myColors.violet} />
            <Text style={{ marginHorizontal: 10, fontSize: responsiveFontSize(1.7), fontWeight: '800' }}>Sign in with Google</Text>
          </TouchableOpacity>
          <Text style={{ top: 10, color: myColors.white, fontSize: responsiveFontSize(1.7), fontWeight: '400', textAlign: "center" }}>
            I accept the terms & privacy policy
          </Text>
        </View>
      </View>
    </AppWrapper>
  );
}

export default Login;
