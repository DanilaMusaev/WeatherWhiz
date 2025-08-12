import { useState } from 'react';
import { StyledScaleTab } from '../../styledComponents/ScaleTab';
import styled from 'styled-components';

const ScaleTabsContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 7px;
`

const ScaleTabs = () => {
    const [scale, setScale] = useState<'celsius' | 'fahrenheit'>('celsius');
    return (
        <ScaleTabsContainer>
            <StyledScaleTab
                $isActive={scale === 'celsius'}
                $position="left"
                onClick={() => setScale('celsius')}
            >
                &#176;C
            </StyledScaleTab>
            <StyledScaleTab
                $isActive={scale === 'fahrenheit'}
                onClick={() => setScale('fahrenheit')}
            >
                &#176;F
            </StyledScaleTab>
        </ScaleTabsContainer>
    );
};

export default ScaleTabs;
