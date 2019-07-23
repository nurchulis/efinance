/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { withNavigation } from 'react-navigation'

//import Logo from '../../../static/ASSETS-REV/ONBOARDING/1.svg'

var {height, width} = Dimensions.get('window')

export default class Intro1 extends Component {
	constructor(props) {
	    super(props)
	}

	render () {
		return (
			<View style={styles.container}>
				<Text style={{fontSize:20, marginBottom:12}}>Jaminan Keamanan !</Text>
				<Text style={{marginBottom:100}}>Tidak Perlu khawatir tentang masalah Keamanan</Text>
				 <Image source={require('../../components/assets/icon/protection.png')} resizeMode="contain" style={{margin:15, width:220, height:220}} />		
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'white',
		paddingTop:64
	}
})
