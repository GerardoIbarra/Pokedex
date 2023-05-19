import {configureStore} from '@reduxjs/toolkit';
import FavoriteReducer from './slicers/FavoriteSlices';

export const store = configureStore({
  reducer: {
    favorite: FavoriteReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
