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

    transition: background 0.3s ease-out;
`;

export const DayForecastWeekday = styled.p`
    font-weight: 500;
    font-size: 28px;
    color: ${({ theme }) => theme.textColor};

    transition: color 0.3s ease-out;
`;

export const DayForecastTemp = styled.p`
    font-weight: 400;
    font-size: 28px;
    color: ${({ theme }) => theme.textColor};

    transition: color 0.3s ease-out;
`;
