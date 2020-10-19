import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import cartReducer from '../features/cart/cartSlice';
import productReducer from '../features/products/productSlice';

export default combineReducers({
  product: productReducer,
  cart: cartReducer,
  auth: authReducer
})