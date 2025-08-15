import type { Weather } from '../../store/types';
import { useWeatherStore } from '../../store/useWeatherStore';
import type { ShortWeekday } from '../../utils/getNext5Days';
import WeatherIcon from '../DFWeatherIcon';
import { DayForecastTemp, DayForecastWeekday, StyledDFCard } from './styles';

interface DayForecastCardProps {
    weekday: ShortWeekday;
    temp: number;
    dayWeather: Weather;
}

const DayForecastCard: React.FC<DayForecastCardProps> = ({
    weekday,
    temp,
    dayWeather,
}) => {
    const unit = useWeatherStore(state => state.unit);

    return (
        <StyledDFCard>
            <DayForecastWeekday>{weekday}</DayForecastWeekday>
            <WeatherIcon weather={dayWeather} />
            <DayForecastTemp>{temp}&#176;{unit === 'metric' ? 'C' : 'F'}</DayForecastTemp>
        </StyledDFCard>
    );
};

export default DayForecastCard;
