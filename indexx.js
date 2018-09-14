import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';



export default class App extends Component{

	handleClick(myName){
		console.log('Nama saya adalah' + myName);
 
	}
	render() {
  	
  	const myName = "RIZKA SALMA ADELIA";


    return (
      <View>
      <Text>PLIS KLIK TOMBOL DIBAWAH</Text>
      <TouchableOpacity onPress={()=> this.handleClick(myName)}>
      	<Text>Click</Text>
      	</TouchableOpacity>
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
