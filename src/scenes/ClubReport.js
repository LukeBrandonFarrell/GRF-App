import React from 'react';
import { View, Text } from 'react-native';

import ClubHeader from '../components/ClubHeader';

class ClubReport extends React.Component {
  render() {
    return (
      <View>
        <ClubHeader />
        <Text>Match misconduct form will go here</Text>
      </View>
    );
  }
}

export default ClubReport;
