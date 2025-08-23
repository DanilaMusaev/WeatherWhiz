import styled, { keyframes } from 'styled-components';

const flashAnim = keyframes`
    0%,
    90%,
    96%,
    100% {
        background-color: rgba(255, 255, 255, 0);
    }
    92%,
    98% {
        background-color: rgba(255, 255, 255, 0.1);
    }
`;

export const Flashlight = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0);
    pointer-events: none;
    z-index: 15;
    animation: ${flashAnim} 10s infinite;
`;
