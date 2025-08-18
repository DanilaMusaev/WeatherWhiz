import type { Weather } from '../../store/types';
import CloudyIcon from '../../styledComponents/icons/CloudyIcon';
import RainyIcon from '../../styledComponents/icons/RainyIcon';
import SunIcon from '../../styledComponents/icons/SunIcon';
import ThunderstormIcon from '../../styledComponents/icons/ThunderstormIcon';

interface WeatherIndicatorIconProps {
    weather: Weather | undefined;
}

const WeatherIndicatorIcon = ({ weather }: WeatherIndicatorIconProps) => {
    switch (weather) {
        case 'Clear':
            return <SunIcon size={150} isGlow />;
        case 'Cloudy':
            return <CloudyIcon size={150} isGlow/>;
        case 'Rainy':
            return <RainyIcon size={150} />;
        case 'Thunderstorm':
            return <ThunderstormIcon size={150} isGlow/>;
    }
};

export default WeatherIndicatorIcon;
