import { configureStore } from '@reduxjs/toolkit';

import favoritesReducer from './favorites';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store