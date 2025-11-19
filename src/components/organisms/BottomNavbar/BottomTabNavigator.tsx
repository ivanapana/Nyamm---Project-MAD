//src/components/organisms/BottomNavbar/BottomTabNavigator.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/Text';
import Dashboard from '../../../pages/Dashboard';
import Rencana from '../../../pages/Rencana';
import Belanja from '../../../pages/Belanja';
import Kulkasku from '../../../pages/Kulkasku';

const Tab = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#E5E7EB',
          height: 60,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: -2},
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 10,
        },
        tabBarIconStyle: {
          marginTop: -6,
        },
        tabBarLabelStyle: {
          marginBottom: 4,
        },
      }}>
      <Tab.Screen
        name="home"
        component={Dashboard}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              type="caption"
              style={{
                fontSize: 12,
                color: focused ? '#FBBF24' : '#9CA3AF',
                fontWeight: focused ? '600' : 'normal',
                marginTop: 4,
              }}>
              Beranda
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="chef"
              size={24}
              color={focused ? '#FBBF24' : '#9CA3AF'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Rencana"
        component={Rencana}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              type="caption"
              style={{
                fontSize: 12,
                color: focused ? '#FBBF24' : '#9CA3AF',
                fontWeight: focused ? '600' : 'normal',
                marginTop: 4,
              }}>
              Rencana
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="calendar"
              size={24}
              color={focused ? '#FBBF24' : '#9CA3AF'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Belanja"
        component={Belanja}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              type="caption"
              style={{
                fontSize: 12,
                color: focused ? '#FBBF24' : '#9CA3AF',
                fontWeight: focused ? '600' : 'normal',
                marginTop: 4,
              }}>
              Belanja
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="cart"
              size={24}
              color={focused ? '#FBBF24' : '#9CA3AF'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Kulkasku"
        component={Kulkasku}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              type="caption"
              style={{
                fontSize: 12,
                color: focused ? '#FBBF24' : '#9CA3AF',
                fontWeight: focused ? '600' : 'normal',
                marginTop: 4,
              }}>
              Kulkasku
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <Icon
              name="fridge"
              size={24}
              color={focused ? '#FBBF24' : '#9CA3AF'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
