import React from 'react';
import { View, Text } from 'react-native';

import ClubHeader from '../components/ClubHeader';

class ClubChat extends React.Component {
  render() {
    return (
      <View>
        <ClubHeader />
        <Text>Club chat will go here</Text>
      </View>
    );
  }
}

export default ClubChat;
