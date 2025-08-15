import type { CurrentWeatherResponse, ForecastResponse } from './types';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const fetchWeather = async (
    lat: number,
    lon: number,
    unit: 'metric' | 'imperial'
): Promise<CurrentWeatherResponse> => {
    // https://api.openweathermap.org/data/2.5/weather?lat=55.7558&lon=37.6176&appid=${APIKEY}&units=metric
    const response = await fetch(`/mockData/currWeather.json`);
    const data = await response.json();
    return data as CurrentWeatherResponse;
};

export const fetchForecast = async (
    lat: number,
    lon: number,
    unit: 'metric' | 'imperial'
): Promise<ForecastResponse> => {
    // https://api.openweathermap.org/data/2.5/forecast?lat=55.7558&lon=37.6176&appid=${APIKEY}&units=metric
    const response = await fetch(`/mockData/hourlyForecast.json`);
    const data = await response.json();
    return data as ForecastResponse;
};
