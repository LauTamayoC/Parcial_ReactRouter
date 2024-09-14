import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';

import Home from './src/screens/Home';
import Details from './src/screens/Details';
import About from './src/screens/About';  

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeScreen" 
        component={Home} 
        options={{ title: 'NASA APOD IMÁGENES' }}
      />
      <Stack.Screen 
        name="Details" 
        component={Details} 
        options={{ title: 'Detalle de imágenes' }}
      />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="space-shuttle" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="info-circle" size={size} color={color} />
          ),
          title: 'Acerca de'
        }}
      />
    </Tab.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      {/* Agrega el ícono para "Main" */}
      <Drawer.Screen 
        name="Main" 
        component={TabNavigator} 
        options={{
          title: 'Principal',
          drawerIcon: ({ color, size }) => (
            <AntDesign name="smile-circle" size={24} color="black" />
          ),
        }} 
      />
      
      <Drawer.Screen 
        name="About" 
        component={About} 
        options={{
          title: 'Acerca de',
          drawerIcon: ({ color, size }) => (
            <AntDesign name="smileo" size={size} color={color} /> 
          ),
        }} 
      />
    </Drawer.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default Navigation;
