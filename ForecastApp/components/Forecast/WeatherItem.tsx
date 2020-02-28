import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function WeatherItem(props : any) {
    const weather = props.currentWeather;
    return (
    <View style={styles.contentWrapper}>
        <View style={[styles.itemCentered, styles.contentCentered]}>
            <Text style={[styles.whiteText, styles.cityContainer]}>Paris</Text>
            <Text style={[styles.whiteText, styles.weatherContainer]}>Clear</Text>
            <Text style={[styles.whiteText, styles.tempContainer]}>  
                { " " + Math.round(weather.main.temp) }°
            </Text>
        </View>
        <View style={styles.detailsContainer}>
            <View style={styles.itemCentered}>
                <Text style={styles.whiteText}><Icon name="ios-thermometer" size={30}/></Text>
                <Text style={styles.whiteText}>Feels like</Text>
                <Text style={styles.whiteText}> { Math.round(weather.main.feels_like) } °C</Text>
            </View>
            <View style={styles.itemCentered}>
                <Text style={styles.whiteText}><Icon name="ios-cloudy" size={30}/></Text>
                <Text style={styles.whiteText}>Wind</Text>
                <Text style={styles.whiteText}> { weather.wind.speed } km/h </Text>
            </View>
            <View style={styles.itemCentered}>
                <Text style={styles.whiteText}><Icon name="md-water" size={25}/></Text>
                <Text style={styles.whiteText}>Humidity</Text>
                <Text style={styles.whiteText}> { weather.main.humidity } % </Text>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    contentWrapper: {
        height: "70%", 
        justifyContent: "flex-end"
    },
    cityContainer: {
        fontSize: 25
    },
    weatherContainer: {
        fontSize: 17
    },
    tempContainer: {
        fontSize: 90, 
        marginLeft: 15, 
        fontWeight: "100", 
        fontFamily: "sans-serif-light"
    },
    whiteText: {
        color: "white"
    },
    contentCentered: {
        justifyContent: "center"
    },
    itemCentered: {
        alignItems: "center"
    },
    detailsContainer: {
        flexDirection: "row", 
        justifyContent: "space-evenly", 
        alignItems: "flex-end", 
        marginVertical: 30
    }
});
  