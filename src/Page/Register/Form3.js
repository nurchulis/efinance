import React, { Component } from 'react';
import { View, Text,Platform, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';
import { Input, Card, Button } from 'react-native-elements';


class Form3 extends Component {
    constructor(props) {
        super(props)
         this.state = {
            text: '',
            step:0,
            ktp:false,
            selfi:false,
            tandatangan:false,
            backgroundKTP:'white',
            colorKTP:'#03A9F4',

            backgroundSelfie:'white',
            colorSelfie:'#03A9F4',

            backgroundTTD:'white',
            colorTTD:'#03A9F4',

            step_ktp:0,
            backgroundButton:'#bdc3c7',
            buttonStatus:true
        };

        global.config = {
            headers: {
                'X-Access-Token': ''
            }   
        }

        this._gotoHome()
        // this.checkPermission()
    }
    cek_ktp = () => {
      this.setState({backgroundKTP:'#2ecc71', colorKTP:'white'})
      let nilai = this.state.step_ktp
      this.setState({step_ktp:nilai+1})
    }

    cek_selfie = () => {
      this.setState({backgroundSelfie:'#2ecc71', colorSelfie:'white'})
      let nilai = this.state.step_ktp
      this.setState({step_ktp:nilai+1})
    }
    cek_ttd = () => {
      this.setState({backgroundTTD:'#2ecc71', colorTTD:'white'})
      let nilai = this.state.step_ktp
      this.setState({step_ktp:nilai+1})
      
       if(this.state.step_ktp >= 2){
        this.setState({backgroundButton:'#FF9800', buttonStatus:false})
    }else{
        this.setState({buttonStatus:true})
    }
    }

    handleChoosePhoto = () => {
      this.setState({backgroundKTP:'#2ecc71', colorKTP:'white'})
      let nilai = this.state.step_ktp
      this.setState({step_ktp:nilai+1})
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        this.setState({ photo: response });
      }
    });
  };
    
    cek_disabled_ktp(){
      if(this.state.ktp===false){
        return true;
      }else {
        return false;
      }
    }
    _gotoHome(){
   
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
  <Text style={{color:'#03A9F4',marginBottom: 10, marginLeft:10, fontSize:30}}>
    Foto KTP dan tanda tangan
  </Text>
            <Text style={{marginBottom: 10, marginLeft:10}}>Dokumen pribadi kamu dibutuhkan untuk validasi identitas sesuai ketentuan OJK</Text>

      <Button
  onPress={this.handleChoosePhoto}
  title="Foto KTP"
  icon={{ name: 'camera-alt', color:this.state.colorKTP, size:30,  }}
  type="outline" 
  iconContainerStyle={{marginRight: 20 }}
  titleStyle={{color:this.state.colorKTP}}
  buttonStyle={{ justifyContent: 'flex-start', marginBottom:20, height:60, backgroundColor:this.state.backgroundKTP}}
/>              
            <Button
  onPress={this.cek_selfie}
  title="Selfi dengan KTP"
  icon={{ name: 'camera-alt', color:this.state.colorSelfie, size:30 }}
  type="outline" 
  iconContainerStyle={{marginRight: 20 }}
  titleStyle={{color:this.state.colorSelfie}}
  buttonStyle={{ justifyContent: 'flex-start', marginBottom:20, height:60, backgroundColor:this.state.backgroundSelfie}}
/>
            <Button
  onPress={this.cek_ttd}
  title="Foto Tanda Tangan"
  icon={{ name: 'camera-alt', color:this.state.colorTTD, size:30 }}
  type="outline" 
  iconContainerStyle={{marginRight: 20 }}
  titleStyle={{color:this.state.colorTTD}}
  buttonStyle={{ justifyContent: 'flex-start', marginBottom:20, height:60, backgroundColor:this.state.backgroundTTD}}
/>
            </Card> 
            <TouchableOpacity style={{
      width: '120%', 
      height: 50, 
      flex:1,
      backgroundColor:this.state.backgroundButton, 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    }} disabled={this.state.buttonStatus} 
                  onPress={() => this.props.navigation.navigate("Form2")}>
                 <View>

                  <Text style={styles.textStyle}>Lanjut</Text>

               </View>
</TouchableOpacity>
 
            </View>
        );
    }
}

export default Form3;                   
const styles = StyleSheet.create(
{
    MainContainer:
    {
        padding:5,
        flex: 1,
        alignItems: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
    },
 
    textStyle:{

      color: '#ecf0f1',
      fontSize:25
    }
});