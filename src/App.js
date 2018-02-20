import React from 'react';
import { StatusBar } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import Router from './Router';

class App extends React.Component {
  componentWillMount () {
    StatusBar.setBarStyle('light-content', true);
  }

  render(){
    const store = createStore(reducers, {});

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
