import React from 'react';
import {ScrollView, Text, View, StyleSheet} from 'react-native';
import {DataPokemon} from '../interface/PokemonInterface';
import {styles} from '../theme/AppTheme';
import {FadeInImage} from './FadeInImage';
import {Sprities} from './Sprities';

interface Props {
  color: string;
  pokemon: DataPokemon;
}

export const PokemonDetails = ({pokemon}: Props) => {
  return (
    <ScrollView style={{...styles.globalmargin}}>
      <View style={Styles.ContaWord}>
        <Text style={Styles.WordBold}>Types</Text>
        <View style={Styles.ColumStat}>
          {pokemon.types.map(({type}) => (
            <View
              style={{
                marginTop: 12,
                marginHorizontal: 2,
                backgroundColor:
                  type.name === 'fire'
                    ? 'red'
                    : type.name === 'flying'
                    ? '#7FACF2'
                    : type.name === 'grass'
                    ? '#46ED38'
                    : type.name === 'poison'
                    ? '#D638ED'
                    : type.name === 'water'
                    ? '#1484FC'
                    : type.name === 'bug'
                    ? '#9acd32'
                    : type.name === 'normal'
                    ? '#a5a5a5'
                    : type.name === 'electric'
                    ? '#DBD813'
                    : type.name === 'rock'
                    ? '#cd853f'
                    : type.name === 'fairy'
                    ? 'rgb(255, 136, 238)'
                    : type.name === 'steel'
                    ? '#d3d3d3'
                    : type.name === 'dragon'
                    ? '#7B68EE'
                    : type.name === 'ghost'
                    ? '#A020F0'
                    : type.name === 'ice'
                    ? '#7FFFD4'
                    : type.name === 'fighting'
                    ? '#b22222 '
                    : type.name === 'psychic'
                    ? '#8F00FF'
                    : type.name === 'dark'
                    ? '#708090'
                    : 'deb887',
              }}>
              <Text
                style={{fontSize: 17, marginHorizontal: 10, color: 'white'}}
                key={type.name}>
                {type.name !== ''
                  ? type.name.charAt(0).toUpperCase() + type.name.slice(1)
                  : 'Desconoc'}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={Styles.ContaWord}>
        <Text style={Styles.WordBold}>Weight</Text>
        <Text style={Styles.WordStyle}>{pokemon.weight} Kg</Text>
      </View>

      <Sprities pokemon={pokemon} />

      <View style={Styles.ContaWord}>
        <Text style={Styles.WordBold}>Base skills</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text style={Styles.WordStyle} key={ability.name}>
              {ability.name.charAt(0).toUpperCase() + ability.name.slice(1)}
            </Text>
          ))}
        </View>
      </View>

      <View style={Styles.ContaWord}>
        <Text style={Styles.WordBold}>Movements</Text>
        <View style={Styles.WordStyle}>
          {pokemon.moves.map(({move}) => (
            <Text style={Styles.WordStyle} key={move.name}>
              {move.name.charAt(0).toUpperCase() + move.name.slice(1)}
            </Text>
          ))}
        </View>
      </View>
      <View style={Styles.ContaWord}>
        <Text style={Styles.WordBold}>Base experience</Text>
        <Text style={Styles.WordStyle}>{pokemon.base_experience}</Text>
      </View>
      <View style={Styles.ContaWord}>
        <Text style={Styles.WordBold}>Base states</Text>
        <View>
          {pokemon.stats.map((stat, i) => (
            <View key={stat.stat.name + i} style={Styles.ColumStat}>
              <Text style={Styles.Statname} key={stat.stat.name}>
                {stat.stat.name}
              </Text>
              <Text style={Styles.BaseStat}>{stat.base_stat}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={Styles.containerFade}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  containerFade: {
    marginBottom: 20,
    alignItems: 'center',
  },
  BaseStat: {
    fontSize: 17,
    marginRight: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  Statname: {
    fontSize: 17,
    marginRight: 10,
    color: 'black',
    width: 150,
  },
  ColumStat: {
    flexDirection: 'row',
  },
  ContaWord: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  WordBold: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  WordStyle: {
    fontSize: 17,
    marginRight: 10,
    color: 'black',
  },
});
