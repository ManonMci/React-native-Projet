import React from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeScreen from '../screens/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen';
import VideoIdScreen from '../screens/VideoIdScreen';
import DetailsScreen from '../screens/DetailsScreen';

import TabNavigator from './TabNavigator';
import MyDrawer from './DrawerNavigator';

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={'TabNavigator'}
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default MyStack;
