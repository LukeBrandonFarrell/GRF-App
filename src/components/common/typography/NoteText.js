import React from 'react';
import { Text, StyleSheet } from 'react-native';

const NoteText = ({ children }) => {
  return (
    <Text style={ styles.textStyle }>{ children }</Text>
  );
};

const styles = StyleSheet.create({
  textStyle : {
    fontSize: 11,
    color: '#adadad',
    marginTop: 4,
    marginBottom: 2,
    marginLeft: 2,
  }
});

export { NoteText };
