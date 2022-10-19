/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView, Alert, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import { useNavigation } from '@react-navigation/native';

import SQLite from 'react-native-sqlite-storage';

import SQLiteHelper from '@app/utils/SQLiteHelper';
const sqliteH = new SQLiteHelper({ name: 'tdcore.db', createFromLocation: 1 });

import { Colors, Fonts, Images } from '@app/themes'
import {
  ButtonWithoutText,
  TDButtonPrimary,
  TDButtonSecondary,
  TDDividerWithTitle,
  TDTextInputAccount,
} from '@app/components';

const SignInScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const tmp = async () => {
      // 1.open database
      const { res: sqLite, err } = await sqliteH.open();
      // original sqLite Instance: execute sql
      sqLite.executeSql('SELECT * FROM tbHangXe');
      const { res, errr } = await sqliteH.selectItems('tbHangXe', {
        columns: ['Id', 'Name', 'Name_En'],
        conditions: [{ columnName: 'Name', value: 'demo' }],
        pageNo: 2,
        pageLength: 5,
      });
      console.log(res);
      console.log(errr);
    };
    tmp();

    /* var db = SQLite.openDatabase({name: 'tdcore.db', createFromLocation: 1});

    db.transaction(tx => {
      console.log('vaoday');
      tx.executeSql('SELECT * FROM tbHangXe', [], (tx, results) => {
        var len = results.rows.length;
        console.log('len', len);
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        console.log(temp);
        console.log('Query completed');
      }); 
      
    }); */
  }, []);

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
        >Welcome{"\n"}Back.</Text>
      </View>

      <ScrollView
        style={{ backgroundColor: Colors.white, flex: .7, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 16 }}>
        <TDTextInputAccount title={'Email'} placeholder={'Enter your email address'} showEye={false} />
        <TDTextInputAccount title={'Password'} placeholder={'Enter your password'} showEye={true} />
        <TouchableOpacity
          style={{ alignItems: 'flex-end', marginTop: 10 }}
          onPress={() => {
            navigation.navigate('ForgotScreen');
          }}>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 16,
              fontWeight: 'bold'
            }}
          >
            Forgot Password
          </Text>
        </TouchableOpacity>
        <TDButtonPrimary
          title={'Sign in'}
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
            imageStyle= {{
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
          <Text style={{ color: '#6C6C6C', fontSize: 16 }}>{'Don’t have an account? '}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpScreen');
            }}>
            <Text style={{ color: Colors.primary, fontSize: 16, fontWeight: 'bold' }}>Register now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({});
