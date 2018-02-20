import React from 'react';
import { Image, StyleSheet } from 'react-native';

const CircleImage = ({ image, style }) => {
  return (
    <Image source={ image } style={[ styles.imageStyle, style ]} />
  );
};

const styles = StyleSheet.create({
  imageStyle : {
    width: 100,
    height: 100,
    opacity: 0.6,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#000',
  }
});

export default CircleImage;
