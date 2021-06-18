import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: 'name',
  initialState: false,
  reducers: {
    abrir: () => true,
    fechar: () => false,
  }
});

export const { abrir, fechar } = slice.actions;
export default slice.reducer;