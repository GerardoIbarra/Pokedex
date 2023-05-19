import {useState, useEffect} from 'react';
import {DataPokemon} from '../interface/PokemonInterface';
import {PokemonApi} from '../api/PokemonApi';

export const usePokemon = (id: string) => {
  const [isLoading, setisLoading] = useState(true);
  const [pokemon, setpokemon] = useState<DataPokemon>({} as DataPokemon);

  const loadPokemon = async () => {
    const resp = await PokemonApi.get<DataPokemon>(
      `https://pokeapi.co/api/v2/pokemon/${id}`,
    );
    setpokemon(resp.data);
    setisLoading(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoading,
    pokemon,
  };
};
