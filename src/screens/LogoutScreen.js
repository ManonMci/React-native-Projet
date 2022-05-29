
import React, {useState, setError} from 'react';
import {StyleSheet, Dimensions, ScrollView, Text, View} from 'react-native';

import {
  Center,
  Box,
  VStack,
  Heading,
  FormControl,
  Button,
  Input,
  Link,
  HStack,
} from 'native-base';


function logout () {
    AsyncStorage.clear();
    props.navigation.replace("HomeScreen");
}

export default logout;