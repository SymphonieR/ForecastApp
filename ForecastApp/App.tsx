import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { ForecastFetcher } from './components/Forecast/ForecastFetcher';

export default class HelloWorldApp extends Component {
    render() {
        return (
            <ImageBackground 
            source={require('./images/gradient_background.jpg')} 
            style={{width: '100%', height: '100%'}}>
                <ForecastFetcher></ForecastFetcher>
            </ImageBackground>
        );
    }
}
