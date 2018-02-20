import React from 'react';
import { View, StyleSheet } from 'react-native';

const Footer = ({ children }) => {
  const { footerStyle, wrapperStyle } = styles;

  return (
    <View style={footerStyle}>
      <View style={wrapperStyle}>
        { children }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperStyle: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  footerStyle : {
    flex: 1,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
  }
});

export {Footer};
