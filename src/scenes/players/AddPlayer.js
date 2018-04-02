import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'react-native-axios';
import Config from 'react-native-config';
import { Actions } from 'react-native-router-flux';

import ClubHeader from '../../components/ClubHeader';
import PlayersForm from '../../components/forms/PlayersForm';

class AddPlayer extends React.Component {
  render() {
    const submitFixture = (values) => {
      const { id } = this.props.club;

      axios.post(`${Config.API_URL}/clubs/${id}/players`, {
        name: values.name,
        position: values.position,
        list: 'active',
        pos_x: 0,
        pos_y: 0,
      }).then((response) => {
        Actions.Team();
      }).catch(console.log);
    };

    return (
      <View style={{ flex: 1 }}>
        <ClubHeader />
        <PlayersForm 
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


export default connect(mapStateToProps, null)(AddPlayer);
