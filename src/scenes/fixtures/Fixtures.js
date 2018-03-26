import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'react-native-axios';
import { Actions } from 'react-native-router-flux';
import Config from 'react-native-config';

import { PopupButton } from '../../components/common';

import FixtureItem from '../../components/FixtureItem';
import ClubHeader from '../../components/ClubHeader';

class ClubFixtures extends React.Component {
  state = { fixtures: null };
  
  componentDidMount() {
    const { id } = this.props.club;
    
    axios.get(`${Config.API_URL}/clubs/${id}/fixtures`).then((response) => {
      this.setState({ fixtures : response.data.fixtures });
    }).catch(console.log);
  }
  
  renderFixtures(){
    const { fixtures } = this.state;
    
    if(fixtures){
      return fixtures.map((fixture) => {
        return (
          <FixtureItem key={fixture.id} fixture={fixture} club={this.props.club} />
        );
      });
    }
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ClubHeader />
        <ScrollView>
          { this.renderFixtures() }
        </ScrollView>
        <PopupButton 
          label='Add Fixture'
          icon='plus'
          noAnim={ true }
          onPress={ () => Actions.AddFixture() }
          buttonStyle={{ backgroundColor: this.props.club.colour }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const club = state.selectedClub;

  return { club };
};


export default connect(mapStateToProps, null)(ClubFixtures);
