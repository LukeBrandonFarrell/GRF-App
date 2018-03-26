import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, CardSection } from '../components/common';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const FixtureItem = ({ fixture, club, onPress }) => {
  const { titleStyle, addressStyle, dateStyle } = styles;
  
  console.log(club.id);
  
  return (
    <Card>
      <CardSection style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'column' }}>
        <Text style={ titleStyle }> { `${club.name} vs. ${fixture.opposition}` } </Text>
        <Text style={ addressStyle }> { fixture.address } </Text>
        <Text style={ dateStyle }> { moment(fixture.datetime).format('MMMM Do YYYY @ h:mm a') } </Text>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 16,
    marginBottom: 5,
  },
  addressStyle: {
    fontSize: 14,
    marginBottom: 5,
  },
  dateStyle: {
    
  }
});

export default FixtureItem;
