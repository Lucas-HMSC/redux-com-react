import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import photo from './photo';

const middleware = [...getDefaultMiddleware()];
const reducer = combineReducers({ photo });
const store = configureStore({ reducer, middleware });

export default store;
