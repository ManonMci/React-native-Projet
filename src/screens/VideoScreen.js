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
} from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

import BackgroundVideo from '../components/BackgroundVideo';

import {ApiGetProjects} from '../api/Video/apiVimeo';

import Categorie from '../components/Categories/Categorie';
import Activities from '../components/Activities/Activities';

//import data2 from '../data/data2.json';

const renderCategories = ({item}) => <Categorie title={item.title} />;

const VideoScreen = ({navigation}) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      return await ApiGetProjects();
    };
    getProjects()
      .then(data => setProjects(data.data))
      .catch(err => console.log(err));
  }, []);
  console.log(projects.lenght);
  return (
    <ScrollView>
    <View style={style.box1}>
        <Text style={style.titreAtelier}>Interviews, conférence et documentaire</Text>
        <Text>Accessible aux adhrérents</Text>
        </View>
        {/*<View style={style.box2}> 
                  <FlatList
                      data={data.activities}
                      renderItem={srcImage}
                      keyExtractor={item => item.id}
                      horizontal={true}
                  />
        </View>*/}
        <View style={style.container2}>
          {projects.lenght !== 0 &&
            projects.map((project, index) => (
              <View style={style.box2} key={index}>
                <Activities 
                project={project}
                title={project.name}     
                />
              </View>
            ))}
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
            numColumns={2}
          /> */}
        </View>
      </ScrollView>
  );
};

const style = StyleSheet.create({
  box1:{
    color:"rgb(120,120,120)",
    alignItems: 'flex-end',
    padding:20,
    backgroundColor:"white",
  },
  titreAtelier:{
    textAlign: 'right',
    color:"black",
    fontSize:20,
    alignItems: 'flex-end',
  },
  box2: {
    paddingTop: 10,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 190,
    resizeMode: 'cover',
    borderRadius: 15,
  },

  titre: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 17,
    position: 'absolute',
    top: 150,
    left: 15,
  },
  titre2: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  titre3: {
    color: 'black',
    fontSize: 15,
  },
  container2:{
    flexDirection: 'row',
    flexWrap: 'wrap',
   justifyContent:'center',
   backgroundColor:"white",
  }
});
export default VideoScreen;
