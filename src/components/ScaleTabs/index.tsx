import { StyledScaleTab } from '../../styledComponents/ScaleTab';
import styled from 'styled-components';
import { useWeatherStore } from '../../store/useWeatherStore';

const ScaleTabsContainer = styled.div`
    display: flex;
    align-items: center;
    column-gap: 7px;
`;

const ScaleTabs = () => {
    const { unit, setUnit } = useWeatherStore();

    return (
        <ScaleTabsContainer>
            <StyledScaleTab
                $isActive={unit === 'metric'}
                $position="left"
                onClick={() => setUnit('metric')}
            >
                &#176;C
            </StyledScaleTab>
            <StyledScaleTab
                $isActive={unit === 'imperial'}
                onClick={() => setUnit('imperial')}
            >
                &#176;F
            </StyledScaleTab>
        </ScaleTabsContainer>
    );
};

export default ScaleTabs;
