import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ContactState {
  contacts: IContact[];
}

// Define the initial state using that type
const initialState: ContactState = {
  contacts: [],
};

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

export const { addContact, updateContact, deleteContact } =
  contactSlice.actions;

export default contactSlice.reducer;
