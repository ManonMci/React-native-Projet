import React from 'react';
import {StyleSheet} from 'react-native';
import {
  NativeBaseProvider,
  Box,
  Text,
  IconButton,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Center,
  HStack,
  Divider,
  Icon,
} from 'native-base';
import {getDataObject} from '../service/SessionStorage/Storage.js';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Drawer = createDrawerNavigator();

import HomeScreen from '../screens/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from '../navigation/TabNavigator';

import AbonnementScreen from '../screens/AbonnementScreen';
import VBScreen from '../screens/VBScreen';
import LiveScreen from '../screens/LiveScreen';

/* importation des icones */
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {getArrayValue} from 'cli';

import {logout} from '../screens/LogoutScreen';

const getIcon = ScreenName => {
  switch (ScreenName) {
    case 'Home':
      return 'home';
    case 'Live':
      return 'video-camera';
    case 'Vertical Bulle':
      return 'heart';
    case 'Se connecter':
      return 'sign-in';
    case "S'inscrire":
      return 'user';
    case 'Devenez-Adhérent':
      return 'shopping-bag';
    case 'Profil':
      return 'user-circle';
    case 'Deconnecter':
      return 'sign-out';
    default:
      return undefined;
  }
};



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1" rightComponent={<Icon color="blue" />}>
        <Box px="4">
          <Text bold color="gray.700">
            Bonjour !
          </Text>
          {console.log(
            getDataObject('@user').then(response => {
              return response;
            }),
          )}
          <Text fontSize="14" mt="1" color="gray.500" fontWeight="500"></Text>
        </Box>
        <VStack divider={<Divider />} space="5">
          <VStack space="3">
            {props.state.routeNames.map((name, index) => (
              <Pressable
                key={index}
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? 'rgba(6, 182, 212, 0.1)'
                    : 'transparent'
                }
                onPress={event => {
                  props.navigation.navigate(name);
                }}>
                <HStack space="7" alignItems="center">
                  <Icon
                    // color={
                    //   index === props.state.index ? 'primary.500' : 'black.500'
                    // }
                    color={
                      index === props.state.index ? 'primary.500' : 'gray.700'
                    }
                    size="5"
                    as={<FontAwesome name={getIcon(name)} />}
                  />

                  <Text
                    fontWeight="600"
                    color={
                      index === props.state.index ? 'primary.500' : 'gray.700'
                    }>
                    {name}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
          <VStack space="5">
            <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
              A propos
            </Text>
            <VStack space="3">
              <Pressable px="5" py="3">
                <HStack space="7" alignItems="center">
                  <Icon
                    color="gray.500"
                    size="5"
                    type="FontAwesome"
                    as={<FontAwesome name={'sign-out'} size={32} />}
                  />
                  <Text fontWeight="500" color="red.700" onPress={ event =>{
              
               
            }}
          >
                    Deconnexion
                  </Text>
                </HStack>
              </Pressable>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
function MyDrawer() {
  return (
    <Box safeArea flex={1}>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            color: 'blue',
          },
          unmountOnBlur: true
        }}
        drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerTitleStyle: {
              color: 'black',
           
          
            },
            title: '',
            headerStyle: {backgroundColor: 'white'},
          }}
        />
        <Drawer.Screen
          name="Live"
          component={LiveScreen}
          options={{title: 'Vertical Project'}}
        />
        {getDataObject('@user') === null && (
          <Drawer.Screen
            name="Se connecter"
            component={LoginScreen}
            options={{title: 'Vertical Project'}}
          />
        )}
        {getDataObject('@user') === null && (
          <Drawer.Screen
            name="S'inscrire"
            component={RegisterScreen}
            options={{title: 'Vertical Project'}}
          />
        )}
        <Drawer.Screen
          name="Profil"
          component={ProfilScreen}
          options={{title: 'Vertical Project'}}
        />
        <Drawer.Screen
          name="Devenez-Adhérent"
          component={AbonnementScreen}
          options={{title: 'Vertical Project'}}
        />
      </Drawer.Navigator>
    </Box>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 30,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  pressable: {
    backgroundColor: 'grey',
  },
});

export default MyDrawer;
