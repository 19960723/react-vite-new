import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import userNameReducer from "./features/userNameSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    user: userNameReducer,
  },
});
