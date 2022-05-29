import React from "react";
import { StyleSheet, Dimensions, ScrollView, View, Text } from "react-native";
import Header from '../components/Header';
import {NavigationContainer, DrawerActions,} from '@react-navigation/native';

import TabNavigator from '../navigation/TabNavigator';


function LiveScreen({}){
return(
        <View>
             <Header/>
             <Text>Revenir à l'accueil</Text>
     
        </View>
)};
export default LiveScreen;