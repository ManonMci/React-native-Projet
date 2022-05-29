import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Categorie = props => {
  return (
    <View>
      <Text style={style.liste}>{props.title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  liste: {
    fontSize: 20,
  
  },
});
export default Categorie;
