import type { CityName, CityType } from '../../data/citiesList';

export interface ILocationService {
    getCityCoordinates(city: CityName): { lat: number; lon: number };
    searchCities(query: string): CityType[];
    clearSearchCache(): void;
    getCacheStats(): { size: number; keys: string[] };
    getAllCities(): CityType[];
    destroy(): void;
}

export interface SearchOptions {
    minQueryLength?: number;
    maxResults?: number;
    searchByCountry?: boolean;
    searchByCountryCode?: boolean;
    fuzzySearch?: boolean;
    sortByRelevance?: boolean;
}

export interface SearchResult {
    city: CityType;
    score: number;
    matchType: 'start' | 'contains' | 'fuzzy';
}
