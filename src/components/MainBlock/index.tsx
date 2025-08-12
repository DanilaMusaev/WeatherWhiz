import { Flex } from '../../styledComponents/Flex';
import BasicInfo from '../BasicInfo';
import Input from '../Input';
import SecondaryInfo from '../SecondaryInfo';
import { GradMainBlock } from './styles';

const MainBlock = () => {
    return (
        <GradMainBlock $width="900px" $padding="25px" $borderRadius="12px">
            <Flex $direction='column' $gap='40px'>
                <Input />
                <BasicInfo />
                <SecondaryInfo />
            </Flex>
        </GradMainBlock>
    );
};

export default MainBlock;
