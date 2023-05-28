import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ContactState {
  contacts: IContact[];
}

// Initial state
const initialState: ContactState = {
  contacts: [],
};

/**
 * Creates contact slice using redux toolkit
 */
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (
      state,
      action: PayloadAction<{
        firstName: string;
        lastName: string;
        status: string;
      }>
    ) => {
      const contact: IContact = {
        id: state.contacts.length + 1,
        ...action.payload,
      };
      state.contacts = [...state.contacts, contact];
    },
    updateContact: (
      state,
      action: PayloadAction<{
        id: number;
        firstName: string;
        lastName: string;
        status: string;
      }>
    ) => {
      const data = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        status: action.payload.status,
      };
      state.contacts = state.contacts.map((elem) =>
        elem.id === action.payload.id ? Object.assign({}, elem, data) : elem
      );
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (elem) => elem.id !== action.payload
      );
    },
  },
});

/**
 * Redux actions for contact slice
 */
export const { addContact, updateContact, deleteContact } =
  contactSlice.actions;

/**
 * Redux reducer for contact slice
 */
export default contactSlice.reducer;
