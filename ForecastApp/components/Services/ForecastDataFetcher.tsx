import fetch from 'node-fetch';

const API_KEY : string = "8c3cf04e527f9bf47b22844799c145d4";

export default async function fetchForecast() {
    const url : string = "http://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&appid=" + API_KEY;
    try {
        const response : Response = await fetch(url);
        return await response.json();
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}
