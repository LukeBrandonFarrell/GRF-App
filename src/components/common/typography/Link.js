import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const Link = ({ label, color, style, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.link, {color: color || '#FF9350',}, style]}>{ label }</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    backgroundColor: 'transparent',
    alignSelf: 'center',
    fontSize: 18,
  },
});

export {Link};
