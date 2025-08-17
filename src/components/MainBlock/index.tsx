import { useWeatherStore } from '../../store/useWeatherStore';
import { Flex } from '../../styledComponents/Flex';
import BasicInfo from '../BasicInfo';
import Input from '../Input';
import MainLoader from '../MainLoader';
import SecondaryInfo from '../SecondaryInfo';
import { GradMainBlock } from './styles';

const MainBlock = () => {
    const current = useWeatherStore((state) => state.current);
    console.log('Current weather', current);
    return (
        <GradMainBlock $width="900px" $padding="25px" $borderRadius="12px">
            <Input />
            {!current ? (
                <MainLoader />
            ) : (
                <Flex $direction="column" $gap="40px">
                    <BasicInfo />
                    <SecondaryInfo />
                </Flex>
            )}
        </GradMainBlock>
    );
};

export default MainBlock;
