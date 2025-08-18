import CloudyIcon from '../../styledComponents/icons/CloudyIcon';
import DropIcon from '../../styledComponents/icons/DropIcon';
import LightingIcon from '../../styledComponents/icons/LightingIcon';
import SnowIcon from '../../styledComponents/icons/SnowIcon';
import StarIcon from '../../styledComponents/icons/StarIcon';
import { Cloud, LoaderContainer, LoadingText, WeatherElement } from './styles';

const WeatherLoader = () => {
    return (
        <LoaderContainer>
            <Cloud>
                <CloudyIcon size={80} fill="#dddddd" stroke="#dddddd" />
            </Cloud>
            <WeatherElement className="element1">
                <DropIcon size={20} />
            </WeatherElement>
            <WeatherElement className="element2">
                <SnowIcon size={20} />
            </WeatherElement>
            <WeatherElement className="element3">
                <StarIcon size={20} />
            </WeatherElement>
            <WeatherElement className="element4">
                <LightingIcon size={20} />
            </WeatherElement>
            <LoadingText>Weather analysis...</LoadingText>
        </LoaderContainer>
    );
};

export default WeatherLoader;
