import React from 'react';
import { ScrollView } from 'react-native';
import { selectClub } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import axios from 'react-native-axios';
import Config from 'react-native-config';

import ClubItem from '../components/ClubItem';

class Clubs extends React.Component {
  state = { clubs: null };
  
  componentDidMount() {
    axios.get(`${Config.API_URL}/clubs`).then((response) => {
      this.setState({ clubs : response.data.clubs });
    }).catch(console.log);
  }
  
  openClub(club){
    this.props.selectClub(club);
    Actions.fixtures();
  }
  
  renderItems(){
    const { clubs } = this.state;
    
    if(clubs){
      return clubs.map((club) => {
        return (
          <ClubItem 
            key={club.id}
            icon='trophy' 
            label={club.name} 
            onPress={ () => this.openClub(club) } />
        );
      });
    }
  }
  
  render() {
    return (
      <ScrollView>
        { this.renderItems() }
      </ScrollView>
    );
  }
}

export default connect(null, { selectClub })(Clubs);
