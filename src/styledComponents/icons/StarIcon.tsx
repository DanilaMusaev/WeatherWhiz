import styled from 'styled-components';
import { IconWrapper } from '../icon-styles';

interface StarIconProps {
    size: number;
}

const StyledStarIcon = styled(IconWrapper).attrs({ viewBox: '0 0 35 35' })`
    path {
        fill: transparent;
        stroke: #fff;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
    }
`;

const StarIcon: React.FC<StarIconProps> = ({ size }) => {
    return (
        <StyledStarIcon $size={size}>
            <path
                d="M17.5 4.375L20.4687 11.9022C20.7428 12.5971 20.8797 12.9445 21.0895 13.2374C21.2755 13.4971 21.5028 13.7245 21.7626 13.9104C22.0555 14.1202 22.4029 14.2573 23.0978 14.5313L30.625 17.5L23.0978 20.4687C22.4029 20.7428 22.0555 20.8797 21.7626 21.0895C21.5028 21.2755 21.2755 21.5028 21.0895 21.7626C20.8797 22.0555 20.7428 22.4029 20.4687 23.0978L17.5 30.625L14.5313 23.0978C14.2573 22.4029 14.1202 22.0555 13.9104 21.7626C13.7245 21.5028 13.4971 21.2755 13.2374 21.0895C12.9445 20.8797 12.5971 20.7428 11.9022 20.4687L4.375 17.5L11.9022 14.5313C12.5971 14.2573 12.9445 14.1202 13.2374 13.9104C13.4971 13.7245 13.7245 13.4971 13.9104 13.2374C14.1202 12.9445 14.2573 12.5971 14.5313 11.9022L17.5 4.375Z"
            />
        </StyledStarIcon>
    );
};

export default StarIcon;
