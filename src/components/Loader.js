import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loader = () => {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        top: '50%',
        width: 60,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 100,
      }}>
      <ActivityIndicator size="large" color={'0000ff'} animating={true} />
    </View>
  );
};

export default Loader;
