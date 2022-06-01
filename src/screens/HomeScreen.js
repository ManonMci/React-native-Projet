import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Image,
  Button,
  Text,
  SafeAreView,
  Stack,
  AspectRatio,
  FlatList,
  TouchableOpacity,
  Video,
} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import Header from '../components/Header';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

import Categorie from '../components/Categories/Categorie';
import Activities from '../components/Activities/Activities';

import data from '../data/data.json';

import {
  Center,
  Box,
  VStack,
  Heading,
  FormControl,
  Input,
  Link,
  HStack,
} from 'native-base';


/*Dernier evenement */
const Evenement = ({item}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.box1}>
      <TouchableOpacity
        onPress={() => 
          Linking.openURL( {
            coverUri: item.coverUri,
            link: item.link,
          })
        }>
        <Image style={styles.image2} 
          source={{uri: item.coverUri}}
         />
      </TouchableOpacity>
    </View>
  );
};
const renderEvenement = ({item}) => <Evenement item={item} />;


function HomeScreen ({navigation}) {
  return (
    <View style={styles.container}>
      <Header />
      
      <View style={styles.titre}>
        <Text style={styles.titreStyle}>Science et Spiritualité</Text>
        <Text style={styles.titreStyle2}>Live et Replays</Text>
      </View>
      <View style={styles.categorie}>
        <Text style={styles.titreStyle}>Nos vidéos</Text>
        <Text>Interview et conférence, venez écouter des spécialistes !</Text>
        </View>
        <View>
        <Text style={styles.titre2}>Coups de coeur</Text>
        <Text style={styles.titre2}>Libre d'accès</Text>
      </View>
        {/* <FlatList
            renderItem={
               <Activities
              title={title}
              subtitle={subtitle}
              coverUri={CoverUri}
              image={image}
            />
           }
            keyExtractor={item => item.id}
            vertical={true}
            numColumns={2}s
          /> */}
          <View>
        <Text style={styles.titreStyle}>Nos prochains evènements</Text>
        <Text>
          A Lyon ou à distance, venez echanger et rencontrer des personnes
          inspirantes !
        </Text>
          
        </View>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    height,
    width,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  titre: {
    alignItems: 'flex-end',
    padding: 20,
  },
  titreStyle: {
    fontSize: 22,
    fontWeight: 'normal',
    color: 'black',
  },
  titreStyle2: {
    fontSize: 18,
  },
  back: {
    width: 30,
    height: 30,
  },
  box2: {
    width: 200,
    height: 200,
    color: 'black',
  },
  categorie: {
    marginTop: 40,
    margin: 10,
  },
  titre2: {
    fontSize: 18,
    margin: 20,
    textAlign: 'center',
  },

  image2:{
    width:250,
    height:180,
    resizeMode: 'contain',
    borderRadius: 10,

  },
  box1:{
    backgroundColor:"white",
    flexDirection: 'row',
    height:180,
    width:250,
    alignItems: 'space-arround',
  },

});

export default HomeScreen;
