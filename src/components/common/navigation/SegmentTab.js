import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { IconWithText } from '../typography/IconWithText';

const SegmentTab = ({ id, icon, iconSize, label, highlightColor, selected, onPress }) => {
  const { tabStyle, tabSelectedStyle } = styles;

  const highlight = (id == selected) ? true : false;

  return (
    <TouchableOpacity onPress={onPress} style={[tabStyle, highlight ? tabSelectedStyle : {} ]}>
      <IconWithText
        text={label}
        icon={icon}
        iconSize={iconSize || 16}
        textSize={14}
        iconColor={highlight ? highlightColor : 'black'}
        textColor={highlight ? highlightColor : 'black'}
      />
    </TouchableOpacity>
  );
};

SegmentTab.defaultProps = {
  selected: ''
};

const styles = StyleSheet.create({
  tabStyle : {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabSelectedStyle : {
    backgroundColor: '#CD2C2E',
  },
});

export { SegmentTab };
