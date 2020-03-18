import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ForecastScreen from '../Forecast/ForecastScreen';
import FavoriteScreen from '../Favorite/FavoriteScreen';
import { StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchScreen from '../Search/SearchScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    const defaultTabBarOptions = {style: styles.tabNavigation, tabStyle: styles.tab, labelStyle: styles.label};
    const blackTabBarOptions = {style: styles.tabNavigation, tabStyle: styles.tab, labelStyle: styles.labelBlack};

    const [tabBarOptions, setTabBarOptions] = useState(defaultTabBarOptions);
    const [textStyle, setTextStyle] = useState(styles.text);
    return (
        <NavigationContainer /*onStateChange={(state)=> {
            if (state.index == 1) {
                setTabBarOptions(blackTabBarOptions);
                setTextStyle(styles.textBlack);
            } else {
                setTabBarOptions(defaultTabBarOptions);
                setTextStyle(styles.text);
            }
        }}*/ >
            <Tab.Navigator initialRouteName="Home"
            tabBarOptions={tabBarOptions}
            >
                <Tab.Screen name="Home" component={ForecastScreen} 
                options={{ tabBarIcon: () => <Text style={ textStyle }><Icon name="ios-home" size={20}/></Text> }} />
                <Tab.Screen name="Search" component={SearchScreen}
                options={{ tabBarIcon: () => <Text style={ textStyle }><Icon name="ios-search" size={20}/></Text>}} />
                <Tab.Screen name="Favorites" component={FavoriteScreen} 
                options={{ tabBarIcon: () => <Text style={ textStyle }><Icon name="ios-star" size={20}/></Text> }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabNavigation: {
        width: "100%",
        height: 50,
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        
        backgroundColor: "transparent",
        borderWidth: 0,
        borderColor: "transparent",
        borderTopWidth: 0,
        shadowOpacity: 0,
        elevation: 0,

        fontSize: 20,
    },
    tab: {
        backgroundColor: "transparent",
        borderWidth: 0,
        shadowOpacity: 0,
    },
    label: {
        color: "white",
        backgroundColor: "transparent",
        paddingTop: 15,
        width: "100%",
        height: 45,
        shadowOpacity: 0
    },
    text: {
        color: "white",
        fontSize: 20
    },
    labelBlack: {
        color: "grey",
        backgroundColor: "transparent",
        paddingTop: 15,
        width: "100%",
        height: 45,
        shadowOpacity: 0
    },
    textBlack: {
        color: "grey",
        fontSize: 20
    }
})
