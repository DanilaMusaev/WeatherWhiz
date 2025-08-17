import { useWeatherStore } from '../../store/useWeatherStore';
import WeatherIndicator from '../WeatherIndicator';
import {
    BasicInfoCity,
    BasicInfoContainer,
    BasicInfoSense,
    BasicInfoTemperature,
} from './styles';

const BasicInfo = () => {
    const unit = useWeatherStore((state) => state.unit);
    const city = useWeatherStore((state) => state.city);
    const temp = useWeatherStore((state) => state.current?.temp);
    const feelsLike = useWeatherStore((state) => state.current?.feels_like);

    return (
        <BasicInfoContainer>
            <BasicInfoCity>{city}</BasicInfoCity>
            <BasicInfoTemperature>
                {temp}
                <span>&#176;{unit === 'metric' ? 'C' : 'F'}</span>
            </BasicInfoTemperature>
            <BasicInfoSense>
                Feels like{' '}
                <span>
                    {feelsLike}&#176;{unit === 'metric' ? 'C' : 'F'}
                </span>
            </BasicInfoSense>
            <WeatherIndicator />
        </BasicInfoContainer>
    );
};

export default BasicInfo;
