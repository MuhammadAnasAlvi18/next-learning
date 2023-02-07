import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './reducers/counterSlice';
import contactSlice from './reducers/contactSlice';

export const store = configureStore({
  reducer: {
    counter : counterSlice,
    contact : contactSlice,
  },
});