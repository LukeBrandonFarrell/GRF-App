import {
  CLUB_SELECTED,
} from './types';

export const selectClub = (id) => {
  return {
    type: CLUB_SELECTED,
    payload: id,
  };
};
