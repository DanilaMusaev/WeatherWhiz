import type { CurrentWeather, ForecastDay, UnitType } from '../store/types';

export interface ApiClient {
    fetchWeather: (params: WeatherQueryParams) => Promise<CurrentWeather>;
    fetchForecast: (params: WeatherQueryParams) => Promise<ForecastDay[]>;
}

export interface WeatherQueryParams {
    lat: number;
    lon: number;
    unit: UnitType;
}
