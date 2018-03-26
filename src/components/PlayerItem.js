import React from 'react';
import { Text, StyleSheet } from 'react-native';
import CircleImage from '../components/CircleImage';
import { Card, CardSection } from '../components/common';

const PlayerItem = ({ player, onPress }) => {
  const { nameStyle, positionStyle } = styles;
  
  return (
    <Card style={{ flexDirection: 'row' }}>
      <CardSection style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'column' }}>
        <CircleImage image={ require('../../resources/football.png') } width={45} height={45} />
      </CardSection>

      <CardSection style={{ flex: 6, justifyContent: 'flex-start', flexDirection: 'column' }}>
        <Text style={ nameStyle }> { player.name } </Text>
        <Text style={ positionStyle }> { player.position } </Text>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 17,
  },
  positionStyle: {
    fontSize: 14,
  }
});

export default PlayerItem;
