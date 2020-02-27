import { FlatList, ActivityIndicator, Text, View  } from 'react-native';
import React from 'react';

export class ForecastAPI {
    static readonly apiKey : string = "8c3cf04e527f9bf47b22844799c145d4";
    constructor() {}

    static fetchForecast() {
        const url = "http://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&appid=" + this.apiKey;
        return fetch(url)
        .then((response) => { return response.json(); })
        .catch(function(error) { throw error; });
    }
}