import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Card, CardSection } from '../components/common';
import Icon from 'react-native-vector-icons/FontAwesome';

const ClubItem = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity onPress={ onPress }>
      <Card>
        <CardSection style={{ flex: 1 }}>
          <Icon name={ icon } size={40}/>
        </CardSection>

        <CardSection style={{ flex: 6, justifyContent: 'flex-start' }}>
          <Text> { label } </Text>
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

export default ClubItem;
