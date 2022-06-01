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
import VideoScreen from '../screens/VideoScreen';
import TabNavigator from './TabNavigator';
import MyDrawer from './DrawerNavigator';

function VideoStack() {
  return (
    <Stack.Navigator
      initialRouteName={'VideoScreen'}
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      <Stack.Screen name="VideoScreen" component={VideoScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default VideoStack;
