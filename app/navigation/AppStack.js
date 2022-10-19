import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import {SignInScreen, SignInEmailScreen, SignUpScreen, ForgotScreen, ChangePasswordScreen} from '@app/screen/account';


import AppBottomTab from './AppBottomTab';

import {ListLoaiDichVuScreen} from '@app/screen/loaidichvu';
import { OnBoardingScreen } from '@app/screen/welcome';

const AppStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName={'HomeScreen'} screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen}/>
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="SignInEmailScreen" component={SignInEmailScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
      <Stack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
