import styled, { css, keyframes } from 'styled-components';
import { IconWrapper } from '../icon-styles';

interface SunIconProps {
    size: number;
    isGlow?: boolean;
}

interface StyledSunIconProps {
    $isGlow?: boolean;
}

const SunGlow = keyframes`
    0%, 100% {
    filter: 
      drop-shadow(0 0 25px #e43015) 
      drop-shadow(0 0 40px rgba(138, 8, 64, 0.78)) 
      drop-shadow(0 0 60px #6c0e5e);
  }
  50% {
    filter: 
      drop-shadow(0 0 35px #ee361a) /* Яркий красный вместо оранжевого */
      drop-shadow(0 0 55px rgba(120, 0, 40, 0.9)) /* Глубокий бордовый */
      drop-shadow(0 0 75px #4a0a40); /* Тёмно-пурпурный (чтобы не было розового) */
  }
`;

const StyledSunIcon = styled(IconWrapper).attrs({
    viewBox: '0 0 150 150',
})<StyledSunIconProps>`
    ${({ $isGlow }) =>
        $isGlow &&
        css`
            /* filter: drop-shadow(0 0 25px #e43015) drop-shadow(0 0 40px #8a0840c7)
                drop-shadow(0 0 60px #6c0e5e); */
            animation: ${SunGlow} 4s ease-in infinite;
        `}

    circle {
        border-radius: 100%;
        stroke-width: 4px;
        stroke: ${({ theme }) => theme.accentColor};
    }
`;

const SunIcon: React.FC<SunIconProps> = ({ size, isGlow }) => {
    return (
        <StyledSunIcon $isGlow={isGlow} $size={size}>
            <circle cx="75" cy="75" r="73" fill="url(#sunIconLinearGrad)" />
            <defs>
                <linearGradient
                    id="sunIconLinearGrad"
                    x1="75"
                    y1="0"
                    x2="75"
                    y2="150"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFD40B" />
                    <stop offset="0.533265" stopColor="#FF8000" />
                </linearGradient>
            </defs>
        </StyledSunIcon>
    );
};

export default SunIcon;
