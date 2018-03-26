import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'react-native-axios';
import Config from 'react-native-config';
import { Actions } from 'react-native-router-flux';

import ClubHeader from '../../components/ClubHeader';
import AddFixtureForm from '../../components/forms/AddFixtureForm';

class AddFixtures extends React.Component {
  render() {
    const submitFixture = (values) => {
      const { id } = this.props.club;

      axios.post(`${Config.API_URL}/clubs/${id}/fixtures`, {
        opposition: values.opposition,
        address: values.address,
        datetime: values.datetime,
        type: values.homeaway,
      }).then((response) => {
        Actions.fixtures();
      }).catch(console.log);
    };

    return (
      <View style={{ flex: 1 }}>
        <ClubHeader />
        <AddFixtureForm 
          onSubmit={submitFixture}
          submitButtonColour={this.props.club.colour} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const club = state.selectedClub;

  return { club };
};


export default connect(mapStateToProps, null)(AddFixtures);
