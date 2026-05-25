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
      //create dummy data for user
      const dummyUser = {
        name: action.payload,
        avatar: `https://i.pravatar.cc/150?u=${action.payload}`,
        address: "123 Main St, Anytown, USA",
      };
      state.user = dummyUser;
      window.localStorage.setItem("ecommerce_user", JSON.stringify(dummyUser));
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
