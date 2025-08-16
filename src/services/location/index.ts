import type { CityName, CityType } from '../../data/citiesList';

export interface ILocationService {
    getCityCoordinates(city: CityName): { lat: number; lon: number };
    searchCities(query: string): CityType[];
    getAllCities(): CityType[];
}
