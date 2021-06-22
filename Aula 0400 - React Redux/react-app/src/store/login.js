import { combineReducers } from '@reduxjs/toolkit';
import createAsyncSlice from './helper/createAsyncSlice';

const token = createAsyncSlice({
  name: 'token',
  fetchConfig: (user) => ({
    url: 'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user)
    }
  })
});

const user = createAsyncSlice({
  name: 'user',
  fetchConfig: (token) => ({
    url: 'https://dogsapi.origamid.dev/json/api/user',
    options: {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  })
});

const reducer = combineReducers({
  token: token.reducer,
  user: user.reducer
});

const fetchToken = token.asyncAction;
const fetchUser = user.asyncAction;

export default reducer;

export const login = (user) => async (dispatch) => {
  try {
    const { payload } = await dispatch(fetchToken(user));
    if (payload.token !== undefined) await dispatch(fetchUser(payload.token));
  } catch {}
}