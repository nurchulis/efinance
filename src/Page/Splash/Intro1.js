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


var {height, width} = Dimensions.get('window')

export default class Intro1 extends Component {
	constructor(props) {
	    super(props)
	}

	render () {
		return (
			<View style={styles.container}>
				<Text style={{fontSize:20, marginBottom:12}}>Investasi Tanah</Text>
					<Text style={{marginBottom:100}}>Jadikan Kami Sebagai tempat Investasi Anda</Text>
                <Image source={require('../../components/assets/icon/purse.png')} resizeMode="contain" style={{margin:15, width:220, height:220}} />				  
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
