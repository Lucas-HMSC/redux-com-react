import { createSlice } from '@reduxjs/toolkit';
import data from '../data';

const slice = createSlice({
  name: 'products',
  initialState: {
    data
  },
  reducers: {}, 
});

export default slice.reducer;