import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export { store };
export * from "./thunk/fetchUser";
export * from "./thunk/handleToken";
export * from "./thunk/sendEmails";
