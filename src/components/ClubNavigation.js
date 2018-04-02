import React from 'react';
import { View, Image, StyleSheet, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import { activateTab } from '../actions';
import { connect } from 'react-redux';

import {
  Segment,
  SegmentTab
} from './common';

class ClubNavigation extends React.Component {
  onTabIcon(id, noNav = false){
    this.props.activateTab(id, noNav);
  }

  render(){
    return (
      <View style={ styles.navigationContainerStyle }>
        <Segment>
          <SegmentTab
            id='fixtures'
            icon={<Icon style={ 
              (this.props.selected == 'fixtures') ? { color: 'white' } : { color: 'black' }  
            } name='calendar' size={24}/>}
            onPress={() => {
              this.onTabIcon('fixtures');
              Actions.Fixtures();
            }}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab
            id='info'
            icon={<Icon style={ 
              (this.props.selected == 'info') ? { color: 'white' } : { color: 'black' }  
            } name='info-circle' size={24}/>}
            highlightColor='white'
            iconSize={24}
            onPress={() => {
              this.onTabIcon('info');
              Actions.Info();
            }}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab
            id='team'
            icon={<Icon style={ 
              (this.props.selected == 'team') ? { color: 'white' } : { color: 'black' }  
            } name='users' size={24}/>}
            highlightColor='white'
            onPress={() => {
              this.onTabIcon('team');
              Actions.Team();
            }}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab
            id='report'
            icon={<Icon style={ 
              (this.props.selected == 'report') ? { color: 'white' } : { color: 'black' }  
            } name='exclamation-triangle' size={24}/>}
            highlightColor='white'
            onPress={() => {
              this.onTabIcon('report');
              Actions.Report();
            }}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
        </Segment>

        <Segment>
          <SegmentTab
            id='chat'
            icon={<Icon style={ 
              (this.props.selected == 'chat') ? { color: 'white' } : { color: 'black' }  
            } name='globe' size={24}/>}
            highlightColor='white'
            onPress={() => {
              this.onTabIcon('chat');
              Actions.Chat();
            }}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab
            id='match'
            icon={<Icon style={ 
              (this.props.selected == 'match') ? { color: 'white' } : { color: 'black' }  
            } name='comments' size={24}/>}
            highlightColor='white'
            onPress={() => {
              this.onTabIcon('match');
              Actions.Match();
            }}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab
            id='requests'
            icon={<Icon style={ 
              (this.props.selected == 'requests') ? { color: 'white' } : { color: 'black' }  
            } name='bell' size={24}/>}
            highlightColor='white'
            onPress={() => {
              this.onTabIcon('requests');
              Actions.Requests();
            }}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab
            id='grf'
            icon={<Image style={{ width: 40, height: 40 }} source={require('../../resources/grf_dark.png')} />}
            highlightColor='white'
            onPress={() => {
              Linking.openURL('http://www.teamgrassroots.co.uk/');
            }}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
        </Segment>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigationContainerStyle: {
    borderBottomColor: '#f0ecec',
    borderBottomWidth: 2,
  },
});

const mapStateToProps = (state) => {
  const { selected } = state.clubActiveTab;
  const club = state.selectedClub;

  return { selected, club };
};

export default connect(mapStateToProps, { activateTab })(ClubNavigation);
