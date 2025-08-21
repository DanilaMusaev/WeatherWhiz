import type { Weather } from '../../store/types';
import CloudFly from '../../styledComponents/CloudFly';
import RainEffect from '../../styledComponents/RainEffect';

interface WeatherEffectProps {
    condition?: Weather;
}

const WeatherEffect: React.FC<WeatherEffectProps> = ({ condition }) => {
    switch (condition) {
        case 'Clear':
            return null;
        case 'Cloudy':
            return <CloudFly />;
        case 'Rainy':
            return <RainEffect />;
        case 'Thunderstorm':
            return null;
        default:
            return null;
    }
};

export default WeatherEffect;
