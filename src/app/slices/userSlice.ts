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
  activePlan: 4,
  activeAddons: [0, 0, 0],
  totalPlan: 0,
  totalAddon: 0,
  finalBill: 0,
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
    setActivePlan: (state, action: PayloadAction<number>) => {
      state.activePlan = action.payload;
    },
    setActiveAddons: (state, action: PayloadAction<number>) => {
      state.activePlan = action.payload;
    },
    setTotalPlan: (state, action: PayloadAction<number>) => {
      state.totalPlan = action.payload;
    },
    setTotalAddon: (state, action: PayloadAction<number>) => {
      state.totalAddon = action.payload;
    },
    setFinalBill: (state, action: PayloadAction<number>) => {
      state.finalBill = action.payload;
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
  setActivePlan,
  setActiveAddons,
  setTotalPlan,
  setFinalBill,
  setTotalAddon,
} = userSlice.actions;
export default userSlice.reducer;
