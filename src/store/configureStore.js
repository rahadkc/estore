import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';



const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })]
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducer', () => {
    const newRootReducer = require('./reducer').default
    store.replaceReducer(newRootReducer)
  })
}

export default store