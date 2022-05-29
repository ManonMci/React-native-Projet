import React from "react";
import { StyleSheet, Dimensions, ScrollView, View, Image, Button } from "react-native";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

function BackgroundEvent(){
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('../../assets/images/back1.webp')}
          //source={{uri: 'https://img.freepik.com/photos-gratuite/abstrait-bleu-lignes-fluides_1017-19951.jpg?t=st=1653295056~exp=1653295656~hmac=4e683b67819badb2e316d7bbbb50904533597bb20523afef5dd11eef4dbfc84f&w=1380'}}
            />

      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
      height,
      backgroundColor:"rgb(290,290,290)",
      position: "absolute",
    },
    image:{
      width,
      height,
     
    },
  })

  export default BackgroundEvent;