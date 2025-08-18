import styled from 'styled-components';
import { IconWrapper } from '../icon-styles';

interface SnowIconProps {
    size: number;
}

const StyledSnowIcon = styled(IconWrapper).attrs({ viewBox: '0 0 35 35' })`
    path {
        stroke: #fff;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }
`;

const SnowIcon: React.FC<SnowIconProps> = ({ size }) => {
    return (
        <StyledSnowIcon $size={size}>
            <path
                d="M17.4992 4.375V10.2083M17.4992 10.2083V24.7917M17.4992 10.2083L13.1242 5.83333M17.4992 10.2083L21.8742 5.83333M17.4992 24.7917V30.625M17.4992 24.7917L13.1242 29.1667M17.4992 24.7917L21.8742 29.1667M6.13413 10.9375L11.1859 13.8542M11.1859 13.8542L23.8155 21.1458M11.1859 13.8542L5.20959 15.4556M11.1859 13.8542L9.58459 7.87779M23.8155 21.1458L28.8673 24.0625M23.8155 21.1458L25.4169 27.1222M23.8155 21.1458L29.7919 19.5444M6.13481 24.0625L11.1866 21.1458M11.1866 21.1458L23.8162 13.8542M11.1866 21.1458L5.21027 19.5444M11.1866 21.1458L9.58527 27.1222M23.8162 13.8542L28.868 10.9375M23.8162 13.8542L25.4175 7.8778M23.8162 13.8542L29.7925 15.4556"
                stroke="white"
            />
        </StyledSnowIcon>
    );
};

export default SnowIcon;
