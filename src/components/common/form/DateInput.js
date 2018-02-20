import React from 'react';
import { View, StyleSheet, Keyboard } from 'react-native';
import { TextField } from './TextField';

class DateInput extends React.Component {
  formatDateString(text){
    const deleting = (text < this.props.value) ? true : false;

    if(!deleting){
      switch (text.length) {
        case 2:
        case 7:
          text = text + ' / ';
          break;
        case 15:
          Keyboard.dismiss();
          return;
        default:
      }
    }else{
      switch (text.length) {
        case 4:
        case 9:
          text = text.substring(0, text.length - 3);
          break;
        default:
      }
    }

    this.props.onChangeText(text);
  }

  render() {
    const { value } = this.props;

    return (
      <TextField label="dd / mm / yyyy"
        value={ value }
        onChangeText={ this.formatDateString.bind(this) }
        keyboardType='numeric' />
    );
  }
}

export { DateInput };
