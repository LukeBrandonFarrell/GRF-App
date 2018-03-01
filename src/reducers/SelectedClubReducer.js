import {
  CLUB_SELECTED,
} from '../actions/types';

const INITIAL_STATE = {
  id: null,
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CLUB_SELECTED:
      return { ...state, id: action.payload };
    default:
      return state;
  }
};
