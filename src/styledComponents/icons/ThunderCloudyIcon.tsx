import styled, { css, keyframes } from 'styled-components';
import { IconWrapper } from '../icon-styles';

interface StyledThunderCloudyIconProps {
    $fill?: string;
    $stroke?: string;
    $isGlow?: boolean;
}

interface ThunderCloudyIconProps {
    size: number;
    fill?: string;
    stroke?: string;
    isGlow?: boolean;
}

const glowAnim = keyframes`
        0%, 100%
         {
            filter: drop-shadow(0 0 5px #cecfce60);
        }
        50% {
            filter: drop-shadow(0 0 6px #cecfce60);
        }
`;

const StyledThunderCloudyIcon = styled(IconWrapper).attrs({
    viewBox: '0 0 150 150',
})<StyledThunderCloudyIconProps>`
    path {
        fill: ${({ $fill }) => $fill};
        stroke: ${({ $stroke }) => $stroke};
        stroke-width: 4px;
    }

    ${({ $isGlow }) =>
        $isGlow &&
        css`
            animation: ${glowAnim} 2s ease-out infinite;
        `}
`;

const ThunderCloudyIcon: React.FC<ThunderCloudyIconProps> = ({
    size,
    fill,
    stroke,
    isGlow,
}) => {
    return (
        <StyledThunderCloudyIcon
            $size={size}
            $fill={fill}
            $stroke={stroke}
            $isGlow={isGlow}
        >
            <path
                d="M75 15.3398C85.8617 15.3398 95.3659 18.7895 103.596 25.71C111.852 32.6524 116.978 41.2401 119.035 51.5254L119.334 53.0195L120.854 53.1279C128.558 53.6783 134.971 56.7277 140.189 62.3125C145.407 67.8966 148 74.4879 148 82.1875C148 90.2434 145.14 97.1101 139.357 102.893C133.575 108.675 126.708 111.535 118.652 111.535H37.5C27.6792 111.535 19.3498 108.084 12.4004 101.135C5.45098 94.1854 2 85.8559 2 76.0352C2 66.7567 5.04419 58.8442 11.1426 52.1914C17.2619 45.5158 24.7231 41.7427 33.6055 40.8174L34.6963 40.7041L35.1875 39.7227C38.9279 32.2419 44.3367 26.3202 51.4424 21.9258C58.5385 17.5374 66.3757 15.3398 75 15.3398Z"
                fill="url(#paint0_linear_79_2)"
                stroke="url(#paint1_linear_79_2)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_79_2"
                    x1="67.5"
                    y1="12.8125"
                    x2="118"
                    y2="113.438"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.440026" stopColor="#3E5561" />
                    <stop offset="1" stopColor="#2D3D46" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_79_2"
                    x1="61"
                    y1="18.4375"
                    x2="108"
                    y2="113.438"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#4B6E7C" />
                    <stop offset="1" stopColor="#38535D" />
                </linearGradient>
            </defs>
        </StyledThunderCloudyIcon>
    );
};

export default ThunderCloudyIcon;
