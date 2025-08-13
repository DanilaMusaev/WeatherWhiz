import styled from 'styled-components';

interface AbsDivProps {
    $top?: `${string}px` | `${string}%`;
    $right?: `${string}px` | `${string}%`;
    $bottom?: `${string}px` | `${string}%`;
    $left?: `${string}px` | `${string}%`;
}

export const AbsDiv = styled.div<AbsDivProps>`
    position: absolute;
    top: ${({ $top }) => $top || 'auto'};
    right: ${({ $right }) => $right || 'auto'};
    bottom: ${({ $bottom }) => $bottom || 'auto'};
    left: ${({ $left }) => $left || 'auto'};

    transition: top 0.3s ease, right 0.3s ease, bottom 0.3s ease, left 0.3s ease;
`;
