/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import Judul from './komponen/Judul';


type Props ={};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
      <Judul judul="BIODATA"/>
      <Judul judul="LOGIN"/>
      <Judul judul="FORM"/>
        
        <Text>Nama : RIZKA SALMA ADELIA </Text>
        <Text>No Absen : 33</Text>
        <Text>Kelas : XI RPL 1</Text>
        <Image style={{width: 300, height: 400}} 
        source={require('./holla.jpg')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
