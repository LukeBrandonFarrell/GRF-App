import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Card, CardSection } from '../components/common';
import Icon from 'react-native-vector-icons/FontAwesome';

const FixtureItem = ({ icon, label, onPress }) => {
  return (
    <Card>
      <CardSection style={{ flex: 6, justifyContent: 'flex-start' }}>
        <Text> Fixture goes here </Text>
      </CardSection>
    </Card>
  );
};

export default FixtureItem;
