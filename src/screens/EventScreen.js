import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Linking,
} from 'react-native';

import {WebView} from 'react-native-webview';
import BackgroundEvent from '../components/BackgroundEvent';

import data from '../data/data.json';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Categorie = ({title}) => (
  <ScrollView>
  <View>
    <Text style={style.liste}>{title}</Text>
  </View>
  </ScrollView>
);
const renderCategories = ({item}) => <Categorie title={item.title} />;


/* afficher language */
const Activities = ({item}) => {
  const [projects, setProjects] = useState([]);

  const navigation = useNavigation();
  useEffect(() => {
    const getProjects = async () => {
      const getProjectsData = await ApiGetProjects();
    };
    getProjects()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      <TouchableOpacity
        onPress={() => 
          Linking.openURL( {
            coverUri: item.coverUri,
            link: item.link,
          })
        }>
        <Image style={style.image} source={{uri: item.coverUri}}
        url={{uri: item.link}}
         />
        
      </TouchableOpacity>
    </View>
  );
};

const renderActivites = ({item}) => <Activities item={item} />;
function EventScreen({}) {
  return (
    
    <SafeAreaView style={style.container}>
      <BackgroundEvent/>
        <View>
          <View style={style.titre3}>
        <Text style={style.titreAtelier}>Ateliers collectifs et conférences</Text>
        <Text>Ouverts à tous sur inscription</Text>
        </View>
        <View style={style.presentiel}>
          <Text style={style.titre}>Presentiel</Text>
       
          </View>
        </View>
        {/*<View style={style.box2}> 
                  <FlatList
                      data={data.activities}
                      renderItem={srcImage}
                      keyExtractor={item => item.id}
                      horizontal={true}
                  />
                </View>*/}
        <View style={style.box2}
        >
          
          <FlatList
            data={data.activities}
            renderItem={renderActivites}
            keyExtractor={item => item.id}
            horizontal={true}
            
          />
        </View>
        <View style={style.presentiel}>
          <Text style={style.titre}>Distanciel</Text>
        </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:10,
    width,
    backgroundColor: 'white',
  },
  liste: {
    borderRadius: 10,
    width,
  },
  image: {
    width:300,
    height:250,
    resizeMode: 'contain',
    borderRadius: 10,
  },

  titre: {
    fontWeight: 'normal',
    fontSize: 19,
    paddingTop:10,
    paddingBottom:3,
    color:"black",
  },
  titreAtelier:{
    textAlign: 'right',
    color:"black",
    fontSize:21,
    alignItems: 'flex-end',
  
  },
  box2:{
    borderRadius: 10,
  },
  titre3:{
    color:"rgb(120,120,120)",
    fontSize:22,
    alignItems: 'flex-end',
    padding:20,
 
  },
  presentiel:{
    paddingLeft:13,
    paddingBottom:10,
    flexDirection:"row",
    alignItems: 'center',

  }

});

export default EventScreen;
