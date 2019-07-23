import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import Home from './home';
import Aktivasi from './aktivasi';


export default createStackNavigator({
    Home,
    Aktivasi
});