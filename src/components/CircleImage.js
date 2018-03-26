import React from 'react';
import { Image, StyleSheet } from 'react-native';

const CircleImage = ({ image, width, height, style }) => {
  return (
    <Image source={ image } style={[ styles.imageStyle, { width: width, height: height }, style ]} />
  );
};

CircleImage.defaultProps = {
  width: 100,
  height: 100,
};

const styles = StyleSheet.create({
  imageStyle : {
    borderRadius: 20,
  }
});

export default CircleImage;
