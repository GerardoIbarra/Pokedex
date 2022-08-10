import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { DataPokemon, Type, Stat } from '../interface/PokemonInterface';
import { styles } from '../theme/AppTheme';
import { FadeInImage } from './FadeInImage';

    interface Props{
        color:string;
        pokemon:DataPokemon;
        
    }

export const PokemonDetails = ({color,pokemon} :Props) => {

  return (
    <ScrollView style={{...styles.globalmargin}}>
        <View style={{marginHorizontal:20,marginTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Tipos</Text>
            <View style={{flexDirection:'row'}}>
            {
                pokemon.types.map( ({ type }) =>(
                    <Text 
                    style={{fontSize:17,marginRight:10,color:'black'}}
                    key={ type.name}
                    >
                        {type.name}
                    </Text>
                ))
            }
            </View>
        </View>

        <View style={{marginHorizontal:20,marginTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>
                Peso
            </Text>
             <Text style={{fontSize:17,marginRight:10,color:'black'}}>
                {pokemon.weight} Kg
            </Text>
        </View>

        <View style={{marginHorizontal:20,marginTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Sprites</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <FadeInImage 
                        uri={pokemon.sprites.front_default}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                    <FadeInImage 
                        uri={pokemon.sprites.back_default}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                    <FadeInImage 
                        uri={pokemon.sprites.front_shiny}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
                    <FadeInImage 
                        uri={pokemon.sprites.back_shiny}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
            </ScrollView>
        </View>

        <View style={{marginHorizontal:20,marginTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Habilidades base</Text>
            <View style={{flexDirection:'row'}}>
            {
                pokemon.abilities.map( ({ ability }) =>(
                    <Text 
                    style={{fontSize:17,marginRight:10,color:'black'}}
                    key={ ability.name}
                    >
                        {ability.name}
                    </Text>
                ))
            }
            </View>
        </View>

        <View style={{marginHorizontal:20,marginTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Movimientos</Text>
            <View style={{flexDirection:'row', flexWrap:'wrap'}}>
            {
                pokemon.moves.map( ({ move }) =>(
                    <Text 
                    style={{fontSize:17,marginRight:10,color:'black'}}
                    key={ move.name}
                    >
                        {move.name}
                    </Text>
                ))
            }
            </View>
        </View>

        <View style={{marginHorizontal:20,marginTop:10}}>
            <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Estados base</Text>
            <View>
            {
                pokemon.stats.map( ( stat,i ) =>(
                    <View key={stat.stat.name + i}
                            style={{flexDirection:'row',}}
                    >
                        <Text 
                            style={{fontSize:17,marginRight:10,color:'black',width:150}}
                            key={ stat.stat.name}
                            >
                                {stat.stat.name}
                        </Text>
                        <Text 
                            style={{fontSize:17,marginRight:10,color:'black',fontWeight:'bold'}}
                            >
                                {stat.base_stat}
                        </Text>
                    </View>
                ))
            }
            </View>
        </View>
        <View style={{marginBottom:20,alignItems:'center'}}>
        <FadeInImage 
                        uri={pokemon.sprites.front_default}
                        style={{
                            width: 100,
                            height: 100
                        }}
                    />
        </View>
    </ScrollView>
    )
}
