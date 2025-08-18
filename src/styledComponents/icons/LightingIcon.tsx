import styled from 'styled-components';
import { IconWrapper } from '../icon-styles';

interface LightingIconProps {
    size: number;
}

const StyledLightingIcon = styled(IconWrapper).attrs({ viewBox: '0 0 70 70' })`
    path {
        stroke: #fae547;
        stroke-width: 5;
        stroke-linejoin: round;
    }
`;

const LightingIcon: React.FC<LightingIconProps> = ({ size }) => {
    return (
        <StyledLightingIcon $size={size}>
            <path
                d="M27.7083 5.83331H53.9583L37.9166 26.25H59.7916L24.7916 64.1666L32.0833 36.4583H11.6666L27.7083 5.83331Z"
                fill="url(#paint0_linear_64_2)"
            />
            <defs>
                <linearGradient
                    id="paint0_linear_64_2"
                    x1="35.7291"
                    y1="5.83331"
                    x2="35.7291"
                    y2="64.1666"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFDF09" />
                    <stop offset="1" stopColor="#FAC712" />
                </linearGradient>
            </defs>
        </StyledLightingIcon>
    );
};

export default LightingIcon;
