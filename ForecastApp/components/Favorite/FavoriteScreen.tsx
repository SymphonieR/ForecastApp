import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { getWeatherIcon } from "../Forecast/ForecastItem";

function FavoriteScreen(props: any) {
    let cities = props.cities;
    console.log(cities);
    function renderCities() {
        return Array.from(cities).map((city : string) => {
            return (
            <View style={styles.listItem}>
                <Text>{city}</Text>
                <View style={styles.iconWrapper}>
                    <Text>9°C</Text>
                    <Text style={styles.icon}>{getWeatherIcon("Rain")}</Text>
                </View>
            </View>
            );
        });
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.h1}>Favorites</Text>
            <ScrollView style={styles.listWrapper} contentContainerStyle={styles.listContent}>
                {
                    renderCities()
                }
            </ScrollView>
        </View>
    )
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(FavoriteScreen);

const styles = StyleSheet.create({
    wrapper: {
        alignItems: "center"
    },
    h1: {
        fontSize: 30,
        marginTop: 40,
    },
    listWrapper: {
        width: "100%"
    },
    listContent: {
        alignItems: "center"
    },
    listItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%"
    },
    iconWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginLeft: 10
    }
})