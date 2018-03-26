import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'react-native-axios';
import { Actions } from 'react-native-router-flux';
import Config from 'react-native-config';

import { PopupButton, Title } from '../../components/common';

import PlayerItem from '../../components/PlayerItem';
import ClubHeader from '../../components/ClubHeader';

class Players extends React.Component {
  state = { players: null };
  
  componentDidMount() {
    const { id } = this.props.club;
    
    axios.get(`${Config.API_URL}/clubs/${id}/players`).then((response) => {
      this.setState({ players : response.data.players });
    }).catch(console.log);
  }
  
  renderPlayers(){
    const { players } = this.state;
    
    if(players){
      const active = players.filter((player) => { return (player.list == 'active'); })
        .map((player) => <PlayerItem key={player.id} player={player} club={this.props.club} />);
      
      const substitutions = players.filter((player) => { return (player.list == 'substitutions'); })
        .map((player) => <PlayerItem key={player.id} player={player} club={this.props.club} />);
      
      const archived = players.filter((player) => { return (player.list == 'archived'); })
        .map((player) => <PlayerItem key={player.id} player={player} club={this.props.club} />);
    
      return (
        <View>
          <Title label='Active' />
          { active }
          <Title label='Subtitutions' />
          { substitutions }
          <Title label='Archived' />
          { archived }
        </View>
      );
    }
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ClubHeader />
        <ScrollView>
          { this.renderPlayers() }
        </ScrollView>
        <PopupButton 
          label='Add Player'
          icon='plus'
          noAnim={ true }
          onPress={ () => Actions.AddPlayer() }
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

export default connect(mapStateToProps, null)(Players);
