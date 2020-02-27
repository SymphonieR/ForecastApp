import fetchForecast from "../services/ForecastDataFetcher";
global.fetch = require("node-fetch");

test("Fetch data from Forecast API", async () => {
    const response = await fetchForecast();

    expect(response.cod).toBe("200");
    expect(response.city.name).toBe("Paris");
    expect(response.list.length).toBe(response.cnt);

    const currentWeather = response.list[0];
    expect(typeof currentWeather.dt).toBe("number");
    expect(typeof currentWeather.dt_txt).toBe("string");
    expect(typeof currentWeather.main.temp).toBe("number");
    expect(typeof currentWeather.main.feels_like).toBe("number");
    expect(typeof currentWeather.main.humidity).toBe("number");
    expect(typeof currentWeather.wind.speed).toBe("number");
});
