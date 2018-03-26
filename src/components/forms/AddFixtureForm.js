import React from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { Field, reduxForm } from 'redux-form';

import { PopupButton, TextField, Label, NarrowContainer } from '../common';

class AddFixturesForm extends React.Component {
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
            <Label>Opposition Team:</Label>
            <Field name="opposition" component={TextField} type="text"/>

            <Label>Match Address:</Label>
            <Field name="address" component={TextField} type="text"/>

            <Label>Date and Time:</Label>
            <Field name="datetime" component={TextField} type="text"/>

            <Label>Home / Away:</Label>
            <Field name="homeaway" component={TextField} type="text"/>
          </NarrowContainer>
        </ScrollView>

        <PopupButton
          label='Save Fixture'
          icon='check'
          noAnim={ true }
          onPress={handleSubmit(onSubmit)}
          buttonStyle={{ backgroundColor: submitButtonColour }}
        />
      </View>
    );
  }
}

export default reduxForm({ form: 'AddFixture' })(AddFixturesForm);