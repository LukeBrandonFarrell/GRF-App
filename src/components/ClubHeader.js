import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import ClubNavigation from './ClubNavigation';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const ClubHeader = (props) => {
  return (
    <View>
      <View style={ styles.bannerContainerStyle }>
        <TouchableOpacity 
          style={ styles.closeButtonStyle } 
          onPress={ () => Actions.clubs() }>
          <Icon 
            name={'times-circle'} 
            size={35}
            color={'#383838'}/>
        </TouchableOpacity>
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
    height: 140,
    backgroundColor: '#CCC',
  },
  iconContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonStyle: {
    paddingTop: 24,
    paddingRight: 12,
    alignItems: 'flex-end',
  }
});

export default ClubHeader;
