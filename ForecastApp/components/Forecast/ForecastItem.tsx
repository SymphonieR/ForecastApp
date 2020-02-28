import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const iconMap = new Map([
    ["Clouds", "ios-cloudy"], 
    ["Rain", "ios-rainy"],
    ["Clear", "ios-sunny"], 
]);

function extractHours(datetime: string) {
    try {
        return " " + (datetime.split(" ")[1]).split(":")[0] + "h";
    }
    catch {
        return "";
    }
}

export default function ForecastItem(props: any) {
    const forecast : any = props.forecast;
    const weather : string = forecast.weather[0].main;

    return (
        <View style={styles.contentWrapper}>
            <View style={styles.gridElement}><Text style={styles.text}> { extractHours(forecast.dt_txt) } </Text></View>
            <View style={styles.gridElementMidde}>
                <Text style={styles.text}><Icon name={iconMap.get(weather)} size={30} /></Text>
            </View>
            <View style={styles.gridElement } ><Text style={styles.text}> { Math.round(forecast.main.temp) } </Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        justifyContent: "center", 
        marginHorizontal: 8.0
    },
    text: {
        textAlign: "center", 
        color: "white"
    },
    gridElement: {
        flex: 1
    },
    gridElementMidde: {
        flex: 1, 
        marginTop: 5, 
        marginBottom: 15
    }
});
