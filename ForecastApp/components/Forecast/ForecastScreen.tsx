import { FlatList, StyleSheet, View, ActivityIndicator, ImageBackground  } from 'react-native';
import React, { useState } from 'react';
import fetchForecast from '../../services/ForecastDataFetcher';
import WeatherItem from './WeatherItem';
import ForecastItem from './ForecastItem';

async function loadForecast(callback : (forecasts: any) => void) {
    let forecasts = await fetchForecast();
    callback(forecasts);
}
export default function ForecastScreen() {
    const [forecasts, setForecasts] = useState(null);

    loadForecast(setForecasts);
    if (forecasts == null) {
        return (
            <View>
                <ActivityIndicator size="large" color="white"/>
            </View>
        )
    }

    return (
        <ImageBackground 
            source={require('../../assets/img/gradient_background.jpg')} 
            style={styles.backgroundImage}>
            <WeatherItem currentWeather={forecasts.list[0]}/> 
            <View style={styles.forecastWrapper}>
                <FlatList 
                horizontal={true}
                data={forecasts.list} 
                keyExtractor={(item : any) => item.dt.toString()}
                renderItem = {({item}) => <ForecastItem forecast={item} />}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    forecastWrapper: {
        height: 120, 
        paddingVertical: 15,
        borderTopColor: "lightgrey",
        borderBottomColor: "lightgrey",
        borderTopWidth: 0.5,
        borderBottomWidth: 1
    },
    backgroundImage: {
        width: '100%', 
        height: '100%'
    }
});
