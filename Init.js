import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducer from '~/reducers';

import App from './App';

const store = createStore(combineReducer);

function Init() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Init;
