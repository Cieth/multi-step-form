import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialStateI } from '../../interfaces/InitialState';

const initialState = {
  name: '',
  email: '',
  number: '',
  plan: '',
  yearly: false,
  addon: {
    online: false,
    larger: false,
    customizable: false,
  },
  page: 1,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState as initialStateI,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setNumber: (state, action: PayloadAction<string>) => {
      state.number = action.payload;
    },
    setPlan: (state, action: PayloadAction<string>) => {
      state.plan = action.payload;
    },
    setYearly: (state, action: PayloadAction<boolean>) => {
      state.yearly = action.payload;
    },
    setAddon: (state, action: PayloadAction<{}>) => {
      state.addon = { ...state.addon, ...action.payload };
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const {
  setName,
  setEmail,
  setNumber,
  setPlan,
  setYearly,
  setAddon,
  setPage,
} = userSlice.actions;
export default userSlice.reducer;
