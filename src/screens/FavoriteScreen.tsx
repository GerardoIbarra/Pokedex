import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/AppTheme';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';
import {PokemonCard} from '../components/PokemonCard';
import {useAppSelector} from '../hooks/hook';

export const FavoriteScreen = () => {
  const {top} = useSafeAreaInsets();
  const {loadPokemons} = usePokemonPaginated();
  const value = useAppSelector(state => state.favorite.pokemos);

  return (
    <View>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />
      <View style={{alignItems: 'center'}}>
        <FlatList
          data={value}
          keyExtractor={pokemon => pokemon.id}
          numColumns={2}
          renderItem={({item}) => <PokemonCard pokemon={item} />}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
              <Text
                style={{
                  ...styles.title,
                  top: top + 20,
                  marginBottom: top + 20,
                  margin: 0.5,
                  ...styles.globalmargin,
                  paddingBottom: 10,
                  fontSize: 30,
                }}>
                Favorite pokemon
              </Text>
            </>
          }
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
        />
      </View>
    </View>
  );
};
