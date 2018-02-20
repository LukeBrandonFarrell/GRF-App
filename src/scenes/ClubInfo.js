import React from 'react';
import { View, Text } from 'react-native';

import ClubHeader from '../components/ClubHeader';

class ClubInfo extends React.Component {
  render() {
    return (
      <View>
        <ClubHeader />
        <Text>Infomation about the cub will go here</Text>
      </View>
    );
  }
}

export default ClubInfo;
