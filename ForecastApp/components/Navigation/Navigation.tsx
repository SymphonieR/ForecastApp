import { NavigationContainer, createNavigatorFactory } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ForecastFetcher } from '../Forecast/ForecastFetcher'; 
import { Favorites } from '../Favorites/Favorites';

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Forecast" component={ForecastFetcher} />
        <Tab.Screen name="Favorites" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
