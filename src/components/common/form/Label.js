import React from 'react';
import { Text, StyleSheet } from 'react-native';

class Label extends React.Component {
  render() {
    return (
      <Text style={ styles.labelStyle }>{ this.props.children }</Text>
    );
  }
}

const styles = StyleSheet.create({
  labelStyle : {
    fontSize: 22,
    marginTop: 12,
  }
});

export { Label };
