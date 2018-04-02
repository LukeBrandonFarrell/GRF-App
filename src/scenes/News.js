import React from 'react';
import { ScrollView, Text, Linking } from 'react-native';
import NewsItem from '../components/NewsItem';
import axios from 'react-native-axios';
import Config from 'react-native-config';

import { Spinner } from '../components/common';

class News extends React.Component {
  state = { news: null }
  
  componentDidMount() {    
    axios.get(
      'https://public-api.wordpress.com/rest/v1.1/sites/www.teamgrassroots.co.uk/posts/?number=5&fields=id,title,excerpt,featured_image,URL')
      .then((response) => {
        this.setState({ news : response.data.posts });
      }).catch(console.log);
  }
  
  renderNews(){
    const { news } = this.state;
    
    if(!news)
      return <Spinner style={{ marginTop: 25 }} />;
    
    return news.map((news, i) => {
      console.log(news);
      return (
        <NewsItem 
          key={i}
          title={news.title}
          excerpt={news.excerpt}
          image={{ uri: news.featured_image }}
          onPress={() => Linking.openURL(news.URL)} />
      );
    });
  }
  
  render() {
    return (
      <ScrollView>
        { this.renderNews() }
      </ScrollView>
    );
  }
}

export default News;
