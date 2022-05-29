import React, {useEffect, useState} from 'react';

import {StyleSheet, Dimensions, ScrollView, View} from 'react-native';

import {WooCommerceAPI} from '../api/Woocommerce/apiwoocommerce';
import Header from '../components/Header';

function AbonnementScreen({navigation}) {
  useEffect(() => {
    fetch('https://vertical-project.com/wp-json/wc/v2/products').then(res => {
      res.json().then(response => {
        console.log(response);
      });
    });
  });

  return (
    <View>
      <Header />
    </View>
  );
}

export default AbonnementScreen;
