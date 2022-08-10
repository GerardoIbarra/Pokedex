import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View, Image, ScrollView, ActivityIndicator } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { RootStackParams } from '../navigation/Navigation'
import { styles } from '../theme/AppTheme';
import { usePokemon } from '../hooks/usePokemon';
import { PokemonDetails } from '../components/PokemonDetails';

    interface Props extends StackScreenProps<RootStackParams,'PokeScreen'>{};

export const PokeScreen = ({navigation,route}:Props) => {
  
    const {SimplePokemon,color} = route.params
    const {id,picture,name} = SimplePokemon;
    const {isLoading,pokemon} = usePokemon(id);

    return (
   <View style={{flex:1}}>
     <View style={{
        ...styles.ContainerPokemon,
        backgroundColor:color
    }}>
        <Text style={{...styles.pokeName,marginTop:20}}>
            {name + ' #'+ id}
        </Text>
        <Image
            source={ require('../assets/pokebola-blanca.png')}
            style={styles.pokeballScrenn}
        />
         <FadeInImage 
            uri={picture}
            style={styles.pokemonImageScrren}
        />
    </View>
    {
        isLoading ? (
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator 
                    color={'black'}
                    size={25}
                />
            </View>
        ):<PokemonDetails color={color} pokemon={pokemon}/>
    }
   </View>
    )
}
