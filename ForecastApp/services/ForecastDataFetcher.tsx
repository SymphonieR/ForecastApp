const API_KEY = "8c3cf04e527f9bf47b22844799c145d4";
var _city : string = "Paris";

export async function setCity(city: string) {
    let previousCity = _city;
    _city = city;

    let response = await fetchForecast();
    if (response == null) {
        _city = previousCity;
    }
}

export default async function fetchForecast() {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${_city}&units=metric&appid=${API_KEY}`;
    try {
        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.cod != "200") {
            return null;
        }

        return responseJson;
    }
    catch (error) {
        throw error;
    }
}
