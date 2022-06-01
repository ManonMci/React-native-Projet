import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Button,
  ScrollView,
  Image,

} from 'react-native';

//import {VideoPlayer} from 'react-native-video-player';
//import Video from 'react-native-video';

import {ApiGetVideosByFolder} from '../api/Video/apiVimeo';

const DetailsScreen = ({route, navigation}) => {
  const [videos, setVideos] = useState([]);
  const [project, setProject] = useState(route.params.project);

  useEffect(() => {
    const getVideosByProject = async () => {
      return await ApiGetVideosByFolder({projectId: project.uri.split('/')[4]});
    };
    getVideosByProject()
      .then(data => setVideos(data.data))
      .catch(err => console.log(err));
  }, []);
  console.log(JSON.stringify(videos[0], null, 4));
  return (
    <ScrollView>
      <View style={style.container}>
        <Image style={style.image} source={{uri: route.params.coverUri}} />
        <Text>{route.params.title}</Text>
        {/* <Video style={style.video} source={{uri: route.params.link}} /> */}
       
        <Button
          title="Revenir aux catégories"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={style.container2}>
        {videos.length !== 0 &&
          videos.map((video, index) => (
            <View style={style.box2} key={index}></View>
          ))}
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  container2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default DetailsScreen;
