import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FavoriteState {
  value: number;
  pokemos: any[];
  showFavorites: {[id: number]: boolean};
  BooleanFavorite: boolean;
}

const initialState: FavoriteState = {
  value: 0,
  pokemos: [],
  showFavorites: {},
  BooleanFavorite: false,
};

interface Pokemon {
  id: string;
  name: string;
  picture: string;
}

const favoriteSlices = createSlice({
  name: 'favorite',
  initialState: initialState,
  reducers: {
    addandVerifyPokemon: (state, action: PayloadAction<Pokemon>) => {
      const pokemon = action.payload;
      const existingPokemon = state.pokemos.find(
        poke => poke.id === pokemon.id,
      );

      if (existingPokemon) {
        state.pokemos = state.pokemos.filter(p => p.id !== pokemon.id);
      } else {
        state.pokemos.push(pokemon);
      }
    },

    toggleShowFavoritesById: (state, action: PayloadAction<number>) => {
      const pokemonId = action.payload;
      state.showFavorites[pokemonId] = !state.showFavorites[pokemonId];
    },
  },
});

export const {addandVerifyPokemon, toggleShowFavoritesById} =
  favoriteSlices.actions;

export default favoriteSlices.reducer;
