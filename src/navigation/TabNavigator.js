import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Button,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen';
import EventScreen from '../screens/EventScreen';
import FocusScreen from '../screens/FocusScreen';
import VideoScreen from '../screens/VideoScreen';

import DrawerNavigator from '../navigation/DrawerNavigator';
import {MyDrawer} from '../navigation/DrawerNavigator';
import VideoStack from '../navigation/VideoStack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        tabBarStyle: {
          backgroundColor: 'white',
          height: 60,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        },

        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Vidéos') {
            iconName = focused ? 'play' : 'play';
          } else if (route.name === 'Evènements') {
            iconName = focused ? 'calendar' : 'calendar';
          } else if (route.name === 'Le Mag') {
            iconName = focused ? 'newspaper' : 'newspaper';
          }
          // You can return any component that you like here!
          return <FontAwesome5 name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: 'rgb(105, 179, 261)',
        tabBarInactiveTintColor: 'rgb(33,78,162)',
        tabBarActiveBackgroundColor: 'rgb(254,254,254)',
        tabBarLabelStyle: {
          fontSize: 13,
          margin: 4,
          padding: 0,
        },
      })}>
      <Tab.Screen
        name="Accueil"
        component={HomeScreen}
        options={{
          headerTitleStyle: {
            color: 'rgb(105, 179, 261)',
          },
          headerShown: false,
          headerShadowVisible: true,
          boxShadowOpacity: 0,
          //src: 'https://vertical-project.com/wp-content/uploads/2021/11/Nouveau-logo-VP-1-1.png'
        }}
      />
      <Tab.Screen
        name="Vidéos"
        component={VideoStack}
        options={{
          headerShown: false,
          headerShadowVisible: true,
          boxShadowOpacity: 0,
        }}
      />
      <Tab.Screen
        name="Evènements"
        component={EventScreen}
        options={{
          headerShown: false,
          headerShadowVisible: true,
          boxShadowOpacity: 0,
        }}
      />
      <Tab.Screen
        name="Le Mag"
        component={FocusScreen}
        options={{
          headerShown: false,
          headerShadowVisible: true,
          boxShadowOpacity: 0,
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});

export default TabNavigator;
