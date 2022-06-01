import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const getImage = ScreenName => {
  switch (ScreenName) {
    case '':
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


const Activities = props => {

  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <TouchableOpacity 
        onPress={() =>
          navigation.navigate('DetailsScreen', {
            title: props.title,
            project: props.project
          })
        }>
          <Image 
          style={style.image}
          source={{
            uri:  
            "https://img.freepik.com/photos-gratuite/gros-plan-femme-meditant-position-du-lotus-au-coucher-du-soleil_637285-5481.jpg?w=1380&t=st=1652807511~exp=1652808111~hmac=5660b686cd14e623e0a5a76839e69958b437c6906f79df411b840a01cfe31b6a"
          }}
          />
        </TouchableOpacity>
      <Text style={style.titre}> {props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    width: 180,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 15,
    margin: 5,
  },
  titre: {
    color: '#000',
    fontWeight: 'normal',
    fontSize: 18,
    position: 'absolute',
    top: 160,
    left: 15,
    color:"white",
  },
  container:{
    flexDirection:"row",
  flexWrap:"wrap",
  alignContent:"space-around",
  }
});
export default Activities;
