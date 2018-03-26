import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import axios from 'react-native-axios';
import { Actions } from 'react-native-router-flux';
import Config from 'react-native-config';

import { Title } from '../components/common';

import MemberItem from '../components/MemberItem';
import ClubHeader from '../components/ClubHeader';

class ClubRequests extends React.Component {
  state = { members: null };
  
  componentDidMount() {
    const { id } = this.props.club;
    
    axios.get(`${Config.API_URL}/clubs/${id}/members`).then((response) => {
      this.setState({ members : response.data.members });
    }).catch(console.log);
  }
  
  renderRequests(){
    const { members } = this.state;
    
    if(members){
      const accepted = members.filter((member) => { return (member.status == 'accepted'); })
        .map((member) => <MemberItem key={member.id} member={member} club={this.props.club} />);
      
      const requests = members.filter((member) => { return (member.status == 'requested'); })
        .map((member) => <MemberItem key={member.id} member={member} club={this.props.club} />);
      
      return (
        <ScrollView>
          <Title label='Active' />
          { accepted }
          <Title label='Requests' />
          { requests }
        </ScrollView>
      );
    }
  }
  
  render() {
    return (
      <View>
        <ClubHeader />
        { this.renderRequests() }
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const club = state.selectedClub;

  return { club };
};

export default connect(mapStateToProps, null)(ClubRequests);
