import { useWeatherStore } from '../../store/useWeatherStore';
import { AbsDiv } from '../../styledComponents/AbsDiv';
import { Flex } from '../../styledComponents/Flex';
import WeatherIndicatorIcon from '../WeatherIndicatorIcon/WeatherIndicatorIcon';
import { WeatherIndicatorSignature } from './styles';

const WeatherIndicator = () => {
    const weather = useWeatherStore((state) => state.current?.condition);
    return (
        <AbsDiv $top="130px" $right="120px">
            <Flex
                $direction="column"
                $align="center"
                $justify="center"
                $gap="15px"
            >
                <WeatherIndicatorIcon weather={weather}/>
                <WeatherIndicatorSignature>{weather}</WeatherIndicatorSignature>
            </Flex>
        </AbsDiv>
    );
};

export default WeatherIndicator;
