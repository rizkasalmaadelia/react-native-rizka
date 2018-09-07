import React,{Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component {
	render(){
		return (
			<Text style={rias.Judul}>{this.props.judul}</Text>
			)
	}
}
const rias = {
	Judul: {
		color: '#000',
		fontSize: 50,
		fontWeight: 'bold',
		
	}
}
export default Judul;