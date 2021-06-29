import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'date',
  initialState: {
    partida: '',
    retorno: ''
  },
  reducers: {
    adicionarDatas(state, action) {
      state.partida = action.payload.partida,
      state.retorno = action.payload.retorno
    },
  }
});

export const { adicionarDatas } = slice.actions;

export default slice.reducer;