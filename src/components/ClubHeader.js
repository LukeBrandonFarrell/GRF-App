import React from 'react';
import { View, StyleSheet } from 'react-native';
import ClubNavigation from './ClubNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';

const ClubHeader = (props) => {
  return (
    <View>
      <View style={ styles.bannerContainerStyle }>
        <View style={ styles.iconContainerStyle }>
          <Icon name={'trophy'} size={80}/>
        </View>
      </View>
      <ClubNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainerStyle : {
    width: '100%',
    height: 120,
    backgroundColor: '#CCC',
  },
  iconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  }
});

export default ClubHeader;
