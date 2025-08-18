import { useQueries } from '@tanstack/react-query';
import { useApi } from '../../providers/ApiProvider';
import { useWeatherStore } from '../../store/useWeatherStore';

const WeatherDataLoader = () => {
    const city = useWeatherStore((state) => state.city);
    const unit = useWeatherStore((state) => state.unit);
    const setCurrWeatherData = useWeatherStore(
        (state) => state.setCurrWeatherData
    );
    const setForecastData = useWeatherStore((state) => state.setForecastData);
    const setError = useWeatherStore((state) => state.setError);
    const setLoading = useWeatherStore((state) => state.setLoading);
    const apiService = useApi();

    useQueries({
        queries: [
            {
                queryKey: ['weather', city, unit],
                queryFn: async () => {
                    setLoading(true);
                    try {
                        const data = await apiService.fetchWeather(city, unit);
                        setCurrWeatherData({ current: data });
                        return data;
                    } catch (error) {
                        setError(
                            error instanceof Error
                                ? error.message
                                : `Unknown error, while fetching data`
                        );
                        throw error;
                    } finally {
                        setLoading(false);
                    }
                },
                staleTime: 5 * 60 * 1000, // 5 min
            },
            {
                queryKey: ['forecast', city, unit],
                queryFn: async () => {
                    try {
                        const data = await apiService.fetchForecast(city, unit);
                        setForecastData({ forecast: data });
                        return data;
                    } catch (error) {
                        setError(
                            error instanceof Error
                                ? error.message
                                : `Unknown error, while fetching data`
                        );
                        throw error;
                    }
                },
                staleTime: 5 * 60 * 1000, // 5 min
            },
        ],
    });

    return null;
};

export default WeatherDataLoader;
