import { type CityName } from '../data/citiesList';
import { locationService } from '../services/location/locationService';
import type { CurrentWeather, ForecastDay, UnitType } from '../store/types';
import type { ApiClient } from './api-client';

export class ApiService {
    private readonly apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    async fetchWeather(
        city: CityName,
        unit: UnitType
    ): Promise<CurrentWeather> {
        try {
            const { lat, lon } = locationService.getCityCoordinates(city);
            // Отправляем запрос на данные через клиент
            return this.apiClient.fetchWeather({ lat, lon, unit });
        } catch (error) {
            throw new Error(
                `Failed to fetch weather: ${
                    error instanceof Error ? error.message : String(error)
                }`
            );
        }
    }

    async fetchForecast(
        city: CityName,
        unit: UnitType
    ): Promise<ForecastDay[]> {
        try {
            const { lat, lon } = locationService.getCityCoordinates(city);
            // Отправляем запрос на данные через клиент
            return this.apiClient.fetchForecast({ lat, lon, unit });
        } catch (error) {
            throw new Error(
                `Failed to fetch forecast: ${
                    error instanceof Error ? error.message : String(error)
                }`
            );
        }
    }
}
