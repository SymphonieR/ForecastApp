const API_KEY = "8c3cf04e527f9bf47b22844799c145d4";

export default async function fetchForecast() {
    const url = "http://api.openweathermap.org/data/2.5/forecast?q=Paris&units=metric&appid=" + API_KEY;
    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch (error) {
        throw error;
    }
}
