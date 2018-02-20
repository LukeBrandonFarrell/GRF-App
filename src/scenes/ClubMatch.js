import React from 'react';
import { View, Text } from 'react-native';

import ClubHeader from '../components/ClubHeader';

class ClubMatch extends React.Component {
  render() {
    return (
      <View>
        <ClubHeader />
        <Text>Match Reports will go here</Text>
      </View>
    );
  }
}

export default ClubMatch;
