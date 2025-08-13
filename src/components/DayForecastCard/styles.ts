import styled from 'styled-components';

export const StyledDFCard = styled.div`
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

export const DayForecastWeekday = styled.p`
    font-weight: 500;
    font-size: 28px;
    color: ${({ theme }) => theme.textColor};
`;

export const DayForecastTemp = styled.p`
    font-weight: 400;
    font-size: 28px;
    color: ${({ theme }) => theme.textColor};
`;
