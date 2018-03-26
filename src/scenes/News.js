import React from 'react';
import { ScrollView, Text } from 'react-native';
import NewsItem from '../components/NewsItem';
import axios from 'react-native-axios';
import Config from 'react-native-config';

import { Spinner } from '../components/common';

class News extends React.Component {
  state = { news: null }
  
  componentDidMount() {    
    axios.get('https://public-api.wordpress.com/rest/v1.1/sites/www.teamgrassroots.co.uk/posts/?number=5&fields=id,title,excerpt,featured_image').then((response) => {
      this.setState({ news : response.data.posts });
    }).catch(console.log);
  }
  
  renderNews(){
    const { news } = this.state;
    
    if(!news)
      return <Spinner style={{ marginTop: 25 }} />;
    
    return news.map((news) => {
      return (
        <NewsItem 
          key={news.id}
          title={news.title}
          excerpt={news.excerpt}
          image={{ uri: news.featured_image }} />
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
