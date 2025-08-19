import { useCallback, useEffect, useMemo, useState, type ChangeEvent } from 'react';
import InputComponent from './styles';
import { locationService } from '../../services/location/locationService';
import type { CityName } from '../../data/citiesList';
import { useWeatherStore } from '../../store/useWeatherStore';
import { isValidCity } from '../../guards/isValidCity';

const Input = () => {
    const setCity = useWeatherStore(state => state.setCity);
    const [query, setQuery] = useState<string>('');

    useEffect(() => {
        const handleGlobalKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Enter' && query.trim()) {
                e.preventDefault();
                if (isValidCity(query)) {
                    setCity(query);
                    setQuery(''); // Очистка input
                }
            }
        }

        document.addEventListener('keydown', handleGlobalKeyDown);

        return () => document.removeEventListener('keydown', handleGlobalKeyDown);
    }, [query, setCity])

    const citiesSuggest = useMemo(() => {
        return locationService.searchCities(query);
    }, [query]);

    const changeQueryHandler = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setQuery(e.target.value);
        },
        []
    );

    const selectCityHandler = useCallback((city: CityName) => {
        setQuery(city);
    }, []);

    return (
        <InputComponent
            borderRadius="18px"
            width="100%"
            placeholder="Enter city..."
            padding="10px 10px 10px 25px"
            suggestions={citiesSuggest}
            value={query}
            onChange={changeQueryHandler}
            onSelect={selectCityHandler}
        />
    );
};

export default Input;
