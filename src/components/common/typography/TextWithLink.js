import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  Link,
} from '../../common';

const TextWithLink = ({ textLabel, linkLabel, onPress }) => {
  const { centerWrapperStyle, wrapperStyle, textStyle } = styles;

  return (
    <View style={ centerWrapperStyle }>
      <View style={ wrapperStyle }>
        <Text style={ textStyle }>{ textLabel }</Text>
        <Link label={ linkLabel } onPress={ onPress } />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerWrapperStyle: {
    alignItems: 'center',
  },
  wrapperStyle: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  textStyle : {
    color: '#2f2f2f',
    backgroundColor: 'transparent',
    marginRight: 6,
    fontSize: 18,
  },
});

export {TextWithLink};
