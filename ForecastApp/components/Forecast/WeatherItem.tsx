import React from 'react';
import { StyleSheet, View, Text, Button, TouchableHighlightBase } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Star from '../Star/Star';
import { connect } from 'react-redux';

function WeatherItem(props : any) {
    const city = props.city;
    const weather = props.currentWeather;

    function toggleFavorite() {
        const action = { type: "TOGGLE_FAVORITE", value: city};
        props.dispatch(action);
    }
    
    return (
    <View style={styles.contentWrapper}>
        <View style={[styles.itemCentered, styles.contentCentered]}>
            <View style={{flexDirection: "row", justifyContent: "center"}}>
                <Text style={[styles.whiteText, styles.cityContainer, { marginLeft: 50, marginRight: 10}]}> {city} </Text>
                <Star callback={toggleFavorite}/>
            </View>
            
            <Text style={[styles.whiteText, styles.weatherContainer]}> {weather.weather[0].main} </Text>
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

const mapStateToProps = (state) => {
    return { cities: state.cities}
}

export default connect(mapStateToProps)(WeatherItem);


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
