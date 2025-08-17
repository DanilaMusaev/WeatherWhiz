import { useWeatherStore } from '../../store/useWeatherStore';
import { getNext5Days } from '../../utils/getNext5Days';
import DayForecastCard from '../DayForecastCard';
import { FDFCardContainer, FDFTitle, GradFDFBlock } from './styles';

const FDFBlock = () => {
    const daysForecast = useWeatherStore((state) => state.forecast);

    console.log('Forecast: ', daysForecast)
    return (
        <GradFDFBlock
            $width="900px"
            $padding="15px 38px 40px 38px"
            $borderRadius="12px"
        >
            <FDFTitle>5-Day Forecast</FDFTitle>
            {!daysForecast ? (
                <div>Forecast is Loading</div>
            ) : (
                <FDFCardContainer>
                    {getNext5Days().map((wd, index) => (
                        <DayForecastCard
                            key={`${wd}_${index}`}
                            weekday={wd}
                            dayWeather={daysForecast[index].condition}
                            temp={daysForecast[index].temp}
                        />
                    ))}
                </FDFCardContainer>
            )}
        </GradFDFBlock>
    );
};

export default FDFBlock;
