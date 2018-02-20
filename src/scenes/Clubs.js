import React from 'react';
import { ScrollView } from 'react-native';
import ClubItem from '../components/ClubItem';
import { Actions } from 'react-native-router-flux';

class Clubs extends React.Component {
  render() {
    return (
      <ScrollView>
        <ClubItem icon='trophy' label='Lorum Ipsum dorum' onPress={ () => Actions.fixtures() } />
        <ClubItem icon='trophy' label='Lorum Ipsum dorum' onPress={ () => Actions.fixtures() } />
        <ClubItem icon='trophy' label='Lorum Ipsum dorum' onPress={ () => Actions.fixtures() } />
      </ScrollView>
    );
  }
}

export default Clubs;
