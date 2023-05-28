import { createSlice } from "@reduxjs/toolkit";

interface NavState {
  sidebarVisible: boolean;
}

// Initial state
const initialState: NavState = {
  sidebarVisible: false,
};

/**
 * Creates nav slice using redux toolkit
 */
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
    },
    hideSidebar: (state) => {
      state.sidebarVisible = false;
    },
  },
});

/**
 * Redux actions for nav slice
 */
export const { toggleSidebar, hideSidebar } = navSlice.actions;

/**
 * Redux reducer for nav slice
 */
export default navSlice.reducer;
