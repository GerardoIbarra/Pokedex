import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/AppTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {PokemonCard} from '../components/PokemonCard';
import SplashScreen from 'react-native-splash-screen';
import {useAppSelector} from '../hooks/hook';

export const HomeScreens = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();
  const value = useAppSelector(state => state.favorite.value);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={pokemon => pokemon.id}
          numColumns={2}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  ...styles.title,
                  top: top + 20,
                  marginBottom: top + 20,
                  margin: 0.5,
                  ...styles.globalmargin,
                  paddingBottom: 10,
                }}>
                Pokedex
              </Text>
              <View style={{}}></View>
            </View>
          }
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="black" />
          }
        />
      </View>
    </View>
  );
};
