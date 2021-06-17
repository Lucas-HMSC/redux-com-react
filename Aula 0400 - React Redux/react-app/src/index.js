import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function reducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    default: 
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
