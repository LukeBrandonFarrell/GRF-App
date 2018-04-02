import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { IconWithText } from '../typography/IconWithText';
import TextWith from 'react-native-text-with';

const SegmentTab = ({ id, icon, iconSize, label, highlightColor, backgroundColor, selected, onPress }) => {
  const { tabStyle, tabSelectedStyle } = styles;

  const highlight = (id == selected) ? true : false;

  return (
    <TouchableOpacity onPress={onPress} style={[tabStyle, highlight ? { backgroundColor } : {} ]}>
      { icon }
    </TouchableOpacity>
  );
};

SegmentTab.defaultProps = {
  selected: '',
  backgroundColor: '#CD2C2E',
};

SegmentTab.defaultProps = {
  
};

const styles = StyleSheet.create({
  tabStyle : {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { SegmentTab };
