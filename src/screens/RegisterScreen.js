import React, {useState, setError} from 'react';
import { StyleSheet, Dimensions, ScrollView } from "react-native";

import {Center, Box, VStack, Heading, FormControl, Button, Input } from "native-base";
import { NativeBaseProvider, Text, HStack } from 'native-base';

import {apiRegister} from '../api/Auth/apiRegister';
import storeDataObject from '../service/SessionStorage/Storage.js'

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Register = () => {
    const [formData, setData] = useState({
      email: '',
      username: '',
      password: '',
      password_verify: '',
    });
    const [errors, setErrors] = useState(
     ''
     );
  
    const validate = async () => {
      if (formData.username.length === 0 && formData.password.length === 0) {
        setErrors('Veuillez remplir les champs');
        return false;
      } 
      return true;

    };

    const onSubmit = async () => {
      validate() ? console.log('Submitted') : console.log('Validation Failed');
      
      const result = await apiRegister(formData);
      if (!result){
        return setError('Mauvaise combinaison.')
      }
      await storeDataObject('@user', result)
      console.log('result', result)
      console.log('getDataObject', await getDataObject('@user'))
    };
  
    return (
    <Center w="100%" style={styles.container}>
        <Box safeArea p="2" w="90%" maxW="290" py="8" color="white">
          <Heading size="lg" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }} fontWeight="semibold">
            Bienvenue,
          </Heading>
          <Heading mt="1" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }} fontWeight="medium" size="xs">
            Inscrivez-vous pour continuer !
          </Heading>
          <VStack space={3} mt="5">
            
            <FormControl>
              <FormControl.Label isRequired>Email</FormControl.Label>
              <Input 
              type="mail"
              onChangeText={value => setData({...formData, email: value})} />
            </FormControl>
            <FormControl>
              <FormControl.Label isRequired>Username</FormControl.Label>
              <Input 
              type="username"
              onChangeText={value => setData({...formData, username: value})} />
            </FormControl>
            <FormControl>
              <FormControl.Label isRequired>Mot de passe</FormControl.Label>
              <Input 
                type="password" 
                onChangeText={value => setData({...formData, password: value})}
                />
               
            </FormControl>
            <FormControl>
              <FormControl.Label isRequired>Confirmer le mot de passe</FormControl.Label>
              <Input 
              type="password" 
              onChangeText={value => setData({...formData, password_verify: value})}
              />
               {errors}
            </FormControl>
            <HStack space={6}>
      
    </HStack>
            <Button onPress={async () => onSubmit()} mt="2" colorScheme="indigo">
              S'inscrire
            </Button>
          </VStack>
        </Box>
      </Center>
    );
  };


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    width,
    height,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
  export default Register;