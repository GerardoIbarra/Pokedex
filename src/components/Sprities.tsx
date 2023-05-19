import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {FadeInImage} from './FadeInImage';
import {DataPokemon} from '../interface/PokemonInterface';

interface Props {
  pokemon: DataPokemon;
}

export const Sprities = ({pokemon}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20, marginTop: 10}}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          Sprites
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <FadeInImage
            uri={pokemon.sprites.back_default}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <FadeInImage
            uri={pokemon.sprites.front_shiny}
            style={{
              width: 100,
              height: 100,
            }}
          />
          <FadeInImage
            uri={pokemon.sprites.back_shiny}
            style={{
              width: 100,
              height: 100,
            }}
          />
        </ScrollView>
      </View>
    </>
  );
};
