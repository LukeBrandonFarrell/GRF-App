import React from 'react';
import { ScrollView, Text } from 'react-native';
import NewsItem from '../components/NewsItem';
import axios from 'react-native-axios';
import Config from 'react-native-config';

import { Spinner } from '../components/common';

class News extends React.Component {
  state = { news: null }
  
  componentDidMount() {
    axios.get(`${Config.GRASSROOTS_URL}/posts`).then((response) => {
      this.setState({ news : response.data });
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
          title={news.title.rendered}
          excerpt={news.excerpt.rendered} />
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
