import styled from 'styled-components';

interface GradMainBlockProps {
    $width?: `${string}px` | `${string}vw` | `${string}%`;
    $maxWidth?: `${string}px` | `${string}vw` | `${string}%`;
    $padding?:
        | `${string}px`
        | `${string}px ${string}px`
        | `${string}px ${string}px ${string}px ${string}px`;
    $borderRadius?: `${string}px` | `${string}%`;
    $borderWidth?: `${string}px`
}

export const GradMainBlock = styled.div<GradMainBlockProps>`
    position: relative;
    width: ${({ $width }) => ($width ? $width : '100%')};
    max-width: ${({ $maxWidth }) => ($maxWidth ? $maxWidth : 'unset')};
    padding: ${({ $padding }) => ($padding ? $padding : '0')};
    border-radius: ${({ $borderRadius }) =>
        $borderRadius ? $borderRadius : '0'};
    overflow: hidden;
    z-index: 1;

    /* Градиентный фон */
    &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: ${({ theme }) => theme.mainBlockBg};
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
        border-radius: ${({ $borderRadius }) =>
            $borderRadius ? $borderRadius : 0};
        padding: ${({ $borderWidth }) => ($borderWidth ? $borderWidth : '1px')};
        background: ${({ theme }) => theme.mainBlockBorder};
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: -1;
        pointer-events: none;
    }
`;
