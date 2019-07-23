import React, { Component } from 'react';
import { View, Text,Platform, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';
import { Input, Card, Button } from 'react-native-elements';

class Form1 extends Component {
    constructor(props) {
        super(props)

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
          static navigationOptions = ({ navigation }) => ({
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
         headerRight: (
            <TouchableOpacity
                style={Styles.headerButton}>
                <Icon name="info-circle" style={{color:'white'}} size={20} />
            </TouchableOpacity>
        ),
    })

    render() {
        return (
            <View style = { styles.MainContainer }>
        <Card style={{paddingBottom:60}}>
  <Text style={{color:'#03A9F4',marginBottom: 10, marginLeft:10, fontSize:25}}>
    Masukan e-mail dan nomor handphone
  </Text>
            <Text style={{marginBottom: 10, marginLeft:10}}>Email dan nomor handphone untuk mengubungkan akun aplikasi ini</Text>

                <Input placeholder='Email' style={{marginBottom:40}}/>
                <Text style={{marginLeft:10}}>Masukan e-mail anda pada akun aplikasi</Text>
 
                <Input placeholder='Handphone' style={{marginBottom: 40}}/>
                <Text style={{marginLeft:10, marginBottom:'40%'}}>Masukan nomor anda untuk diverifikasi</Text>
  
            </Card>
                 <View style={ styles.bottomView} >

                  <Text style={styles.textStyle}     
                  onPress={() => this.props.navigation.navigate({routeName: 'Form2', transitionStyle: 'inverted'})}>Lanjut</Text>

               </View>
 
 
            </View>
        );
    }
}

export default Form1;                   
const styles = StyleSheet.create(
{
    MainContainer:
    {
        padding:5,
        flex: 1,
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
 
    bottomView:{
 
      width: '120%', 
      height: 50, 
      flex:1,
      backgroundColor: '#FF9800', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
 
    textStyle:{

      color: '#fff',
      fontSize:25
    }
});