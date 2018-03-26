import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import S from 'string';

import ClubHeader from '../components/ClubHeader';
import DetailList from '../components/DetailList';

class ClubInfo extends React.Component {
  render() {
    const clubData = Object.entries(this.props.club).map((element) => {
      if(!(element[0] == 'id' || 
      element[0] == 'colour' || 
      element[0] == 'emblem' || 
      element[0] == 'banner' || 
      element[0] == 'updated_at')){
        return { key : `${S(element[0]).capitalize().s}:`, value : element[1] };
      }
      
      return null;
    });
    
    return (
      <View>
        <ClubHeader />
        <ScrollView style={{ backgroundColor: 'white' }}>
          <DetailList data={ clubData } />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const club = state.selectedClub;

  return { club };
};


export default connect(mapStateToProps, null)(ClubInfo);
