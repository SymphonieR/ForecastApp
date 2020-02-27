import { FlatList, Text, View  } from 'react-native';
import React from 'react';
import { ForecastAPI } from '../API/ForecastAPI';
import Icon from 'react-native-vector-icons/Ionicons';

// TO DO:
// create styles const

export interface Props {
    forecast: any;
}

// Create a parent class
export class ForecastItem extends React.Component<Props> {
    forecast : any;
    iconMap = new Map([
        ["Clouds", "ios-cloudy"], 
        ["Rain", "ios-rainy"],
        ["Clear", "ios-sunny"], 
    ]);

    constructor(props: any) {
        super(props);   
    }
  
    extractHours(datetime: string) {
        try {
            return " " + (datetime.split(" ")[1]).split(":")[0] + "h";
        }
        catch {
            return "";
        }
    }

    render() {
        const forecast : any = this.props.forecast;
        const weather : string = forecast.weather[0].main;

        return (
            <View style={{ justifyContent: "center", marginHorizontal: 8.0 }}>
                <View style={{ flex: 1 }}><Text style={{ textAlign: "center", color: "white"}}> { this.extractHours(forecast.dt_txt) } </Text></View>
                <View style={{ flex: 1, marginTop: 5, marginBottom: 15 }}>
                    <Text style={{ textAlign: "center", color: "white"}}>  <Icon name={this.iconMap.get(weather)} size={30} /> </Text>
                </View>
                <View style={{ flex: 1 }}><Text style={{ textAlign: "center", color: "white"}}> { Math.round(forecast.main.temp) } </Text></View>
            </View>
        )
    }
}

export class WeatherItem extends React.Component<Props> {
    constructor(props: any) {
        super(props);
    }

    render() {
        // TO DO: create component for details
        const weather = this.props.forecast;
        if (weather == undefined) {
            return (
                <View></View>
            )
        } 
        
        console.log(weather);
        return (
            <View style={{ height: "75%" , justifyContent: "flex-end" }}>
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 25 }}>Paris</Text>
                    <Text style={{ color: "white", fontSize: 17 }}>Clear</Text>
                    <Text style={{ color: "white", fontSize: 90, marginLeft: 15, fontWeight: "100", fontFamily: "sans-serif-light"}}>  
                        { " " + Math.round(weather.main.temp) }°
                    </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", alignItems: "flex-end", marginVertical: 30 }}>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ color: "white"}}><Icon name="ios-thermometer" size={30}/></Text>
                        <Text style={{ color: "white"}}>Feels like</Text>
                        <Text style={{ color: "white"}}> { Math.round(weather.main.feels_like) } °C</Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ color: "white"}}><Icon name="ios-cloudy" size={30}/></Text>
                        <Text style={{ color: "white"}}>Wind</Text>
                        <Text style={{ color: "white"}}> { weather.wind.speed } km/h </Text>
                    </View>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ color: "white"}}><Icon name="md-water" size={25}/></Text>
                        <Text style={{ color: "white"}}>Humidity</Text>
                        <Text style={{ color: "white"}}> { weather.main.humidity } % </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export class ForecastFetcher extends React.Component {
    forecasts : any = { list: [] };
    constructor(props: any) {
        super(props);
        this.load();
    }

    load() {
      ForecastAPI.fetchForecast().then(data => {
        this.forecasts = data;
        this.forceUpdate();
      });
    }

    render() {
        // TO DO : manage non existing list
        return(
            <View>
                <WeatherItem forecast={ this.forecasts.list[0] }/> 
                <View style={{ height: 120, paddingVertical: 15, backgroundColor: "rgba(255, 255, 255, 0.1)"}}>
                    <FlatList 
                    horizontal={true}
                    data={this.forecasts.list} 
                    keyExtractor={(item : any) => item.dt.toString()}
                    renderItem = {({item}) => <ForecastItem forecast={item} />}
                    />
                </View>
            </View>
        )
    }
}