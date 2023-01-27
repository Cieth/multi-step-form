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
  activeAddons: [false, false, false],
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
    setActiveAddons: (state, action: PayloadAction<Array<boolean>>) => {
      state.activeAddons = action.payload;
    },
    setOnlineAddons: (state, action: PayloadAction<string>) => {
      if (action.payload === 'online') {
        state.activeAddons[0] = true;
      }
      if (action.payload === 'larger') {
        state.activeAddons[1] = true;
      }
      if (action.payload === 'customizable') {
        state.activeAddons[2] = true;
      }
    },
    deleteOnlineAddons: (state, action: PayloadAction<string>) => {
      if (action.payload === 'online') {
        state.activeAddons[0] = false;
      }
      if (action.payload === 'larger') {
        state.activeAddons[1] = false;
      }
      if (action.payload === 'customizable') {
        state.activeAddons[2] = false;
      }
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
  setOnlineAddons,
  deleteOnlineAddons,
} = userSlice.actions;
export default userSlice.reducer;
