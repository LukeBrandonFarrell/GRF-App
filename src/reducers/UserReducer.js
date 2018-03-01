import {
  USER_FETCHED,
} from '../actions/types';

const INITIAL_STATE = {
  token: null,
  id: null,
  email: null,
  display_name: null,
  image_source: null,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case USER_FETCHED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
