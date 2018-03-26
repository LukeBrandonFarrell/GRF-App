import {
  CLUB_SELECTED,
} from '../actions/types';

const INITIAL_STATE = {
  id: null,
  name: null,
  league: null,
  colour: null,
  county: null,
  country: null,
  emblem: null,
  banner: null,
  matches: null,
  wins: null,
  losses: null
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case CLUB_SELECTED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
