import React from 'react';
import { View, Text } from 'react-native';

import ClubHeader from '../components/ClubHeader';

class ClubFixtures extends React.Component {
  render() {
    return (
      <View>
        <ClubHeader />
        <Text>Fixtures will go here</Text>
      </View>
    );
  }
}

export default ClubFixtures;
