import {
  USER_FETCHED,
} from './types';

export const setUser = (user) => {
  return {
    type: USER_FETCHED,
    payload: user,
  };
};
