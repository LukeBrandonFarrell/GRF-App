import { combineReducers } from 'redux';

import ClubActiveTabReducer from './ClubActiveTabReducer';

export default combineReducers({
  clubActiveTab: ClubActiveTabReducer,
});
