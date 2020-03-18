import React, { useState } from 'react';
import { SearchBar, getIconType } from 'react-native-elements';
import { setCity } from '../../services/ForecastDataFetcher';

export default function CitySearchBar() {
    const [search, setSearch] = useState("");

    return (
      <SearchBar
        placeholder="Type city name..."
        onChangeText={ (text : string) => { setSearch(text); } }
        value={search}
        platform="ios"
        onSubmitEditing= { (event) => setCity(event.nativeEvent.text) }
      />
    )
}
