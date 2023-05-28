import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./slices/contactSlice";
import NavReducer from "./slices/navSlice";

// Root store for redux
export const store = configureStore({
  reducer: {
    contact: ContactReducer,
    nav: NavReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
