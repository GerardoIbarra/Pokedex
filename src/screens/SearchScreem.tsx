import React from 'react';
import {
  Text,
  View,
  Platform,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Loading} from '../components/Loading';
import {PokemonCard} from '../components/PokemonCard';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {styles} from '../theme/AppTheme';
import {useState, useEffect} from 'react';
import {SimplePokemon} from '../interface/PokemonInterface';

export const SearchScreem = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();
  const [pokemonFilter, setpokemonFilter] = useState<SimplePokemon[]>([]);
  const [termino, settermino] = useState('');

  useEffect(() => {
    if (termino.length === 0) {
      return setpokemonFilter([]);
    }

    if (isNaN(Number(termino))) {
      setpokemonFilter(
        simplePokemonList.filter(poke =>
          poke.name.toLocaleLowerCase().includes(termino.toLocaleLowerCase()),
        ),
      );
    } else {
      const PokemonById = simplePokemonList.find(poke => poke.id === termino);
      setpokemonFilter(PokemonById ? [PokemonById] : []);
    }
  }, [termino]);

  if (isFetching) {
    return <Loading />;
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput onDebounce={value => settermino(value)} />
      <FlatList
        data={pokemonFilter}
        keyExtractor={pokemon => pokemon.id}
        numColumns={2}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <Text
            style={{
              ...styles.title,
              top: top + 20,
              marginBottom: top + 20,
              margin: 0.5,
              ...styles.globalmargin,
              paddingBottom: 10,
            }}>
            {termino === ''
              ? 'Looking for anything'
              : !pokemonFilter.length && Array.isArray(pokemonFilter)
              ? 'Pokemon not found'
              : termino}
          </Text>
        }
      />
    </View>
  );
};
