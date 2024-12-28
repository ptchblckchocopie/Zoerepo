import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './Screens/homepage';
import FamilyConnectivity from './Screens/famcon';
import Notification from './Screens/notification';
import Menu from './Screens/menu';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Family Connectivity') {
              iconName = focused ? 'people' : 'people-outline';
            } else if (route.name === 'Notification') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'menu' : 'menu-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FFCF00',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: { backgroundColor: '#005ACF' },
        })}
      >
        <Tab.Screen name="Home" component={Homepage} />
        <Tab.Screen name="Family Connectivity" component={FamilyConnectivity} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="Menu" component={Menu} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
