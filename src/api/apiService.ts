import type { CityName } from '../data/citiesList';
import type { UnitType } from '../store/types';
import type { ApiClient } from './api-client';

class ApiService {
    readonly apiClient: ApiClient;
    constructor(apiClient: ApiClient) {
        this.apiClient = apiClient;
    }

    fetchWeather(city: CityName, unit: UnitType) {}
    fetchForecast(city: CityName, unit: UnitType) {}
}
