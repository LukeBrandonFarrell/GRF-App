import {
  CLUB_TAB_ACTIVE,
  CLUB_SELECTED
} from '../actions/types';

const INITIAL_STATE = {
  selected: 'fixtures',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CLUB_TAB_ACTIVE:
      return { ...state, selected: action.payload };
    case CLUB_SELECTED:
      return { ...state, ...INITIAL_STATE };
    default:
      return state;
  }
};
