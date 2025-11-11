// src/navigation/BottomTabNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../pages/Dashboard';
import {Image} from 'react-native';

import {Resep} from '../pages/Resep';
import {Rencana} from '../pages/Rencana';
import {Belanja} from '../pages/Belanja';
import {Kulkasku} from '../pages/Kulkasku';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          fontSize: 11,
          marginBottom: 4,
        },
        tabBarStyle: {
          height: 70,
          paddingTop: 8,
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
        },
        tabBarIconStyle: {
          marginTop: 2,
        },
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Beranda',
          tabBarLabelStyle: {color: '#FBBF24', fontWeight: '600'},
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/home-active.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FBBF24' : '#9CA3AF',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Resep"
        component={Resep}
        options={{
          tabBarLabel: 'Resep',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/book-open.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FBBF24' : '#9CA3AF',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Rencana"
        component={Rencana}
        options={{
          tabBarLabel: 'Rencana',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/planner.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FBBF24' : '#9CA3AF',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Belanja"
        component={Belanja}
        options={{
          tabBarLabel: 'Belanja',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/cart.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FBBF24' : '#9CA3AF',
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Kulkasku"
        component={Kulkasku}
        options={{
          tabBarLabel: 'Kulkasku',
          tabBarIcon: ({focused}) => (
            <Image
              source={require('../assets/images/fridge.png')}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? '#FBBF24' : '#9CA3AF',
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
