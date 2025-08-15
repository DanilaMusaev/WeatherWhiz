import type { Weather } from '../store/types';

export const getWeatherCondition = (condition: string): Weather => {
    const lowerCondition = condition.toLowerCase();
    if (lowerCondition.includes('sun') || lowerCondition.includes('clear')) {
        return 'Clear';
    } else if (lowerCondition.includes('rain')) {
        return 'Rainy';
    } else if (lowerCondition.includes('cloud')) {
        return 'Cloudy';
    } else if (
        lowerCondition.includes('storm') ||
        lowerCondition.includes('thunder') ||
        lowerCondition.includes('thunderstorm')
    ) {
        return 'Thunderstorm';
    }
    return 'Cloudy'; // Пока затычка, потом подумаю, что с этим делать
};
