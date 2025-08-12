import styled, { css } from 'styled-components';

interface StyledScaleTabProps {
    $position?: 'left' | 'right';
    $isActive?: boolean;
}

export const StyledScaleTab = styled.div<StyledScaleTabProps>`
    position: relative;
    padding: 9px 12px;

    border-radius: ${({ $position }) =>
        $position === 'left' ? '25px 0 0 15px' : '0 25px 15px 0'};

    font-weight: 500;
    font-size: 22px;
    color: inherit;
    overflow: hidden;

    user-select: none;
    cursor: pointer;

    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: -1;
        ${({ $isActive, theme }) =>
            $isActive
                ? css`
                      background: ${() => theme.scaleTabBg};
                  `
                : css`
                      background: transparent;
                  `}

        transition: background 0.2s ease, opacity 0.2s ease;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 0;
        padding: 2px;
        border-radius: ${({ $position }) =>
            $position === 'left' ? '25px 0 0 15px' : '0 25px 15px 0'};
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        z-index: -1;
        pointer-events: none;

        ${({ $isActive, $position, theme }) =>
            $isActive
                ? css`
                      background: ${() =>
                          $position === 'left'
                              ? theme.scaleTabBorderLeft
                              : theme.scaleTabBorderRight};
                  `
                : css`
                      background: transparent;
                  `}

        transition: background 0.2s ease;
    }

    &:hover {
        &::before {
            ${({ $isActive, theme }) =>
                !$isActive &&
                css`
                    background: ${() => theme.scaleTabBg};
                    opacity: 0.5;
                `}
        }
    }
`;
