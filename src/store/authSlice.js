import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(window.localStorage.getItem("ecommerce_user")) || null,
};

const authSlice = createSlice({
  // name of the slice
  name: "auth",
  // initial state of the slice
  initialState,
  reducers: {
    //login
    login: (state, action) => {
      state.user = action.payload;
      window.localStorage.setItem(
        "ecommerce_user",
        JSON.stringify(action.payload),
      );
    },

    //logout
    logout: (state) => {
      state.user = null;
      window.localStorage.removeItem("ecommerce_user");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
