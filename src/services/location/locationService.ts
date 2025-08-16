import type { ILocationService } from ".";
import { CITIES, type CityName, type CityType } from "../../data/citiesList";

export class LocationService implements ILocationService {
    private static instance: LocationService;
    private cityCoordinatesCache = new Map<
        CityName,
        { lat: number; lon: number }
    >();
    private citySearchCache = new Map<string, CityType[]>();

    private constructor() {} // Приватный конструктор для синглтона

    public static getInstance(): LocationService {
        if (!LocationService.instance) {
            LocationService.instance = new LocationService();
        }
        return LocationService.instance;
    }

    // Получение координат с мемоизацией
    public getCityCoordinates(city: CityName): { lat: number; lon: number } {
        if (this.cityCoordinatesCache.has(city)) {
            return this.cityCoordinatesCache.get(city)!;
        }

        const chosenCity = CITIES.find((ct) => ct.city === city);
        if (!chosenCity) throw new Error(`City "${city}" not found`);

        const coords = { lat: chosenCity.lat, lon: chosenCity.lon };
        this.cityCoordinatesCache.set(city, coords);

        return coords;
    }

    // Поиск городов по подстроке с мемоизацией
    public searchCities(query: string): CityType[] {
        const normalizedQuery = query.trim().toLowerCase();

        if (this.citySearchCache.has(normalizedQuery)) {
            return this.citySearchCache.get(normalizedQuery)!;
        }

        const results = CITIES.filter((city) =>
            city.city.toLowerCase().includes(normalizedQuery)
        );

        this.citySearchCache.set(normalizedQuery, results);
        return results;
    }

    // Получение всех городов (для инициализации)
    public getAllCities(): CityType[] {
        return [...CITIES]; // Возвращаем копию массива
    }
}

export const locationService = LocationService.getInstance();
