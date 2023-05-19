import React, { useState } from 'react'
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import { SimplePokemon } from '../interface/PokemonInterface';
import { styles } from '../theme/AppTheme';
import { FadeInImage } from './FadeInImage';
import { useEffect, useRef } from 'react';
import ImageColors from 'react-native-image-colors';
import { useNavigation } from '@react-navigation/native';

const windoWidth = Dimensions.get("window").width;

interface Props {
    pokemon: SimplePokemon,
}

export const PokemonCard = ({ pokemon }: Props) => {

    const [name, setName] = useState('');
    const [bgColor, setbgColor] = useState('grey');
    const isMounted = useRef(true);
    const navigation = useNavigation();

    useEffect(() => {
      ImageColors.getColors(pokemon.picture, {fallback: 'grey'}).then(
        colors => {
          if (!isMounted.current) return;

          colors.platform === 'android'
            ? setbgColor(colors.dominant || 'grey')
            : setbgColor(colors.background || 'grey');
        },
      );
      return () => {
        isMounted.current = false;
      };
    }, []);

    useEffect(() => {
      setName(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));
    }, [pokemon.id]);

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate('PokeScreen', {
            SimplePokemon: pokemon,
            color: bgColor,
          })
        }>
        <View
          style={{
            ...styles.CardPokemon,
            width: windoWidth * 0.4,
            backgroundColor: bgColor,
          }}>
          <View>
            <Text style={styles.NamePokemonCard}>
              {name + '\n#' + pokemon.id}
            </Text>
          </View>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
          <FadeInImage uri={pokemon.picture} style={styles.PokemonImage} />
        </View>
      </TouchableOpacity>
    );
}
