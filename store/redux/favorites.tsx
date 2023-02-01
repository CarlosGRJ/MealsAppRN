import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Action } from './types';

export interface IdsFavoriteMeals {
  ids: string[];
}

const initialState: IdsFavoriteMeals = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state: IdsFavoriteMeals, action: PayloadAction<Action>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state: IdsFavoriteMeals, action: PayloadAction<Action>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;
export default favoritesSlice.reducer;
