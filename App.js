import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import {
  NativeBaseProvider,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Center,
  HStack,
  Divider,
  Icon,
} from 'native-base';

/* Importation navigation */
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Drawer = createDrawerNavigator();

//import {AnimatedLoader}  from "@react-native-animated-loader";
//Installer icone dans le terminal (sans la librairie a la fin)
import FontAwesome from 'react-native-vector-icons/FontAwesome';

//import Video from '@react-native-video';
//import LinearGradient from 'react-native-linear-gradient';

import HomeScreen from './src/screens/HomeScreen';
import ProfilScreen from './src/screens/ProfilScreen';
import DetailsScreen from './src/screens/DetailsScreen';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import StackNavigator from './src/navigation/StackNavigator';

import {render} from 'react-native/Libraries/Renderer/implementations/ReactNativeRenderer-prod';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StackNavigator/>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginLeft: 20,
    borderRadius: 10,
  },
  bouton: {
    marginRight: 20,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 30,
    width: 50,
    height: 50,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default App;
