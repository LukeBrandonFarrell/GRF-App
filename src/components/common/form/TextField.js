import React from 'react';
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native';

const TextField = (props) => {
  const { style, input, label, value, onChange, keyboardType, secureTextEntry, multiline, numberOfLines } = props;

  return (
    <View style={styles.container}>
      <TextInput
        style={[ styles.input, style]}
        value={value}
        onChangeText={onChange}
        placeholder={label}
        keyboardType={keyboardType}
        spellCheck={false}
        autoCorrect={false}
        autoCapitalize='none'
        secureTextEntry={ secureTextEntry }
        multiline={multiline }
        numberOfLines={numberOfLines}
        {...input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  input: {
    width: '100%',
    height: 50,
    marginTop: 8,
    ...Platform.select({
      ios: {
        paddingLeft: 10,
        borderRadius: 5,
        borderColor: '#EFEFEF',
        borderWidth: 1,
        backgroundColor: '#FAFAFA',
      },
      android: {
        fontSize: 20,
      }
    }),
  },
});

export {TextField};
