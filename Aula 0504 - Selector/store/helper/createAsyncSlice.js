import { createSlice } from "@reduxjs/toolkit";

/**
 * Cria um slice com uma função assíncrona
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */

const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      lastUpdate: 0,
      cache: 5000,
      ...config.initialState
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchError(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      updateTime(state, action) {
        state.lastUpdate = action.payload;
      },
      ...config.reducers,
    }
  });

  const { fetchStarted, fetchSuccess, fetchError, updateTime } = slice.actions;

  const asyncAction = (payload) => async (dispatch, getState) => {
    const { lastUpdate, cache } = getState()[slice.name];
    
    if (lastUpdate > Date.now() - cache) return;

    try {
      dispatch(fetchStarted());
      const { url, options } = config.fetchConfig(payload);
      const response = await fetch(url, options);
      const data = await response.json();
      dispatch(updateTime(Date.now()));
      return dispatch(fetchSuccess(data));
    } catch(error) {
      return dispatch(fetchError(error.message));
    }
  };

  return {
    ...slice,
    asyncAction
  };
}

export default createAsyncSlice;