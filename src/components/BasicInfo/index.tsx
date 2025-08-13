import WeatherIndicator from '../WeatherIndicator';
import {
    BasicInfoCity,
    BasicInfoContainer,
    BasicInfoSense,
    BasicInfoTemperature,
} from './styles';

const BasicInfo = () => {
    return (
        <BasicInfoContainer>
            <BasicInfoCity>Moscow</BasicInfoCity>
            <BasicInfoTemperature>
                24<span>&#176;C</span>
            </BasicInfoTemperature>
            <BasicInfoSense>Feels like <span>26&#176;C</span></BasicInfoSense>
            <WeatherIndicator />
        </BasicInfoContainer>
    );
};

export default BasicInfo;
