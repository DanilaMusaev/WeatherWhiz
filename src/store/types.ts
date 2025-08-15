import type { CityName } from "../data/citiesList";

export type Weather = 'Clear' | 'Cloudy' | 'Rainy' | 'Thunderstorm';

export interface CurrentWeather {
    temp: number;
    feels_like: number;
    wind_speed: number;
    humidity: number;
    sunrise: `${string}:${string}`; // HH:MM
    sunset: `${string}:${string}`; // HH:MM
    condition: Weather;
}

export interface ForecastDay {
    date: string; // "YYYY-MM-DD"
    temp: number;
    condition: Weather;
}

export type UnitType = 'metric' | 'imperial';

interface WeatherState {
    city: CityName;
    unit: UnitType;
    current: CurrentWeather | null;
    forecast: ForecastDay[] | null;
    isLoading: boolean;
    error: string | null;
}

interface WeatherActions {
    setWeatherData: (data: {
        current: CurrentWeather;
        forecast: ForecastDay[];
        city: CityName;
    }) => void;
    setUnit: (unit: UnitType) => void;
    setCity: (city: CityName) => void;
    setError: (error: string) => void;
}

export type WeatherStore = WeatherState & WeatherActions;
