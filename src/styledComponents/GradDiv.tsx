import styled from 'styled-components';

interface GradDivProps {
    $width?: `${string}px` | `${string}vw` | `${string}%`;
    $padding?: `${string}px ${string}px ${string}px ${string}px`;
    $borderRadius?: `${string}px` | `${string}%`;
    $backgroundGrad: string;
    $borderGrad: string;
}

export const GradDiv = styled.div<GradDivProps>`
    position: relative;
    width: ${({ $width }) => ($width ? $width : '100%')};
    padding: ${({ $padding }) => ($padding ? $padding : '0')};
    border-radius: ${({ $borderRadius }) => ($borderRadius ? $borderRadius : '0')};
    overflow: hidden;
    z-index: 1;

    /* Градиентный фон */
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: ${({ $backgroundGrad }) => $backgroundGrad};
        z-index: -1;
    }
    /* Градиентная граница */
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 16px;
        padding: 2px;
        background: ${({ $borderGrad }) => $borderGrad};
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: -1;
        pointer-events: none;
    }
`;
