import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreens} from '../screens/HomeScreens';
import {PokeScreen} from '../screens/PokeScreen';
import {SimplePokemon} from '../interface/PokemonInterface';

export type RootStackParams = {
  HomeScreens: undefined;
  PokeScreen: {SimplePokemon: SimplePokemon; color: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen name="HomeScreens" component={HomeScreens} />
      <Stack.Screen name="PokeScreen" component={PokeScreen} />
    </Stack.Navigator>
  );
};
