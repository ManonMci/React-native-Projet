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


import BackgroundEvent from '../components/BackgroundEvent';

import data from '../data/data.json';

import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');


const Presentiel = ({item}) => {
  const navigation = useNavigation();
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
const renderPresentiel = ({item}) => <Presentiel item={item} />;


/*Evenement à distance */
const Distanciel = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => 
          Linking.openURL( {
            coverUri: item.coverUri,
            link: item.link,
          })
        }>
        <Image style={style.image2} source={{uri: item.coverUri}}
         />
      </TouchableOpacity>
    </View>
  );
};
const renderDistanciel = ({item}) => <Distanciel item={item} />;


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
        <View style={style.box2}>
          <FlatList
            data={data.presentiel}
            renderItem={renderPresentiel}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
        <View style={style.presentiel}>
          <Text style={style.titre}>Distanciel</Text>
        </View>
        <View style={style.box3}> 
        <FlatList
            data={data.distanciel}
            renderItem={renderDistanciel}
            keyExtractor={item => item.id}
            vertical={true}
            numColumns={2}
          />
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
    width:250,
    height:200,
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
  box3:{
    width,
  },
  titre3:{
    color:"rgb(120,120,120)",
    fontSize:22,
    alignItems: 'flex-end',
    marginRight:20,
  },
  presentiel:{
    paddingLeft:13,
    paddingBottom:10,
    flexDirection:"row",
    alignItems: 'center',

  },
  image2:{
    width:190,
    height:190,
    marginLeft:15,
    resizeMode: 'contain',
    borderRadius: 10,
  }

});

export default EventScreen;
