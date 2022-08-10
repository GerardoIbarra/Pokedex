import { useEffect, useRef, useState } from "react";
import { PokemonApi } from '../api/PokemonApi';
import { PokemonPaginatedRespons, SimplePokemon, Result } from '../interface/PokemonInterface';

export const usePokemonPaginated = () => {
  
    const [isLoading,setisLoading] = useState(true);
    const [simplePokemonList,setSimplePokemonList] = useState<SimplePokemon[]>([]);
    const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

    const loadPokemons = async() =>{
        setisLoading(true);
        const resp = await PokemonApi.get<PokemonPaginatedRespons>(nextPageUrl.current);
        nextPageUrl.current = resp.data.next;
        mapPokemonList(resp.data.results);
    }

    const mapPokemonList = (pokemonList : Result[])=>{
        const newPokemonList: SimplePokemon[] = pokemonList.map(({name,url}) =>{
            const urlPart = url.split('/');
            const id = urlPart[urlPart.length -2];

            const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
        
            return{id,picture,name }
        });
        setSimplePokemonList([ ...simplePokemonList, ...newPokemonList]);
        setisLoading(false);
    }

    useEffect(()=>{
        loadPokemons();   
    },[]);    

    return{
        isLoading,
        simplePokemonList,
        loadPokemons
    }

}
