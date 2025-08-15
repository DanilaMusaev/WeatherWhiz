export const CITIES = [
    // Азия
    { city: 'Tokyo', country: 'JP', lat: 35.6762, lon: 139.6503 },
    { city: 'Beijing', country: 'CN', lat: 39.9042, lon: 116.4074 },
    { city: 'Shanghai', country: 'CN', lat: 31.2304, lon: 121.4737 },
    { city: 'Seoul', country: 'KR', lat: 37.5665, lon: 126.978 },
    { city: 'Hong Kong', country: 'HK', lat: 22.3193, lon: 114.1694 },
    { city: 'Singapore', country: 'SG', lat: 1.3521, lon: 103.8198 },
    { city: 'Bangkok', country: 'TH', lat: 13.7563, lon: 100.5018 },
    { city: 'Delhi', country: 'IN', lat: 28.6139, lon: 77.209 },
    { city: 'Mumbai', country: 'IN', lat: 19.076, lon: 72.8777 },
    { city: 'Dubai', country: 'AE', lat: 25.2769, lon: 55.2962 },
    { city: 'Istanbul', country: 'TR', lat: 41.0082, lon: 28.9784 },
    { city: 'Jakarta', country: 'ID', lat: -6.2088, lon: 106.8456 },
    { city: 'Manila', country: 'PH', lat: 14.5995, lon: 120.9842 },
    { city: 'Kuala Lumpur', country: 'MY', lat: 3.139, lon: 101.6869 },
    { city: 'Hanoi', country: 'VN', lat: 21.0285, lon: 105.8542 },

    // Европа
    { city: 'London', country: 'GB', lat: 51.5074, lon: -0.1278 },
    { city: 'Paris', country: 'FR', lat: 48.8566, lon: 2.3522 },
    { city: 'Berlin', country: 'DE', lat: 52.52, lon: 13.405 },
    { city: 'Rome', country: 'IT', lat: 41.9028, lon: 12.4964 },
    { city: 'Madrid', country: 'ES', lat: 40.4168, lon: -3.7038 },
    { city: 'Barcelona', country: 'ES', lat: 41.3851, lon: 2.1734 },
    { city: 'Amsterdam', country: 'NL', lat: 52.3676, lon: 4.9041 },
    { city: 'Prague', country: 'CZ', lat: 50.0755, lon: 14.4378 },
    { city: 'Vienna', country: 'AT', lat: 48.2082, lon: 16.3738 },
    { city: 'Athens', country: 'GR', lat: 37.9838, lon: 23.7275 },
    { city: 'Moscow', country: 'RU', lat: 55.7558, lon: 37.6173 },
    { city: 'Saint Petersburg', country: 'RU', lat: 59.9343, lon: 30.3351 },
    { city: 'Lisbon', country: 'PT', lat: 38.7223, lon: -9.1393 },
    { city: 'Stockholm', country: 'SE', lat: 59.3293, lon: 18.0686 },
    { city: 'Dublin', country: 'IE', lat: 53.3498, lon: -6.2603 },

    // Северная Америка
    { city: 'New York', country: 'US', lat: 40.7128, lon: -74.006 },
    { city: 'Los Angeles', country: 'US', lat: 34.0522, lon: -118.2437 },
    { city: 'Chicago', country: 'US', lat: 41.8781, lon: -87.6298 },
    { city: 'Toronto', country: 'CA', lat: 43.6532, lon: -79.3832 },
    { city: 'Vancouver', country: 'CA', lat: 49.2827, lon: -123.1207 },
    { city: 'Mexico City', country: 'MX', lat: 19.4326, lon: -99.1332 },
    { city: 'Miami', country: 'US', lat: 25.7617, lon: -80.1918 },
    { city: 'San Francisco', country: 'US', lat: 37.7749, lon: -122.4194 },
    { city: 'Las Vegas', country: 'US', lat: 36.1699, lon: -115.1398 },
    { city: 'Washington', country: 'US', lat: 38.9072, lon: -77.0369 },
    { city: 'Montreal', country: 'CA', lat: 45.5017, lon: -73.5673 },
    { city: 'Boston', country: 'US', lat: 42.3601, lon: -71.0589 },
    { city: 'Houston', country: 'US', lat: 29.7604, lon: -95.3698 },
    { city: 'Seattle', country: 'US', lat: 47.6062, lon: -122.3321 },

    // Южная Америка
    { city: 'Rio de Janeiro', country: 'BR', lat: -22.9068, lon: -43.1729 },
    { city: 'São Paulo', country: 'BR', lat: -23.5505, lon: -46.6333 },
    { city: 'Buenos Aires', country: 'AR', lat: -34.6037, lon: -58.3816 },
    { city: 'Lima', country: 'PE', lat: -12.0464, lon: -77.0428 },
    { city: 'Bogotá', country: 'CO', lat: 4.711, lon: -74.0721 },
    { city: 'Santiago', country: 'CL', lat: -33.4489, lon: -70.6693 },

    // Африка
    { city: 'Cairo', country: 'EG', lat: 30.0444, lon: 31.2357 },
    { city: 'Cape Town', country: 'ZA', lat: -33.9249, lon: 18.4241 },
    { city: 'Johannesburg', country: 'ZA', lat: -26.2041, lon: 28.0473 },
    { city: 'Nairobi', country: 'KE', lat: -1.2864, lon: 36.8172 },
    { city: 'Marrakech', country: 'MA', lat: 31.6295, lon: -7.9811 },
    { city: 'Lagos', country: 'NG', lat: 6.5244, lon: 3.3792 },

    // Австралия и Океания
    { city: 'Sydney', country: 'AU', lat: -33.8688, lon: 151.2093 },
    { city: 'Melbourne', country: 'AU', lat: -37.8136, lon: 144.9631 },
    { city: 'Auckland', country: 'NZ', lat: -36.8485, lon: 174.7633 },
    { city: 'Brisbane', country: 'AU', lat: -27.4698, lon: 153.0251 },
    { city: 'Perth', country: 'AU', lat: -31.9505, lon: 115.8605 },
    { city: 'Honolulu', country: 'US', lat: 21.3069, lon: -157.8583 },
] as const;

export type CityType = typeof CITIES[number];
export type CityName = CityType['city'];