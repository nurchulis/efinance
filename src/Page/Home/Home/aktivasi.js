import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Styles from '../../../styles';

class Aktivasi extends Component {
        static navigationOptions = ({ navigation }) => ({
        title: "Aktivasi Akun",
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
    })
    render() {
        return (
            <View style={styles.container}>
                <Text>CPU Details</Text>

            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})


export default Aktivasi;