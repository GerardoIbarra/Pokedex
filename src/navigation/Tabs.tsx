import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Navigation} from './Navigation';
import {Image, Platform} from 'react-native';
import {Tab2Screen} from './tabs2';
import {Tab3Screen} from './tabs3';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          backgroundColor: 'rgb(255,255,255,0.99)',
          position: 'absolute',
          opacity: 0.98,
        },
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Navigation}
        options={{
          tabBarLabel: 'List',
          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/pokebola_color.png')}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={require('../assets/pokebola_sincolor.png')}
                style={{width: 20, height: 20}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Tab2Screen"
        component={Tab2Screen}
        options={{
          tabBarLabel: 'Search',

          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image
                source={require('../assets/avatarsin.png')}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={require('../assets/avatarcon.png')}
                style={{width: 20, height: 20}}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Tab3Screen"
        component={Tab3Screen}
        options={{
          tabBarLabel: 'Favorite',

          tabBarIcon: ({focused}) =>
            focused ? (
              <Image
                source={require('../assets/favorito_si.png')}
                style={{width: 20, height: 20}}
              />
            ) : (
              <Image
                source={require('../assets/favorito_no.png')}
                style={{width: 20, height: 20}}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
};
