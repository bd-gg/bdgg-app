import { combineReducers } from 'redux';

import authentication from '~/reducers/authentication.reducer.js';
import group from '~/reducers/group.reducer.js';

export default combineReducers({
  authentication: authentication,
  group: group,
});
