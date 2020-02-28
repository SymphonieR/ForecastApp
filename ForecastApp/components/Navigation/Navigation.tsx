import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ForecastScreen from '../Forecast/ForecastScreen';
import FavoriteScreen from '../Favorite/FavoriteScreen';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home"
        tabBarOptions={{style: styles.tabNavigation, labelStyle: styles.label}}>
            <Tab.Screen name="Home" component={ForecastScreen} 
            options={{ tabBarIcon: () => <Text style={ styles.text }><Icon name="ios-home" size={20}/></Text> }} />
            <Tab.Screen name="Favorites" component={FavoriteScreen} 
            options={{ tabBarIcon: () => <Text style={ styles.text }><Icon name="ios-star" size={20}/></Text> }} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    tabNavigation: {
        width: "100%",
        backgroundColor: "transparent",
        borderWidth: 0,
        shadowOpacity: 0,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: 0,
        fontSize: 20,
        color: "black"
    },
    label: {
        color: "white",
        backgroundColor: "transparent",
        paddingTop: 15,
        width: "100%",
        height: 45
    },
    text: {
        color: "white",
        fontSize: 20
    }
})
