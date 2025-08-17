import type { CurrentWeather, ForecastDay } from '../../store/types';
import { getWeatherCondition } from '../../utils/getWeatherCondition';
import { unixTimestampHHMM } from '../../utils/unixTimestampConv';
import type { ApiClient, WeatherQueryParams } from '../api-client';
import type { CurrentWeatherResponse, ForecastResponse } from '../types';

class MockApiClient implements ApiClient {
    public async fetchWeather(
        params: WeatherQueryParams
    ): Promise<CurrentWeather> {
        const response = await fetch(`/mockData/currWeather.json`);
        const data = (await response.json()) as CurrentWeatherResponse;
        // Преобразование полученных данных к необходимым
        const mappedData: CurrentWeather = {
            temp: Math.round(data.main.temp),
            feels_like: Math.round(data.main.feels_like),
            wind_speed: data.wind.speed,
            humidity: data.main.humidity,
            sunrise: unixTimestampHHMM(data.sys.sunrise),
            sunset: unixTimestampHHMM(data.sys.sunset),
            condition: getWeatherCondition(data.weather[0].main),
        };
        return mappedData;
    }

    public async fetchForecast(
        params: WeatherQueryParams
    ): Promise<ForecastDay[]> {
        const response = await fetch(`/mockData/hourlyForecast.json`);
        const data = (await response.json()) as ForecastResponse;
        // Преобразование полученных данных к необходимым
        const firstFullDayIndex = data.list.findIndex((day) =>
            day.dt_txt.endsWith('00:00:00')
        );
        const mappedData: ForecastDay[] = data.list
            .slice(firstFullDayIndex)
            .filter((_, index) => index % 8 === 0)
            .map((day) => ({
                date: day.dt_txt.split(' ')[0],
                temp: Math.round(day.main.temp),
                condition: getWeatherCondition(day.weather[0].main),
            }));
        return mappedData;
    }
}

export default new MockApiClient();
