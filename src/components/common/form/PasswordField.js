import React from 'react';
import { View, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import { TextField } from './TextField';
import Icon from 'react-native-vector-icons/FontAwesome';

class PasswordField extends React.Component {
  state = { hidden: true }

  showHide(){
    this.setState({ hidden: !this.state.hidden, });
    Keyboard.dismiss();
  }

  render() {
    const { value, onChangeText } = this.props;

    return (
      <View>
        <TextField label="Password"
          value={ value }
          onChangeText={ onChangeText }
          secureTextEntry={ this.state.hidden } />

        <TouchableOpacity style={ styles.switchButton } onPress={ this.showHide.bind(this) }>
          <Icon color='#2f2f2f' name={this.state.hidden ? 'eye' : 'eye-slash'} size={24} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  switchButton : {
    position: 'absolute',
    right: 15,
    top: 20,
    backgroundColor:'transparent',
  }
});

export { PasswordField };
