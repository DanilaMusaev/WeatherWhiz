import type { ILocationService, SearchOptions, SearchResult } from '.';
import { CITIES, type CityName, type CityType } from '../../data/citiesList';

export class LocationService implements ILocationService {
    private static instance: LocationService;
    private cityCoordinatesCache = new Map<
        CityName,
        { lat: number; lon: number }
    >();
    private citySearchCache = new Map<string, CityType[]>();
    private cacheClearInterval: number | undefined;

    private constructor() {
        this.cacheClearInterval = setInterval(() => {
            this.clearSearchCache();
        }, 24 * 60 * 60 * 1000); // Очистка кэша списка городов каждые 24ч.
    } // Приватный конструктор для синглтона

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
    public searchCities(
        query: string,
        options: SearchOptions = {}
    ): CityType[] {
        const {
            minQueryLength = 2,
            maxResults = 15,
            searchByCountry = true,
            searchByCountryCode = false,
            fuzzySearch = true,
            sortByRelevance = true,
        } = options;
        const normalizedQuery = query.trim().toLowerCase();
        if (normalizedQuery.length < minQueryLength) {
            return [];
        }
        // Проверка кеша
        const cacheKey = this.generateCacheKey(normalizedQuery, options);
        if (this.citySearchCache.has(cacheKey)) {
            return this.citySearchCache.get(cacheKey)!;
        }
        const results = this.findAndRankCities(normalizedQuery, {
            searchByCountry,
            searchByCountryCode,
            fuzzySearch,
            sortByRelevance,
        }).slice(0, maxResults);
        // Сохранение в кеш
        this.citySearchCache.set(cacheKey, results);
        return results;
    }

    // Получение всех городов
    public getAllCities(): CityType[] {
        return [...CITIES];
    }

    private findAndRankCities(
        query: string,
        options: Pick<
            SearchOptions,
            | 'searchByCountry'
            | 'searchByCountryCode'
            | 'fuzzySearch'
            | 'sortByRelevance'
        >
    ): CityType[] {
        const scoredResults: SearchResult[] = [];

        for (const city of CITIES) {
            const cityName = city.city.toLowerCase();
            const countryName = city.country.toLowerCase();
            const countryCode = city.country;

            // Рейтинг совпадения и тип совпадения
            let score = 0;
            let matchType: SearchResult['matchType'] = 'contains';

            // Поиск по названию города
            if (cityName.startsWith(query)) {
                score += 3;
                matchType = 'start';
            } else if (cityName.includes(query)) {
                score += 2;
            } else if (
                options.fuzzySearch &&
                this.fuzzyMatch(cityName, query)
            ) {
                score += 1;
                matchType = 'fuzzy';
            }
            // Поиск по стране
            if (options.searchByCountry) {
                if (countryName.startsWith(query)) {
                    score += 2;
                } else if (countryName.includes(query)) {
                    score += 1;
                }
            }
            // Поиск по коду страны (RU, JP и т.п.)
            if (
                options.searchByCountryCode &&
                countryCode.toLowerCase().includes(query)
            ) {
                score += 1;
            }
            // Высший приоритет если совпадение идеально
            if (cityName === query) {
                score += 5;
            }
            if (score > 0) {
                scoredResults.push({ city, score, matchType });
            }
        }

        // Сортировка
        if (options.sortByRelevance) {
            scoredResults.sort((a, b) => {
                return (
                    b.score - a.score || a.city.city.localeCompare(b.city.city)
                );
            });
        }

        return scoredResults.map((result) => result.city);
    }

    // Простенький алгоритм нечеткого поиска
    private fuzzyMatch(text: string, query: string): boolean {
        if (query.length < 2) return false;

        let queryIndex = 0;
        let textIndex = 0;
        while (textIndex < text.length && queryIndex < query.length) {
            if (text[textIndex] === query[queryIndex]) {
                queryIndex++;
            }
            textIndex++;
        }

        return queryIndex === query.length;
    }

    // Генерация ключа для Map кэша
    private generateCacheKey(query: string, options: SearchOptions): string {
        return `${query}_${options.minQueryLength}_${options.maxResults}_${options.searchByCountry}_${options.searchByCountryCode}_${options.fuzzySearch}_${options.sortByRelevance}`;
    }

    public getCacheStats(): { size: number; keys: string[] } {
        return {
            size: this.citySearchCache.size,
            keys: Array.from(this.citySearchCache.keys()),
        };
    }
    // Очистка кэша
    public clearSearchCache(): void {
        this.citySearchCache.clear();
    }

    public destroy(): void {
        clearInterval(this.cacheClearInterval);
        this.clearSearchCache();
        this.cityCoordinatesCache.clear();
    }
}

export const locationService = LocationService.getInstance();
