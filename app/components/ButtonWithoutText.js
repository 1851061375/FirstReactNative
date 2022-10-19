/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import {Colors, Fonts} from '@app/themes';

const ButtonWithoutText = ({contentStyle, imageStyle, image, onPress, ...props}) => {
  return (
    <TouchableOpacity style={[styles.content, contentStyle]} onPress={onPress}>
      {image && <Image source={image} style={[styles.image, imageStyle]} />}
    </TouchableOpacity>
  );
};

export default ButtonWithoutText;

const styles = StyleSheet.create({
  content: {
    marginTop: 16,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 100,
    padding: 16,
    flexDirection: 'row',
  },
  image: {width: 24, height: 24},
});
