import styled from 'styled-components';

export const BasicInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const BasicInfoCity = styled.h2`
    font-weight: 600;
    font-size: 40px;
    text-transform: uppercase;
    color: inherit;

    transition: color 0.3s ease-out;
`;

export const BasicInfoTemperature = styled.p`
    margin-top: 10px;
    margin-bottom: 7px;

    font-weight: 600;
    font-size: 100px;
    line-height: 1;
    color: inherit;

    transition: color 0.3s ease-out;

    span {
        display: inline-block;
        font-weight: 400;
        font-size: 60px;
        color: ${({ theme }) => theme.accentColor};
        transform: translateY(-0.2em);

        transition: color 0.3s ease-out;
    }
`;

export const BasicInfoSense = styled.p`
    font-weight: 400;
    font-size: 26px;
    color: ${({ theme }) => theme.secAccentColor};

    transition: color 0.3s ease-out;

    span {
        color: ${({ theme }) => theme.textColor};
        transition: color 0.3s ease-out;
    }
`;
