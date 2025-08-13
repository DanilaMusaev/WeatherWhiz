import { AbsDiv } from '../../styledComponents/AbsDiv';
import { Flex } from '../../styledComponents/Flex';
import SunIcon from '../../styledComponents/icons/SunIcon';
import { WeatherIndicatorSignature } from './styles';

const WeatherIndicator = () => {
    return (
        <AbsDiv $top='130px' $right='120px'>
            <Flex
                $direction="column"
                $align="center"
                $justify="center"
                $gap="15px"
            >
                <SunIcon size={150} isGlow />
                <WeatherIndicatorSignature>Clear</WeatherIndicatorSignature>
            </Flex>
        </AbsDiv>
    );
};

export default WeatherIndicator;
