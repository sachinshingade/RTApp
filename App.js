/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Button,
  TouchableOpacity,
} from 'react-native';

let { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 0;
const LONGITUDE = 0;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

import Icon from 'react-native-vector-icons/Ionicons'

import MapComp from './src/Components/MapComp';
import OrderList from './src/Components/OrderList';
import Header from './src/Components/Header'

const openCollapsable= (key)=> {
  console.log('Pressed', key)
}
const App: () => React$Node = () => {
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <MapComp/>
          <Header/>
          <OrderList/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     height: 400,
//     width: 400,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   toprow: {
//     display: 'flex',
//     alignContent: 'space-between',
//     flexDirection: 'row',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     margin: 20,
//     height: 80
//   },
//   orderText: {
//     fontSize: 20,
//     fontWeight: '700',
//     color: '#0e2c4a'
//   },
// });

export default App;
