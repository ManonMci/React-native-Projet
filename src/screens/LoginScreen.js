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

import {apiLogin} from '../api/Auth/apiLogin';

import {storeDataObject, getDataObject} from '../service/SessionStorage/Storage.js';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Login = ({navigation, route}) => {
  const [formData, setData] = useState({
    username: 'manonmucchielli@hotmail.fr',
    password: 'Chouchou894',
  });
  const [errors, setErrors] = useState('');

  const validate = async () => {
    if (formData.username.length === 0 && formData.password.length === 0) {
      setErrors('Les champs sont vides');
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    validate() ? console.log('Submitted') : console.log('Validation Failed');

    //const isValidate = false
    const isValidate = true;
    if (!isValidate) {
      return false;
    }
    const result = await apiLogin(formData);
    console.log('result result', result);
    if (!result) {
      return setError('Mauvaise combinaison.');
    }
    await storeDataObject('@user', result);

    console.log('getDataObject', await getDataObject('@user'));
    console.log('result', result);
    navigation.navigate('Accueil');
  };

  return (
    <Center w="100%" style={styles.container}>
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: 'warmGray.50',
          }}>
          Bienvenue !
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: 'warmGray.200',
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs">
          Connectez-vous pour continuer,
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label isRequired>
              Identifiant ou Adresse Email
            </FormControl.Label>
            <Input
              onChangeText={value => setData({...formData, username: value})}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label isRequired>Mot de passe</FormControl.Label>
            <Input
              onChangeText={value => setData({...formData, password: value})}
              type="password"
              label="Password"
              textContentType="password"
            />
            <Link
              _text={{
                fontSize: 'xs',
                fontWeight: '500',
                color: 'indigo.500',
              }}
              alignSelf="flex-end"
              mt="1">
              Mot de passe oublié ?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={onSubmit}>
            Se connecter
          </Button>
          <Text
            fontSize="sm"
            color="coolGray.600"
            _dark={{
              color: 'warmGray.200',
            }}>
            {errors}
          </Text>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: 'warmGray.200',
              }}>
              Je ne suis pas encore inscrit ?{' '}
            </Text>
            <Link
              _text={{
                color: 'indigo.500',
                fontWeight: 'medium',
                fontSize: 'sm',
              }}
              href="#">
              S'inscrire ici.
            </Link>
          </HStack>
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
    flex: 1,
    justifyContent: 'flex-start',
  },
  icon: {
    fontSize: 80,
    color: '#fff',
  },
  container_2: {
    width,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  titleContainer: {
    width,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});

export default Login;
