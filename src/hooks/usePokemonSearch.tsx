import { useEffect, useRef, useState } from "react";
import { PokemonApi } from '../api/PokemonApi';
import { PokemonPaginatedRespons, SimplePokemon, Result } from '../interface/PokemonInterface';

export const usePokemonSearch = () => {
  
    const [isFetching,setisFetching] = useState(true);
    const [simplePokemonList,setSimplePokemonList] = useState<SimplePokemon[]>([]);

    const loadPokemons = async() =>{
        const resp = await PokemonApi.get<PokemonPaginatedRespons>('https://pokeapi.co/api/v2/pokemon?limit=1200');
        mapPokemonList(resp.data.results);
    }

    const mapPokemonList = (pokemonList : Result[])=>{
        const newPokemonList: SimplePokemon[] = pokemonList.map(({name,url}) =>{
            const urlPart = url.split('/');
            const id = urlPart[urlPart.length -2];

            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        
            return{id,picture,name }
        });
        setSimplePokemonList(newPokemonList);
        setisFetching(false);
    }

    useEffect(()=>{
        loadPokemons();   
    },[]);    

    return{
        isFetching,
        simplePokemonList,
        loadPokemons
    }

}
