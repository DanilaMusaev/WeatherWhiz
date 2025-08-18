import styled from 'styled-components';

export const WeatherIndicatorSignature = styled.p`
    font-weight: 400;
    font-size: 35px;
    color: ${({ theme }) => theme.accentColor};

    transition: color 0.3s ease-out;
`;
