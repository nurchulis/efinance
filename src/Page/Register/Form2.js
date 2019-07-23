import React, { Component } from 'react';
import { View, Text,Platform, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';
import { Input, Card, Button } from 'react-native-elements';
import OtpInputs from 'react-native-otp-inputs'

class Form2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            step:0,
        };

        global.config = {
            headers: {
                'X-Access-Token': ''
            }   
        }

        this._gotoHome()
        // this.checkPermission()
    }

    _gotoHome(){
       // this.props.navigation.navigate('Splash')    
    }
//config header pencarian
    static navigationOptions = {
        headerTitle: "Verifikasi Nomor Handphone",
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
            fontSize:16
        },
        headerStyle: {
            elevation: 1,
            backgroundColor: '#04a3e7',
            height: 50
        },
    }

      changeText(newText) {
        this.setState({text: newText});
        let nilai = this.state.step;
        this.setState({step: nilai+1});
        //alert(this.state.step)
        if(this.state.step === 3 ){
            this.props.navigation.navigate("Form3")
        }
    }

    render() {
        return (
           <View style={styles.MainContainer}>
            <Image source={require('../../components/assets/icon/protection.png')} resizeMode="contain" style={{margin:15, width:150, height:150}} />
           <Text style={{marginBottom:20, fontSize:25, color:'white'}}>Masukan PIN OTP</Text>
           <View style={{backgroundColor:'white', height:60, paddingBottom:10, width:'80%', borderRadius:5}}>
        <OtpInputs style={{backgroundColor:'white', color:'red', fontSize:50}} handleChange={code => this.changeText(code)} numberOfInputs={4} />
           </View> 
           <Text style={{color:'white', fontSize:17, marginTop:20}}>Anda Belum mendapatkan Kode Pin? </Text>
           <Text style={{color:'yellow', fontSize:17, marginTop:20}}>
           Kirim Kode PIN ulang</Text>
      </View>
        );
    }
}

export default Form2; 
const widthStyle = {
  fontSize:54
}                  
const styles = StyleSheet.create(
{
    MainContainer:
    {
        padding:5,  
        flex: 1,
        backgroundColor: '#03A9F4', 
        alignItems: 'center',
        paddingTop:100,
    },
    bottomView:{
 
      width: '120%', 
      height: 50, 
      backgroundColor: '#03A9F4', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
 
    textStyle:{
 
      color: '#fff',
      fontSize:22
    }
});