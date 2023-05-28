import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface NavState {
  sidebarVisible: boolean;
}

// Define the initial state using that type
const initialState: NavState = {
  sidebarVisible: false,
};

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

export const { toggleSidebar, hideSidebar } = navSlice.actions;

export default navSlice.reducer;
