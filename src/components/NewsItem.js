import React from 'react';
import { Text, TouchableOpacity, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { IGNORED_TAGS } from 'react-native-render-html/src/HTMLUtils';
import { Card, CardSection } from '../components/common';

const NewsItem = ({ image, title, excerpt, date, onPress }) => {
  return (
    <TouchableOpacity onPress={ onPress }>
      <Card style={{ flexDirection: 'column' }}>
        <CardSection style={{ justifyContent: 'flex-start' }}>
          <HTML html={title} />
        </CardSection>

        <CardSection style={{ justifyContent: 'flex-start' }}>
          <HTML
            html={excerpt}
            imagesMaxWidth={Dimensions.get('window').width}
            ignoredTags={[ ...IGNORED_TAGS ]} />
        </CardSection>
      </Card>
    </TouchableOpacity>
  );
};

export default NewsItem;
