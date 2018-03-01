import { combineReducers } from 'redux';

import UserReducer from './UserReducer';

import ClubActiveTabReducer from './ClubActiveTabReducer';
import SelectedClubReducer from './SelectedClubReducer';

export default combineReducers({
  user: UserReducer,
  selectedClub: SelectedClubReducer,
  clubActiveTab: ClubActiveTabReducer,
});
