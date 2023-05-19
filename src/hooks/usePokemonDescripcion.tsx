import {useState, useEffect} from 'react';
import {Welcome} from '../interface/PokemonInterface';
import {PokemonApi} from '../api/PokemonApi';

export const usePokemonDescripcion = (id: string) => {
  const [isLoadingDes, setisLoadingDes] = useState(true);
  const [pokemonDes, setpokemonDes] = useState<Welcome>({} as Welcome);

  const loadPokemon = async () => {
    const resp = await PokemonApi.get<Welcome>(
      `https://pokeapi.co/api/v2/characteristic/${id}/`,
    );
    setpokemonDes(resp.data);
    setisLoadingDes(false);
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  return {
    isLoadingDes,
    pokemonDes,
  };
};
