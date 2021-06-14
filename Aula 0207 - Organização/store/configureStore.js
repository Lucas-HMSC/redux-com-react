import contador from './contador.js';

const reducer = Redux.combineReducers({ contador });

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;