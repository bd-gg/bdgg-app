import {combineReducers} from 'redux';

import authentication from '~/reducers/authentication.reducer.js';

export default combineReducers({authentication: authentication});
