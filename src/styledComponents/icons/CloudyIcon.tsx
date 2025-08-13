import styled from 'styled-components';
import { IconWrapper } from '../icon-styles';

interface CloudyIconProps {
    size: number;
}

const StyledCloudyIcon = styled(IconWrapper).attrs({
    viewBox: '0 0 150 150',
})`
    path {
        stroke-width: 4px;
    }
`;

const CloudyIcon: React.FC<CloudyIconProps> = ({ size }) => {
    return (
        <StyledCloudyIcon $size={size}>
            <path
                d="M75 26.9023C85.8617 26.9023 95.3659 30.352 103.596 37.2725C111.852 44.2149 116.978 52.8026 119.035 63.0879L119.334 64.582L120.854 64.6904C128.558 65.2408 134.971 68.2902 140.189 73.875C145.407 79.4591 148 86.0504 148 93.75C148 101.806 145.14 108.673 139.357 114.455C133.575 120.238 126.708 123.098 118.652 123.098H37.5C27.6792 123.098 19.3498 119.647 12.4004 112.697C5.45098 105.748 2 97.4184 2 87.5977C2 78.3192 5.04419 70.4067 11.1426 63.7539C17.2619 57.0783 24.7231 53.3052 33.6055 52.3799L34.6963 52.2666L35.1875 51.2852C38.9279 43.8044 44.3367 37.8827 51.4424 33.4883C58.5385 29.0999 66.3757 26.9023 75 26.9023Z"
                fill="url(#paint0_linear_4_36)"
                stroke="url(#paint1_linear_4_36)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_4_36"
                    x1="67.5"
                    y1="24.375"
                    x2="118"
                    y2="125"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.440026" stopColor="#677075" />
                    <stop offset="1" stopColor="#4E555A" />
                </linearGradient>
                <linearGradient
                    id="paint1_linear_4_36"
                    x1="61"
                    y1="30"
                    x2="108"
                    y2="125"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#798387" />
                    <stop offset="1" stopColor="#5D656A" />
                </linearGradient>
            </defs>
        </StyledCloudyIcon>
    );
};

export default CloudyIcon;
