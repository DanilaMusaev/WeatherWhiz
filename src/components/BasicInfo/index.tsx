import { useWeatherStore } from '../../store/useWeatherStore';
import WeatherIndicator from '../WeatherIndicator';
import {
    BasicInfoCity,
    BasicInfoContainer,
    BasicInfoSense,
    BasicInfoTemperature,
} from './styles';

const BasicInfo = () => {
    const { unit } = useWeatherStore();

    return (
        <BasicInfoContainer>
            <BasicInfoCity>Moscow</BasicInfoCity>
            <BasicInfoTemperature>
                24<span>&#176;{unit === 'metric' ? 'C' : 'F'}</span>
            </BasicInfoTemperature>
            <BasicInfoSense>
                Feels like <span>26&#176;{unit === 'metric' ? 'C' : 'F'}</span>
            </BasicInfoSense>
            <WeatherIndicator />
        </BasicInfoContainer>
    );
};

export default BasicInfo;
