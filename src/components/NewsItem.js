import React from 'react';
import { Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { iOSUIKit } from 'react-native-typography';
import { Card, CardSection } from '../components/common';

const Entities = require('html-entities').AllHtmlEntities;
const striptags = require('striptags');

const NewsItem = ({ image, title, excerpt, date, onPress }) => {
  const entities = new Entities();

  return (
    <TouchableOpacity onPress={ onPress }>
      <Card style={{ flexDirection: 'column', paddingBottom: 0, alignItems: 'flex-start' }}>
        <CardSection style={{ justifyContent: 'flex-start' }}>
          <Image source={ image } style={ styles.imageStyle } />
        </CardSection>
      
        <CardSection>
          <Text style={[iOSUIKit.title3Emphasized, {marginBottom: 6}]}>{ entities.decode(title) }</Text>
        </CardSection>

        <CardSection style={{ justifyContent: 'flex-start' }}>
          <Text style={iOSUIKit.body}>{ striptags(entities.decode(excerpt.replace(' [&hellip;]', '...'))) }</Text>
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: '100%', 
    height: 120,
    marginBottom: 6,
    justifyContent: 'flex-start'
  },
});

export default NewsItem;