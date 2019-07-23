import React, { Component } from 'react'
import { 
  Text, 
  View, 
  Image, 
  StatusBar, 
  KeyboardAvoidingView, 
  PixelRatio, 
  StyleSheet, 
  AsyncStorage,
  Keyboard,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native'
import { createDrawerNavigator,DrawerItems } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Home from './Page/Home';  //Tab Nav
import Profile from './Page/Profile'; //Stack Nav
import { Divider} from 'react-native-elements';
import { IndicatorViewPager, PagerDotIndicator, ViewPager } from 'rn-viewpager'


  tampilkan_profil= (tenant) => {
    
  } 

const CustomDrawerComponents = (navigation)=> (
  <SafeAreaView style={{flex:1}}>
    <View style={{flexDirection:'row', padding:10}}>
    <Image source={require('./components/assets/icon/user.jpeg')} resizeMode="contain" style={{margin:15, width:70, height:70, borderRadius:200}} />
    <View style ={{justifyContent:'center', margin:5}}>
      <Text style={{fontWeight:'700', fontSize:20, color:'white'}}>Miqdad Santosa P</Text>
      <TouchableOpacity onPress={() => this.tampilkan_profil()}>
         <Text style={{fontWeight:'200', fontSize:15, color:'white'}}>Tampilkan Profil</Text>
        </TouchableOpacity>
    </View>
  </View>

   <ScrollView>
      <DrawerItems {...navigation} />
    </ScrollView>
  <View style={{flexDirection:'row', padding:10}}>
    <View style ={{justifyContent:'center', margin:5}}>
      <Text style={{fontWeight:'700', fontSize:25, color:'white', marginLeft:20,fontWeight:'700'}}><Icon name="sign-out-alt" size={24} /> Keluar</Text>
    </View>
  </View>
  </SafeAreaView>
  )

export default createDrawerNavigator({
  Nurchulis: {
    screen: Home,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <Text style={{fontSize:23, color:'white', marginLeft:20, paddingBottom:10, paddingTop:10}} selectedColor='red'>Dashboard</Text>,
      drawerIcon: ({ tintColor }) => <Icon name="home" size={24} style={{color:'white'}} />,
    }
  },
  Tabungan: {
    screen: Home,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <Text style={{fontSize:23, marginLeft:20, color:'white', paddingBottom:10, paddingTop:10}}>Tabungan Tanah</Text>,
      drawerIcon: ({ tintColor }) => <Icon name="book" size={24} style={{color:'white'}}/>,
    }
  },
  Financial: {
    screen: Profile,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <Text style={{fontSize:23, marginLeft:20, color:'white', paddingBottom:10, paddingTop:10}}>Financial Plant</Text>,
      drawerIcon: ({ tintColor }) => <Icon name="seedling" size={24} style={{color:'white'}} />,
    }
  },

  Produk: {
    screen: Profile,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <Text style={{fontSize:23, marginLeft:20, color:'white', paddingBottom:10, paddingTop:10}}>Produk</Text>,
      drawerIcon: ({ tintColor }) => <Icon name="box" size={24} style={{color:'white'}} />,
    }
  },
  Investasi: {
    screen: Profile,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <Text style={{fontSize:23, marginLeft:20, color:'white', paddingBottom:10, paddingTop:10}}>Investasi</Text>,
      drawerIcon: ({ tintColor }) => <Icon name="money-bill" size={24} style={{color:'white'}}/>,
    }
  },

  Garis: {
    screen: Profile,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <React.Fragment><Divider style={{ backgroundColor: 'white', marginBottom:5, width:'100%', alignSelf:'center'}} /></React.Fragment>,
    }
  },

  Jadwal: {
    screen: Profile,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <Text style={{fontSize:23, marginLeft:20, color:'white', paddingBottom:10, paddingTop:10}}>Jadwal Pelatihan</Text>,
      drawerIcon: ({ tintColor }) => <Icon name="calendar" size={24} style={{color:'white'}}/>,
    }
  },

  Join: {
    screen: Profile,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <Text style={{fontSize:23, marginLeft:20, color:'white', paddingBottom:10, paddingTop:10}}>Join Beli Tanah</Text>,
      drawerIcon: ({ tintColor }) => <Icon name="handshake" size={24} style={{color:'white'}}/>,
    }
  },
  

  Tambah: {
    screen: Profile,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <Text style={{fontSize:23, marginLeft:20, color:'white', paddingBottom:10, paddingTop:10}}>Tambah Listing</Text>,
      drawerIcon: ({ tintColor }) => <Icon name="plus-square" size={24} style={{color:'white'}}/>,
    }
  },

  List: {
    screen: Profile,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <Text style={{fontSize:23, marginLeft:20, color:'white', paddingBottom:10, paddingTop:10}}>Daftar Listing Tanah</Text>,
      drawerIcon: ({ tintColor }) => <Icon name="list" size={24} style={{color:'white'}}/>,
    }
  },
  

  Garis_two: {
    screen: Profile,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <React.Fragment><Divider style={{ backgroundColor: 'white', marginBottom:5, width:'100%', alignSelf:'center'}} /></React.Fragment>,
    }
  },


  Help: {
    screen: Profile,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <Text style={{fontSize:23, marginLeft:20, color:'white', paddingBottom:10, paddingTop:10}}>Bantuan</Text>,
      drawerIcon: ({ tintColor }) => <Icon name="hands-helping" size={24}  style={{color:'white'}}/>,
    }
  },
   Tentang: {
    screen: Profile,
    navigationOptions: {
      drawerLabel:({ tintColor }) => <Text style={{fontSize:23, marginLeft:20, color:'white', paddingBottom:10, paddingTop:10}}>Tentang</Text>,
      drawerIcon: ({ tintColor }) => <Icon name="info" size={24}  style={{color:'white'}}/>,
    }
  },

},
{
  contentComponent: CustomDrawerComponents,
  drawerBackgroundColor: '#04a3e7',
}
);