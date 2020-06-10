import React from 'react';
import App from './App';

import rootReducer from '~/reducers';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

function Init() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Init;
