import { USER_GET } from '../Api';
import createAsyncSlice from "./helper/createAsyncSlice";
import { fetchToken } from './token';

const slice = createAsyncSlice({
  name: 'user',
  fetchConfig: (token) => USER_GET(token)
});

export const fetchUser = slice.asyncAction;

export const userLogin = (user) => async (dispatch) => {
  const { payload } = await dispatch(fetchToken(user));
  if (payload.token) await dispatch(fetchUser(payload.token));
}

export default slice.reducer;