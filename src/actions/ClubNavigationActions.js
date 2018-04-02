import {
  CLUB_TAB_ACTIVE,
} from './types';

export const activateTab = (id) => {
  return {
    type: CLUB_TAB_ACTIVE,
    payload: id,
  };
};
