import React, {useState, useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {RootStackParams} from '../navigation/Navigation';
import {styles} from '../theme/AppTheme';
import {usePokemon} from '../hooks/usePokemon';
import {usePokemonDescripcion} from '../hooks/usePokemonDescripcion';
import {PokemonDetails} from '../components/PokemonDetails';
import {useDispatch} from 'react-redux';
import {useAppSelector} from '../hooks/hook';
import {
  toggleShowFavoritesById,
  addandVerifyPokemon,
} from '../redux/slicers/FavoriteSlices';

interface Props extends StackScreenProps<RootStackParams, 'PokeScreen'> {}

export const PokeScreen = ({route}: Props) => {
  const [descri, setDescri] = useState('');
  const [isAdding, setIsAding] = useState<Boolean>(false);

  const {SimplePokemon, color} = route.params;
  const {id, picture, name} = SimplePokemon;
  const {isLoading, pokemon} = usePokemon(id);
  const {pokemonDes, isLoadingDes} = usePokemonDescripcion(id);
  const {descriptions} = pokemonDes;

  const dispatch = useDispatch();
  const showFavorites = useAppSelector(state => state.favorite.showFavorites);

  const isFavorite = showFavorites[pokemon.id] || false;

  const handleToggleShowFavorites = () => {
    dispatch(toggleShowFavoritesById(pokemon.id));

    setIsAding(!isAdding);

    if (isAdding === isFavorite) {
      dispatch(addandVerifyPokemon({id, name, picture}));
    }
  };

  useEffect(() => {
    descriptions?.map(des => {
      des.language.name === 'en' ? setDescri(des.description) : null;
    });
  }, [isLoadingDes]);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          ...styles.ContainerPokemon,
          backgroundColor: color,
        }}>
        <Text style={{...styles.pokeName, marginTop: 20}}>
          {name.charAt(0).toUpperCase() + name.slice(1) + ' #' + id}
        </Text>

        <TouchableOpacity
          style={{...styles.pokeName, ...styles.cardfavorite}}
          onPress={handleToggleShowFavorites}>
          <Image
            source={
              !isFavorite
                ? require('../assets/favorito_no.png')
                : require('../assets/favorito_si.png')
            }
            style={styles.favorite1}
          />
        </TouchableOpacity>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeballScrenn}
        />
        <FadeInImage uri={picture} style={styles.pokemonImageScrren} />
      </View>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator color={'black'} size={25} />
        </View>
      ) : (
        <>
          <Text
            style={{textAlign: 'center', color: '#fd3c3c', fontWeight: 'bold'}}>
            {descri}
          </Text>
          <PokemonDetails color={color} pokemon={pokemon} />
        </>
      )}
    </View>
  );
};
