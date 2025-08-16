import { useQueries } from '@tanstack/react-query';
import { useApi } from '../../providers/ApiProvider';
import { useWeatherStore } from '../../store/useWeatherStore';

const WeatherDataLoader = () => {
    const city = useWeatherStore((state) => state.city);
    const unit = useWeatherStore((state) => state.unit);
    const setWeatherData = useWeatherStore((state) => state.setWeatherData);
    const setError = useWeatherStore((state) => state.setError);
    const setLoading = useWeatherStore((state) => state.setLoading);
    const apiService = useApi();

    const queries = useQueries({
        queries: [
            {
                queryKey: ['weather', city, unit],
                queryFn: async () => {
                    // setLoading(true);
                    try {
                        const data = await apiService.fetchWeather(city, unit);
                        setWeatherData({ current: data });
                        return data;
                    } catch (error) {
                        setError(
                            error instanceof Error
                                ? error.message
                                : `Unknown error, while fetching data`
                        );
                        throw error;
                    } finally {
                        // setLoading(false);
                    }
                },
                staleTime: 30 * 60 * 1000, // 30 min
            },
            {
                queryKey: ['forecast', city, unit],
                queryFn: async () => {
                    // setLoading(true)
                    try {
                        const data = await apiService.fetchForecast(city, unit);
                        setWeatherData({ forecast: data });
                        return data;
                    } catch (error) {
                        setError(
                            error instanceof Error
                                ? error.message
                                : `Unknown error, while fetching data`
                        );
                        throw error;
                    } finally {
                        // setLoading(false);
                    }
                },
                staleTime: 60 * 60 * 1000, // 1 hour
            },
        ],
    });

    return null;
};

export default WeatherDataLoader;
