import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: JSON.parse(window.localStorage.getItem("ecommerce_cart")) || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
      window.localStorage.setItem("ecommerce_cart", JSON.stringify(state.cart));
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      window.localStorage.setItem("ecommerce_cart", JSON.stringify(state.cart));
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.cart.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
        if (existingItem.quantity <= 0) {
          state.cart = state.cart.filter((item) => item.id !== id);
        }
      }
      window.localStorage.setItem("ecommerce_cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      window.localStorage.setItem("ecommerce_cart", JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
