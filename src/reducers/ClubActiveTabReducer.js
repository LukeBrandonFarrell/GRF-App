import {
  CLUB_TAB_ACTIVE,
} from '../actions/types';

const INITIAL_STATE = {
  selected: 'fixtures',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CLUB_TAB_ACTIVE:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};
