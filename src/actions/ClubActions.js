import {
  CLUB_SELECTED,
} from './types';

export const selectClub = (club) => {
  return {
    type: CLUB_SELECTED,
    payload: club,
  };
};
