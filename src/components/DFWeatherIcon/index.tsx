import styled from 'styled-components';
import type { Weather } from '../../store/types';
import SunIcon from '../../styledComponents/icons/SunIcon';
import CloudyIcon from '../../styledComponents/icons/CloudyIcon';
import RainyIcon from '../../styledComponents/icons/RainyIcon';
import ThunderstormIcon from '../../styledComponents/icons/ThunderstormIcon';

interface WeatherIconProps {
    weather: Weather;
}

const StyledWeatherIcon = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const WeatherIcon: React.FC<WeatherIconProps> = ({ weather }) => {
    switch (weather) {
        case 'Clear':
            return (
                <StyledWeatherIcon>
                    <SunIcon size={60} />
                </StyledWeatherIcon>
            );
        case 'Cloudy':
            return (
                <StyledWeatherIcon>
                    <CloudyIcon size={70} />
                </StyledWeatherIcon>
            );
        case 'Rainy':
            return (
                <StyledWeatherIcon>
                    <RainyIcon size={70} />
                </StyledWeatherIcon>
            );
        case "Thunderstorm":
            return (
                <StyledWeatherIcon>
                    <ThunderstormIcon size={70} />
                </StyledWeatherIcon>
            );
    }
};

export default WeatherIcon;
