import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ label, onPress, style, disabled, touchableOpacityStyle, icon }) => {
  const { buttonStyle, textStyle } = styles;
  const buttonColor = disabled ? '#FF935055' : '#FF9350';

  return (
    <TouchableOpacity onPress={onPress} disabled={ disabled } style={ touchableOpacityStyle }>
      <View style={[buttonStyle, { backgroundColor: buttonColor, }, style ]}>
        <Text style={textStyle}>{ label }</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height:50,
    marginTop: 8,
    marginBottom: 8,
    justifyContent: 'center',
    overflow:'hidden',
    borderRadius: 5,
  },
  textStyle: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
  }
});

export { CustomButton };
