import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from './Navigation';
import { SearchScreem } from '../screens/SearchScreem';
import { PokeScreen } from '../screens/PokeScreen';
import React from 'react';
const Tab2 = createStackNavigator<RootStackParams>();


export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
    screenOptions={{
        headerShown:false,
        cardStyle:{
            backgroundColor:'white'
        }
    }}
    >
        <Tab2.Screen name="SearchScreem" component={SearchScreem} />
        <Tab2.Screen name="PokeScreen" component={PokeScreen} />
  </Tab2.Navigator>
  )
}
