import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
`;

const orbit1 = keyframes`
  0% { transform: rotate(0deg) translateX(70px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(70px) rotate(-360deg); }
`;

const orbit2 = keyframes`
  0% { transform: rotate(90deg) translateX(70px) rotate(-90deg); }
  100% { transform: rotate(450deg) translateX(70px) rotate(-450deg); }
`;

const orbit3 = keyframes`
  0% { transform: rotate(180deg) translateX(70px) rotate(-180deg); }
  100% { transform: rotate(540deg) translateX(70px) rotate(-540deg); }
`;

const orbit4 = keyframes`
  0% { transform: rotate(270deg) translateX(70px) rotate(-270deg); }
  100% { transform: rotate(630deg) translateX(70px) rotate(-630deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
`;

export const LoaderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 275px;
    text-align: center;
`;

export const Cloud = styled.div`
    position: absolute;
    top: 25%;
    width: 100%;
    text-align: center;
    animation: ${float} 3s ease-in-out infinite;
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7));
    transform-origin: center;
`;

export const WeatherElement = styled.div`
    position: absolute;
    top: 32%;
    left: 49%;
    opacity: 0.8;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    transform-origin: center;

    &.element1 {
        animation: ${orbit1} 4s infinite;
    }

    &.element2 {
        animation: ${orbit2} 5s infinite;
    }

    &.element3 {
        animation: ${orbit3} 6s infinite;
    }

    &.element4 {
        animation: ${orbit4} 3.5s infinite;
    }
`;

export const LoadingText = styled.div`
    position: absolute;
    bottom: 20%;
    width: 100%;
    text-align: center;
    color: ${({ theme }) => theme.textColor};
    font-weight: bold;
    animation: ${pulse} 2s infinite;
`;
