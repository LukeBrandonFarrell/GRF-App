import React from 'react';
import { Text, StyleSheet } from 'react-native';
import CircleImage from '../components/CircleImage';
import { Card, CardSection } from '../components/common';

const MemberItem = ({ member, onPress }) => {
  const { nameStyle } = styles;

  console.log(member);

  return (
    <Card style={{ flexDirection: 'row' }}>
      <CardSection style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'column' }}>
        <CircleImage image={ require('../../resources/football.png') } width={45} height={45} />
      </CardSection>

      <CardSection style={{ flex: 6, justifyContent: 'flex-start', flexDirection: 'column' }}>
        <Text style={ nameStyle }> { member.user.display_name } </Text>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 17,
  },
});

export default MemberItem;
