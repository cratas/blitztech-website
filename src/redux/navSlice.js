import { createSlice } from "@reduxjs/toolkit";
import { NAVIGATION } from "../constants/constants";

const initialNavState = {
  currentPage: NAVIGATION.home,
};

const navSlice = createSlice({
  name: "nav",
  initialState: initialNavState,
  reducers: {
    linkHome(state) {
      state.currentPage = NAVIGATION.home;
    },
    linkServices(state) {
      state.currentPage =  NAVIGATION.services;
    },
    linkContact(state) {
      state.currentPage = NAVIGATION.contact;
    },
    linkPhotovoltaics(state) {
      state.currentPage = NAVIGATION.photovoltaics;
    },
  },
});

export const navActions = navSlice.actions;

export default navSlice.reducer;
