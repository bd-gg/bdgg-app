import { combineReducers } from 'redux';

import authentication from '~/reducers/authentication.reducer.js';
import groups from '~/reducers/group.reducer.js';

export default combineReducers({ authentication: authentication, groups: groups });
