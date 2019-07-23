import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Card, ListItem, Button, Divider} from 'react-native-elements'

import Styles from '../../../styles';

class CPUHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Home",
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
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        ),
        headerRight: (
            <TouchableOpacity
                style={Styles.headerButton}>
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        ),
    })
    render() {
        return (
            <View style={Styles.container}>
            <ScrollView>
<Card
  image={require('../../../components/assets/icon/protection.png')}
  resizeMode="center"
  imageStyle={{flex: 1,
        marginTop:20,
        width:100,
        height:100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems: 'center'}}
  >

  <Text style={{marginBottom: 10, alignSelf:'center',fontSize:17}}>
    Status Akun 
  </Text>
  <Text style={{marginBottom: 10, alignSelf:'center',fontSize:20, color:'#e74c3c'}}>
    Belum Aktif
  </Text>
  <Divider style={{ backgroundColor: '#2c3e50', marginBottom:5}} />
  <Text style={{marginBottom: 10,textAlign:'left'}}>
  Aktifasi Akun mu sebelum 15 hari, Agar kamu dapat mengunakan semua fitut aplikasi ini
  </Text>

  <Button
      onPress={() => this.props.navigation.navigate("Aktivasi")}
    buttonStyle={{borderRadius: 0, backgroundColor:'#2ecc71', padding:20, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='AKTIVASI' />
</Card>

    <Card
  resizeMode="center"
  imageStyle={{flex: 1,
        marginTop:20,
        width:100,
        height:100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf:'center',
        alignItems: 'center'}}
  >

  <Text style={{marginBottom: 10, alignSelf:'center',fontSize:17}}>
    Saldo Total 
  </Text>
  <Text style={{marginBottom: 10, alignSelf:'center',fontSize:40, color:'#2ecc71'}}>
    Rp. 0 
  </Text>
  <Divider style={{ backgroundColor: '#2c3e50', marginBottom:5, width:240, alignSelf:'center'}} />
                <Image source={require('../../../components/assets/icon/purse.png')}  style={{margin:15, alignSelf:'center', width:120, height:120}} />
  <Text style={{marginBottom: 10,textAlign:'center', fontSize:20}}>
  Cara menambahkan saldo ke akun ?
  </Text>

  <Button
    buttonStyle={{borderRadius: 0, backgroundColor:'#e67e22', padding:10, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='Tambah Saldo' />
</Card>



 </ScrollView>
            </View>
        );
    }
}



export default CPUHome;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 400,
  },
  imagelogoContainer:{
  padding:700,  
  justifyContent: 'center',
  alignItems: 'center'
}
});