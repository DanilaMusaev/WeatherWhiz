import type { Weather } from '../../store/types';
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
    return (
        <StyledDFCard>
            <DayForecastWeekday>{weekday}</DayForecastWeekday>
            <WeatherIcon weather={dayWeather} />
            <DayForecastTemp>{temp}&#176;C</DayForecastTemp>
        </StyledDFCard>
    );
};

export default DayForecastCard;
