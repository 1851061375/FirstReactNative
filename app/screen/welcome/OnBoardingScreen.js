import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  Text,
  View,
  FlatList,
  Image,
  StyleSheet,
  Button,
  Pressable,
  Dimensions,
  Animated
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5Pro';
import { Colors, Fonts, Images } from '@app/themes';

const { width, height } = Dimensions.get('screen');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Order quikly',
    content: 'Order from best restaurants with easy on demain-delivey',
    image: Images.images.shipper_1
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Free Delivery Offers',
    content: 'Free delivery for new customers and others payment methods.',
    image: Images.images.shipper_2
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f43',
    title: 'Friendly And Polite',
    content: 'Easily find your type of food craving and you’ll get delivery in wide range.',
    image: Images.images.shipper_3
  },
];

const OnBoardingScreen = () => {
  const [data, setData] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    setData(DATA.slice(pageCurrent));
    return () => { }
  }, [pageCurrent])


  return (
    <View
      style={styles.container}
    >
      <Animated.FlatList
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <View style={{ width, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
              <View style={{ flex: 0.7, justifyContent: 'center' }}>
                <Image
                  source={item.image}
                  style={{
                    width: 250,
                    height: 250,
                    resizeMode: 'contain',
                  }}
                />
              </View>

              <View
                style={{
                  width: '100%',
                  flex: 0.2,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ fontSize: 24, fontWeight: 'bold', color: Colors.black }}>
                  {item.title}
                </Text>
                <Text style={{ fontSize: 18, color: Colors.gray60, textAlign: 'center' }}>
                  {item.content}
                </Text>
              </View>
              {
                !(pageCurrent == DATA.length - 1) ?
                  <View
                    style={{
                      width: '100%',
                      flex: 0.1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingStart: 25,
                      paddingEnd: 25
                    }}
                  >
                    <Pressable style={{
                      ...styles.button,
                      elevation: 0,
                    }}
                      onPress={() => {
                        navigation.navigate('SignInScreen');
                      }}
                    >
                      <Text style={{ color: Colors.gray60 }}>Skip</Text>
                    </Pressable>

                    <Pressable style={{
                      ...styles.button,
                      backgroundColor: Colors.primary,
                      borderRadius: 20,
                      overflow: 'hidden',
                    }} onPress={() => setPageCurrent(pageCurrent + 1)}>
                      <FontAwesome name={'arrow-right'} size={24} color={Colors.white} />
                    </Pressable>
                  </View> :
                  <View
                    style={{
                      width: '100%',
                      flex: 0.1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingStart: 25,
                      paddingEnd: 25
                    }}
                  >
                    <Pressable style={{
                      ...styles.button,
                      backgroundColor: Colors.primary,
                      borderRadius: 20,
                      overflow: 'hidden',
                    }}
                      onPress={() => {
                        navigation.navigate('SignInScreen');
                      }}
                    >
                      <Text style={{ color: Colors.white }}>Get start</Text>
                    </Pressable>
                  </View>
              }

            </View>)
        }}
      />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
});
export default OnBoardingScreen;