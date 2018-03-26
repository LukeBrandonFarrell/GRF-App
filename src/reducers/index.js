import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UserReducer from './UserReducer';

import ClubActiveTabReducer from './ClubActiveTabReducer';
import SelectedClubReducer from './SelectedClubReducer';

export default combineReducers({
  user: UserReducer,
  selectedClub: SelectedClubReducer,
  clubActiveTab: ClubActiveTabReducer,
  form: formReducer,
});
