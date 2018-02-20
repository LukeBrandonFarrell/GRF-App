import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const CartIcon = (props) => {
  return (
    <TouchableOpacity style={ styles.cartContainer } onPress={() => Actions.Cart()}>
      <Icon style={{color: 'white'}} name={'shopping-cart'} size={22}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cartContainer : {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 12,
  }
});

export { CartIcon };
