import React from 'react';
import { View, StyleSheet } from 'react-native';

import { activateTab } from '../actions';
import { connect } from 'react-redux';

import {
  Segment,
  SegmentTab
} from './common';

class ClubNavigation extends React.Component {
  onTabIcon(id){
    this.props.activateTab(id);
  }

  render(){
    return (
      <View style={ styles.navigationContainerStyle }>
        <Segment>
          <SegmentTab
            id='fixtures'
            icon='calendar'
            highlightColor='white'
            iconSize={24}
            onPress={() => this.onTabIcon('fixtures')}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab
            id='info'
            icon='info-circle'
            highlightColor='white'
            iconSize={24}
            onPress={() => this.onTabIcon('info')}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab
            id='team'
            icon='users'
            highlightColor='white'
            iconSize={24}
            onPress={() => this.onTabIcon('team')}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab
            id='report'
            icon='exclamation-triangle'
            highlightColor='white'
            iconSize={24}
            onPress={() => this.onTabIcon('report')}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
        </Segment>

        <Segment>
          <SegmentTab
            id='chat'
            icon='globe'
            highlightColor='white'
            iconSize={24}
            onPress={() => this.onTabIcon('chat')}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab
            id='match'
            icon='comments'
            highlightColor='white'
            iconSize={24}
            onPress={() => this.onTabIcon('match')}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab
            id='requests'
            icon='bell'
            highlightColor='white'
            iconSize={24}
            onPress={() => this.onTabIcon('requests')}
            selected={this.props.selected}
            backgroundColor={this.props.club.colour} />
          <SegmentTab />
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
