import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import {
  NativeBaseProvider,
  Box,
  IconButton,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Center,
  HStack,
  Divider,
  FlatList,
  Icon,
} from 'native-base';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}> 
          <Image 
          style={styles.image}
          source={{uri: 'https://img.freepik.com/photos-gratuite/tente-camping-jaune-illuminee-sous-nombreuses-etoiles-nuit_104337-4794.jpg?w=2000'}}/>
          </View>
          <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
          <View style={styles.body}>
            <View style={styles.bodyContent}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>UX Designer / Mobile developer</Text>
              <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Editer mon profil</Text>  
              </TouchableOpacity>  
            </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    height,
  },
  header:{
    width,
    height:270,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:230
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
   
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  image:{
    width,
    height:300,
    resizeMode: 'cover',
  }
});

<Box>
<Heading fontSize="xl" p="4" pb="3">
  Inbox
</Heading>
<FlatList renderItem={({
item
}) => <Box borderBottomWidth="1" _dark={{
borderColor: "gray.600"
}} borderColor="coolGray.200" pl="4" pr="5" py="2">
      <HStack space={3} justifyContent="space-between">
        <Avatar size="48px" source={{
    uri: item.avatarUrl
  }} />
        <VStack>
          <Text _dark={{
      color: "warmGray.50"
    }} color="coolGray.800" bold>
            {item.fullName}
          </Text>
          <Text color="coolGray.600" _dark={{
      color: "warmGray.200"
    }}>
            {item.recentText}
          </Text>
        </VStack>
        <Spacer />
        <Text fontSize="xs" _dark={{
    color: "warmGray.50"
  }} color="coolGray.800" alignSelf="flex-start">
          {item.timeStamp}
        </Text>
      </HStack>
    </Box>} keyExtractor={item => item.id} />
</Box>