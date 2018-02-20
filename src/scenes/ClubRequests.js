import React from 'react';
import { View, Text } from 'react-native';

import ClubHeader from '../components/ClubHeader';

class ClubRequests extends React.Component {
  render() {
    return (
      <View>
        <ClubHeader />
        <Text>Request from parents will go here</Text>
      </View>
    );
  }
}

export default ClubRequests;
