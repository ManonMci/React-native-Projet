import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Video = props => {
    //console.log(props.player_embed_url)
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
export default Video;
