import datas from '../../data';

const { createSlice } = require("@reduxjs/toolkit");

const { reducer, actions } = createSlice({
  name: 'product',
  initialState: {
    items: datas,
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload)
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter(b => b.id !== action.payload)
    },
    publishProduct: (state, action) => {
      const product = state.items.find(b => b.id === action.payload)
      if (product) {
        product.publish = !product.publish
      }
    }
  }
})

export const selectProducts = state => state.product.items;
export const selectPublishProducts = state => state.product.items.filter(i => i.publish);

export const { addProduct, removeProduct, receiveProduct, publishProduct } = actions
export default reducer
