import React from 'react';
import { Text, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import HTML from 'react-native-render-html';
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils';
import { Card, CardSection } from '../components/common';

const NewsItem = ({ image, title, excerpt, date, onPress }) => {
  return (
    <TouchableOpacity onPress={ onPress }>
      <Card style={{ flexDirection: 'column' }}>
        <CardSection style={{ justifyContent: 'flex-start' }}>
          <Image source={ image } style={ styles.imageStyle } />
        </CardSection>
      
        <CardSection style={{ justifyContent: 'flex-start' }}>
          <HTML html={title} />
        </CardSection>

        <CardSection style={{ justifyContent: 'flex-start' }}>
          <HTML
            html={excerpt}
            imagesMaxWidth={Dimensions.get('window').width}
            ignoredTags={[ ...IGNORED_TAGS, 'div' ]} />
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 200, 
    height: 100,
    justifyContent: 'flex-start'
  },
});

export default NewsItem;