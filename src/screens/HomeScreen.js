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
} from 'react-native';

import Header from '../components/Header';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');
//<Image style={styles.back} source={require('../../assets/images/logo.png')} />
import {ApiGetFolders} from '../api/Video/apiVimeo';
import Categorie from '../components/Categories/Categorie';
import Activities from'../components/Activities/Activities';
import { withStdinLines } from 'cli';

const renderCategories = ({item}) => <Categorie title={item.title} />;

const HomeScreen = ({navigation}) => {
  const [folders, setFolders] = useState([]);
  useEffect(() => {
    const getFolders = async () => {
      return await ApiGetFolders();
    };
    getFolders()
      .then(data => setFolders(data.data))
      .catch(err => console.log(err));
  }, []);
  console.log(folders.length);

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
          {folders.lenght !== 0 &&
            folders.map((folders, index) => (
              <View style={styles.box2} key={index}>
              </View>
            ))}
        <Text style={styles.titre2}>Coups de coeur</Text>
        <Text style={styles.titre2}>Libre d'accès</Text>
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
          <Text style={styles.titreStyle}>Nos prochains evènements</Text>
          <Text>A Lyon ou à distance, venez echanger et rencontrer des personnes inspirantes !</Text>
        </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    height,
    width,
    flex:1,
  },
  image: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  titre: {
    alignItems: 'flex-end',
    padding:20,
  },
  titreStyle:{
    fontSize:22,
    fontWeight:"normal",
    color:"black",
   
  },
  titreStyle2:{
    fontSize:18,
  },
  back:{
width:30,
height:30,
  },
  box2:{
    width:200,
    height:200,
    color:'black',
  },
  categorie:{
  marginTop:40,
  margin:10,
  },
  titre2:{
    fontSize:18,
    margin:20,
    textAlign: 'center',
  }
  
});

export default HomeScreen;
