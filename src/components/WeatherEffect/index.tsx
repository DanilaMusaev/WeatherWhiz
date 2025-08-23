import type { Weather } from '../../store/types';
import CloudFly from '../../styledComponents/CloudFly';
import { Flashlight } from '../../styledComponents/Flashlight';
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
            return (
                <>
                    <RainEffect />
                    <CloudFly iconVar="thunder" />
                    <Flashlight />
                </>
            );
        default:
            return null;
    }
};

export default WeatherEffect;
