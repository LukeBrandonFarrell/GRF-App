import React from 'react';
import { View, Text } from 'react-native';

import ClubHeader from '../components/ClubHeader';

class ClubPlayers extends React.Component {
  render() {
    return (
      <View>
        <ClubHeader />
        <Text>Players will go here</Text>
      </View>
    );
  }
}

export default ClubPlayers;
