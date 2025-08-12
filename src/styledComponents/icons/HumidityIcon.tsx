import styled from 'styled-components';
import { IconWrapper } from '../icon-styles';

interface HumidityIconProps {
    size: number;
}

const StyledHumidityIcon = styled(IconWrapper).attrs({ viewBox: '0 0 25 25' })`
    path {
        stroke: ${({ theme }) => theme.textColor};
        stroke-width: 2;
        stroke-linecap: round;
    }
`;

const HumidityIcon: React.FC<HumidityIconProps> = ({ size }) => {
    return (
        <StyledHumidityIcon $size={size}>
            <path
                d="M12.5 22.3958C16.7721 22.3958 20.3125 19.2054 20.3125 15.1786C20.3125 12.662 19.0283 10.1172 17.5762 8.03028C16.1144 5.92932 14.4286 4.2169 13.5185 3.35187C12.9441 2.80589 12.0559 2.80589 11.4815 3.35188C10.5714 4.2169 8.88558 5.92932 7.42375 8.03028C5.97169 10.1172 4.6875 12.662 4.6875 15.1786C4.6875 19.2054 8.22792 22.3958 12.5 22.3958Z"
            />
            <path
                d="M12.5 18.75C11.9529 18.75 11.4111 18.6422 10.9056 18.4328C10.4 18.2234 9.94068 17.9166 9.55376 17.5296C9.16685 17.1427 8.85994 16.6833 8.65054 16.1778C8.44114 15.6723 8.33337 15.1305 8.33337 14.5833"
            />
        </StyledHumidityIcon>
    );
};

export default HumidityIcon;
