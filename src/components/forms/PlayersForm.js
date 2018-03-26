import React from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Field, reduxForm } from 'redux-form';

import { PopupButton, TextField, Label, NarrowContainer } from '../common';

class PlayersForm extends React.Component {
  render() {
    const { onSubmit, submitButtonColour } = this.props;
    const { 
      handleSubmit, 
      submitting 
    } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <NarrowContainer>
            <Label>Player Name:</Label>
            <Field name="name" component={TextField} type="text"/>

            <Label>Player Position:</Label>
            <Field name="position" component={TextField} type="text"/>
          </NarrowContainer>
        </ScrollView>
        
        <PopupButton
          label='Save Player'
          icon='check'
          noAnim={ true }
          onPress={handleSubmit(onSubmit)}
          buttonStyle={{ backgroundColor: submitButtonColour }}
        />
      </View>
    );
  }
}

export default reduxForm({ form: 'AddPlayer' })(PlayersForm);

