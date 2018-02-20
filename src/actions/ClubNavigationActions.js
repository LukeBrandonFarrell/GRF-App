import {
  CLUB_TAB_ACTIVE,
} from './types';

import { Actions } from 'react-native-router-flux';

export const activateTab = (id) => {
  Actions[id](); //Navigate to tab

  return {
    type: CLUB_TAB_ACTIVE,
    payload: id,
  };
};
