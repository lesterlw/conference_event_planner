// store.js
import { configureStore } from '@reduxjs/toolkit';
import venueReducer from './venueSlice';
import mealsReducer from './mealsSlice';

export default configureStore({
  reducer: {
    venue: venueReducer,
    av: avReducer,
    meals: mealsReducer
  },
});
