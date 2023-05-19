import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParams} from './Navigation';
import {PokeScreen} from '../screens/PokeScreen';
import {FavoriteScreen} from '../screens/FavoriteScreen';
const Tab2 = createStackNavigator<RootStackParams>();

export const Tab3Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Tab2.Screen name="FavoriteScreen" component={FavoriteScreen} />
    </Tab2.Navigator>
  );
};
