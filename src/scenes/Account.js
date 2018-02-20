import React from 'react';
import { View, Text } from 'react-native';
import CircleImage from '../components/CircleImage';

class Account extends React.Component {
  render() {
    return (
      <View style={{ alignItems: 'center' }}>
        <CircleImage image={ require('../../resources/football.png') } />
      </View>
    );
  }
}

export default Account;
