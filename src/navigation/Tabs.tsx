import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Navigation,  } from './Navigation';
import { Image, Platform } from 'react-native';

import { Tab2Screen } from './tabs2';

const Tab = createBottomTabNavigator();


export const  Tabs = () => {
  return (
    <Tab.Navigator
    sceneContainerStyle={{
        backgroundColor:'white'
    }}
    screenOptions={{
        headerShown:false,
        tabBarStyle: { borderWidth:0, elevation:0, backgroundColor:'rgb(255,255,255)', opacity:0.98 },
        tabBarLabelStyle:{
            marginBottom:(Platform.OS === 'ios')?0:10
        }
      }}
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={Navigation}
        options={{
        tabBarLabel:"Listado",
        tabBarIcon:({ }) => 
            <Image
            source={ require('../assets/lista.png')}
            style={{width:20, height:20}}
            />
        }} 
      />
      <Tab.Screen 
        name="Tab2Screen" 
        component={Tab2Screen}
        options={{
            tabBarLabel:"Busqueda",
            tabBarIcon:({ }) => 
                <Image
                source={ require('../assets/lupa-de-busqueda.png')}
                style={{width:20, height:20}}
                />
            }} 
      />
    </Tab.Navigator>
  );
}