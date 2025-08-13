import type { Weather } from '../../store/types';
import { getNext5Days } from '../../utils/getNext5Days';
import DayForecastCard from '../DayForecastCard';
import { FDFCardContainer, FDFTitle, GradFDFBlock } from './styles';

const FDFBlock = () => {
    const daysForecast: { temp: number; weather: Weather }[] = [
        { temp: 22, weather: 'Rainy' },
        { temp: 16, weather: 'Cloudy' },
        { temp: 27, weather: 'Rainy' },
        { temp: 19, weather: 'Thunderstorm' },
        { temp: 98, weather: 'Clear' },
    ];

    return (
        <GradFDFBlock
            $width="900px"
            $padding="15px 38px 40px 38px"
            $borderRadius="12px"
        >
            <FDFTitle>5-Day Forecast</FDFTitle>
            <FDFCardContainer>
                {getNext5Days().map((wd, index) => (
                    <DayForecastCard
                        key={`${wd}_${index}`}
                        weekday={wd}
                        dayWeather={daysForecast[index].weather}
                        temp={daysForecast[index].temp}
                    />
                ))}
            </FDFCardContainer>
        </GradFDFBlock>
    );
};

export default FDFBlock;
