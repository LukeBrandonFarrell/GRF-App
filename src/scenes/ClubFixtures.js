import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'react-native-axios';
import Config from 'react-native-config';

import FixtureItem from '../components/FixtureItem';
import ClubHeader from '../components/ClubHeader';

class ClubFixtures extends React.Component {
  state = { fixtures: null };
  
  componentDidMount() {
    const { id } = this.props;
    
    axios.get(`${Config.API_URL}/clubs/${id}/fixtures`).then((response) => {
      this.setState({ fixtures : response.data.fixtures });
    }).catch(console.log);
  }
  
  renderFixtures(){
    const { fixtures } = this.state;
    
    if(fixtures){
      return fixtures.map((fixture) => {
        return (
          <FixtureItem key={fixture.id} />
        );
      });
    }
  }
  
  render() {
    return (
      <View>
        <ClubHeader />
        <ScrollView>
          { this.renderFixtures() }
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { id } = state.selectedClub;
  console.log(id);
  return { id };
};


export default connect(mapStateToProps, null)(ClubFixtures);
