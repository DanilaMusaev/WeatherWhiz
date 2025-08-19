import { CITIES, type CityName } from '../data/citiesList';

// type guard cityName
export const isValidCity = (cityName: string): cityName is CityName => {
    const normalizedInput = cityName.trim().toLowerCase();
    return CITIES.some((city) => city.city.toLowerCase() === normalizedInput);
};
