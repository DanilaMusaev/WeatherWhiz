import type { CityName, CityType } from '../../data/citiesList';
import { memo } from 'react';
import { StyledCityACItem, StyledCityAutocomplete } from './styles';

interface CityAutocompleteProps {
    suggestions?: CityType[];
    onSelect: (city: CityName) => void;
}

const CityAutocomplete: React.FC<CityAutocompleteProps> = memo(
    ({ suggestions, onSelect }) => {
        return (
            <StyledCityAutocomplete>
                {suggestions?.map((city) => (
                    <StyledCityACItem onClick={() => onSelect(city.city)} key={`${city.city}_${city.country}-city`}>
                        {city.city}, {city.country}
                    </StyledCityACItem>
                ))}
            </StyledCityAutocomplete>
        );
    }
);

export default CityAutocomplete;
