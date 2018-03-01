import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import CircleImage from '../components/CircleImage';
import DetailList from '../components/DetailList';

class Account extends React.Component {
  render() {
    const { email, display_name, image_source } = this.props;
    
    const profileData = [
      { key : 'Email:', value : email },
      { key : 'Display Name:', value : display_name },
    ];
    
    const circleImage = image_source ? require('../../resources/football.png') : require('../../resources/football.png');
    
    return (
      <View style={ styles.containerStyle }>
        <CircleImage image={ circleImage } />
        <DetailList data={ profileData } />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { id, email, display_name, image_source } = state.user;
  
  return { id, email, display_name, image_source };
};

const styles = StyleSheet.create({
  containerStyle : {
    flex: 1,
    alignItems: 'center', 
    paddingTop: 30, 
    backgroundColor: 'white'
  }
});

export default connect(mapStateToProps, null)(Account);
