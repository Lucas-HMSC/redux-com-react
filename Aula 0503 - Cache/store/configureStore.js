import { combineReducers, configureStore } from '@reduxjs/toolkit';
import photos from './photos';

const reducer = combineReducers({ photos });
const store = configureStore({ reducer });

export default store;