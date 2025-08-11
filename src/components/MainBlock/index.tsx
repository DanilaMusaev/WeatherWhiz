import Input from '../Input';
import { GradMainBlock } from './styles';

const MainBlock = () => {
    return (
        <GradMainBlock $width="900px" $padding="25px" $borderRadius="12px">
            <Input />
            Something
        </GradMainBlock>
    );
};

export default MainBlock;
