/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';

import { Colors, Fonts, Images } from '@app/themes';
import {
  ButtonWithoutText,
  TDButtonPrimary,
  TDButtonSecondary,
  TDDividerWithTitle,
  TDTextInputAccount,
} from '@app/components';
const SignInEmailScreen = () => {
  const [checked, setChecked] = React.useState(false);
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <View
        style={{
          padding: 16,
          flex: .3,
          alignContent: 'center',
          alignItems: 'flex-start',
          justifyContent: 'flex-end'
        }}>
        <Text
          style={{
            color: Colors.black,
            fontWeight: 'bold',
            fontSize: 36,
            lineHeight: 36
          }}
        >Create{"\n"}Account.</Text>
      </View>

      <ScrollView
        style={{ backgroundColor: Colors.white, flex: .7, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 16 }}>
        <TDTextInputAccount title={'Fullname'} placeholder={'Enter your fullname'} />
        <TDTextInputAccount title={'Email'} placeholder={'Enter your email address'} />
        <TDTextInputAccount title={'Password'} placeholder={'Enter your password'} showEye={true} />

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}
        >
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text
            style={{
              color: Colors.black,
              fontSize: 14,
            }}
          >
            I agree to the 
            <Text style={{color:Colors.primary}}> Terms of Service </Text>
            and
            <Text style={{color:Colors.primary}}> Privacy Policy</Text>
          </Text>
        </View>

        <TDButtonPrimary
          title={'Create account'}
          contentStyle={{ marginTop: 32 }}
          onPress={() => {

          }}
        />
        <TDDividerWithTitle title={'Or continue with'} contentStyle={{ marginTop: 32, paddingHorizontal: 20 }} />

        <View style={{ marginTop: 32, flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <ButtonWithoutText
            contentStyle={{
              width: 65,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.secondary,
              borderWidth: 1,
              borderColor: Colors.secondary
            }}
            image={Images.icons.google}
            onPress={() => { }} />

          <ButtonWithoutText
            imageStyle={{
              with: 32,
              height: 32
            }}
            contentStyle={{
              width: 65,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.secondary,
              borderWidth: 1,
              borderColor: Colors.secondary
            }}
            image={Images.icons.facebook}
            onPress={() => { }} />

          <ButtonWithoutText

            contentStyle={{
              width: 65,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.secondary,
              borderWidth: 1,
              borderColor: Colors.secondary
            }}
            image={Images.icons.apple}
            onPress={() => { }} />
        </View>
        <View
          style={{
            paddingTop: 40,
            alignItems: 'flex-end',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text style={{ color: '#6C6C6C', fontSize: 16 }}>{'Already have an account? '}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={{ color: Colors.primary, fontSize: 16, fontWeight: 'bold' }}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInEmailScreen;

const styles = StyleSheet.create({});
