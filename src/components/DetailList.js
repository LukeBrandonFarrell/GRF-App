import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DetailList extends React.Component {
  renderList(){
    const { listItemStyle, listItemTextStyle } = styles;
    const { data } = this.props;

    if(data){
      return data.map((element, i) => {
        const background = { backgroundColor: '#f0f0f0' };

        if(element.value){
          return (
            <View key={element.key}>
              <View style={ listItemStyle }>
                <Text style={ listItemTextStyle }> { element.key } </Text>
              </View>
              <View style={[ listItemStyle, background]}>
                <Text style={ listItemTextStyle }> { element.value } </Text>
              </View>
            </View>);
        }
      });
    }
  }

  render(){
    return (
      <View style={styles.listStyle}>
        { this.renderList() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listStyle: {
    width: '100%',
  },
  listItemStyle: {
    width: '100%',
    padding: 12,
  },
  listItemTextStyle: {
    fontSize: 18,
  }
});

export default DetailList;
