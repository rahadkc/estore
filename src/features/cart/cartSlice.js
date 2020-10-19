import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    incrementCartQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload
      );
      const incrementedItem = {
        ...state.items[itemIndex]
      };

      incrementedItem.quantity++;

      state.items[itemIndex] = incrementedItem;

    },
    decrementCartQuantity: (state, action) => {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload
      );

      const decrementedItem = {
        ...state.items[itemIndex]
      };

      decrementedItem.quantity--;

      state.items[itemIndex] = decrementedItem;
    },
    addProductToCart: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);

      if (itemIndex < 0) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...state.items[itemIndex]
        };

        updatedItem.quantity++;
        state.items[itemIndex] = updatedItem;
      }
    },
    removeProductFromCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        item => item.id === action.payload
      );

      state.items.splice(itemIndex, 1);
    },
  },
});

export const inCartItems = state => state.cart.items.length

export const { incrementCartQuantity, decrementCartQuantity, addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
