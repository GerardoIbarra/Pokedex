import React from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native'
import {  useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/AppTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { SimplePokemon } from '../interface/PokemonInterface';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';
import SplashScreen from 'react-native-splash-screen'
import { useEffect } from 'react';

export const HomeScreens = () => {
  
  const {top} = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();

  useEffect(() => {
    SplashScreen.hide();
  },[])

  return (
    <View>
       <Image 
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
       />

      <View style={{alignItems:'center'}}>
        <FlatList 
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          numColumns={2}
          renderItem={({item}) => (
            <PokemonCard pokemon={item}/>
          )}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={(
            <Text style={{
              ...styles.title,
              top: top +20,
              marginBottom:top +20,
              margin:0.5,
              ...styles.globalmargin,
              paddingBottom:10
            }}>Pokedex</Text>
          )}

          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={(
            <ActivityIndicator 
              style={{height:100}}
              size={20}
              color="black"
            />
          )}
        />
      </View>

   
    </View>
    )
}
