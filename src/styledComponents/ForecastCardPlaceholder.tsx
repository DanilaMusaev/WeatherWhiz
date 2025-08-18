import styled, { keyframes } from 'styled-components';
import type { ShortWeekday } from '../utils/getNext5Days';

interface ForecastCardPlaceholderProps {
    weekday: ShortWeekday;
}

const loadingGrad = keyframes`
    0% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0 50%;
    }
`;

const StyledForecastPlaceholderCard = styled.div`
    padding: 15px 30px;
    border: 1px solid ${({ theme }) => theme.dayForecastBorder};
    border-radius: 15px;
    background: ${({ theme }) => theme.dayForecastColor};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1px;
`;

const ForecastPlaceholderWeekday = styled.p`
    font-weight: 500;
    font-size: 28px;
    color: ${({ theme }) => theme.textColor};
`;

const WeatherPlaceholder = styled.div`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '?';

        width: 65px;
        height: 65px;
        text-align: center;
        font-size: 24px;
        line-height: 63px;
        background-color: ${({ theme }) => theme.bgColor};
        border: 1px solid ${({ theme }) => theme.dayForecastBorder};
        border-radius: 50%;
    }
`;

const ForecastTempPlaceholder = styled.p`
    margin: 8px 0px 8px;
    width: 100%;
    height: 21px;
    background: linear-gradient(
        90deg,
        ${({ theme }) => theme.dayForecastBorder} 25%,
        ${({ theme }) => theme.dayForecastBorder}70 37%,
        ${({ theme }) => theme.dayForecastBorder} 63%
    );
    background-size: 400% 100%;
    animation: ${loadingGrad} 1.2s ease infinite;
    border-radius: 4px;
`;

const ForecastPlaceholderCard: React.FC<ForecastCardPlaceholderProps> = ({
    weekday,
}) => {
    return (
        <StyledForecastPlaceholderCard>
            <ForecastPlaceholderWeekday>{weekday}</ForecastPlaceholderWeekday>
            <WeatherPlaceholder />
            <ForecastTempPlaceholder />
        </StyledForecastPlaceholderCard>
    );
};

export default ForecastPlaceholderCard;
