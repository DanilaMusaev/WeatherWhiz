import { useWeatherStore } from '../../store/useWeatherStore';
import { Flex } from '../../styledComponents/Flex';
import BasicInfo from '../BasicInfo';
import Input from '../Input';
import SecondaryInfo from '../SecondaryInfo';
import WeatherLoader from '../WeatherLoader';
import { GradMainBlock } from './styles';

const MainBlock = () => {
    const current = useWeatherStore((state) => state.current);
    const isLoading = useWeatherStore((state) => state.isLoading);

    console.log('Current weather', current);
    return (
        <GradMainBlock $width="900px" $padding="25px" $borderRadius="12px">
            <Input />
            <Flex $direction="column" $gap="40px">
                {isLoading || !current ? (
                    <WeatherLoader />
                ) : (
                    <>
                        <BasicInfo />
                        <SecondaryInfo />
                    </>
                )}
            </Flex>
        </GradMainBlock>
    );
};

export default MainBlock;
