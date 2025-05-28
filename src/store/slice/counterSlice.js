import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  product: [],
  wishlist: []  // ✅ Match with 'product' used in CartSidebar
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    addProduct: (state, action) => {
      const existingProduct = state.product.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.product.push({ ...action.payload, quantity: 1 });
      }

      state.value += 1;
    },

    removeProduct: (state, action) => {
      const removedItem = state.product.find((p) => p.id === action.payload.id);
      if (removedItem) {
        state.value -= removedItem.quantity;
      }
      state.product = state.product.filter(p => p.id !== action.payload.id);
    },

    incrementQuantity: (state, action) => {
      const product = state.product.find(p => p.id === action.payload.id);
      if (product) {
        product.quantity += 1;
        state.value += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const product = state.product.find(p => p.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.value -= 1;
      }
    },

    addToWishlist: (state, action) => {
  const exists = state.wishlist.find(item => item.id === action.payload.id);
  if (!exists) {
    state.wishlist.push(action.payload);
  }
},

removeFromWishlist: (state, action) => {
  state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);
},

  }
});

export const {
  increment,
  decrement,
  addProduct,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
  addToWishlist,
  removeFromWishlist
  
} = counterSlice.actions;

export default counterSlice.reducer;
