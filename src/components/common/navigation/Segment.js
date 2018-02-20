import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

class Segment extends React.Component {
  renderScrollView(children){
    const { scroll } = this.props;

    if(scroll){
      return (
        <ScrollView
          horizontal={true}
          bounces={true}
          showsHorizontalScrollIndicator={false}>
          {children}
        </ScrollView>);
    }

    return children;
  }

  render(){
    const { children, scroll } = this.props;
    const { segmentStyle } = styles;

    return (
      <View style={segmentStyle}>
        { this.renderScrollView(this.props.children) }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  segmentStyle : {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});

export { Segment };
