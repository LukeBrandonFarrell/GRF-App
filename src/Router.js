import React from 'react';
import { StyleSheet } from 'react-native';
import { ActionConst, Router, Stack, Scene, Modal } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { setUser } from './actions';
import axios from 'react-native-axios';
import Config from 'react-native-config';

import Auth from './scenes/Auth';

import Account from './scenes/Account';
import News from './scenes/News';
import Clubs from './scenes/Clubs';

import Fixtures from './scenes/fixtures/Fixtures';
import AddFixture from './scenes/fixtures/AddFixture';
import ShowFixture from './scenes/fixtures/ShowFixture';

import ClubInfo from './scenes/ClubInfo';

import Players from './scenes/players/Players';
import AddPlayer from './scenes/players/AddPlayer';

import ClubReport from './scenes/ClubReport';
import ClubChat from './scenes/ClubChat';
import ClubMatch from './scenes/ClubMatch';
import ClubRequests from './scenes/ClubRequests';

import { TabIcon } from './components/common';

class RouterComponent extends React.Component {
  componentDidMount() {
    axios.get(`${Config.API_URL}/auth/me`).then((response) => {
      this.props.setUser(response.data.user);
    }).catch(console.log);
  }
  
  render(){
    return (
      <Router>
        <Stack key="root" hideNavBar>
          {/*
          <Stack key="auth" hideNavBar>
            <Scene key="register"
              component={Auth} />
          </Stack>
        */}
        
          <Stack key="core"
            tabs={true}
            showLabel={false}
            tabBarStyle={styles.tabBar}
            tabBarPosition='bottom'
            navigationBarStyle={styles.navbarStyle}
            titleStyle={styles.titleStyle}>
            
            <Scene key="account"
              component={Account}
              title="Account"
              iconName="cog"
              icon={TabIcon}/>
            
            <Scene key="news"
              component={News}
              title="News"
              iconName="rss"
              icon={TabIcon}
              initial={true}/>
              
            <Scene key="clubs"
              component={Clubs}
              title="Clubs"
              iconName="users"
              icon={TabIcon}/>
          </Stack>
        
          <Scene key="Fixtures"
            component={ Fixtures }
            type={ActionConst.RESET}/>
            
          <Scene key="AddFixture"
            component={ AddFixture }/>
              
          <Scene key="ShowFixture"
            component={ ShowFixture }/>
            
          <Scene key="Info"
            component={ ClubInfo }
            type={ActionConst.RESET}/>
            
          <Scene key="Team"
            component={ Players }
            type={ActionConst.RESET}/>
          <Scene key="AddPlayer"
            component={ AddPlayer }/>
            
          <Scene key="Report"
            component={ ClubReport }
            type={ActionConst.RESET}/>
          <Scene key="Chat"
            component={ ClubChat }
            type={ActionConst.RESET}/>
          <Scene key="Match"
            component={ ClubMatch }
            type={ActionConst.RESET}/>
          <Scene key="Requests"
            component={ ClubRequests }
            type={ActionConst.RESET}/>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navbarStyle : {
    backgroundColor: '#307633',
  },
  titleStyle : {
    color: 'white',
  },
  tabBar : {
    borderTopColor: '#adadad',
    backgroundColor: 'white',
    opacity: 0.98,
    height:55,
  },
});

export default connect(null, { setUser })(RouterComponent);
