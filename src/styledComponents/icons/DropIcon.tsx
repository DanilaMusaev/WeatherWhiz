import styled from 'styled-components';
import { IconWrapper } from '../icon-styles';

interface DropIconProps {
    size: number;
}

const StyledDropIcon = styled(IconWrapper).attrs({ viewBox: '0 0 30 32' })`
    path {
        fill: transparent;
        stroke: ${({ theme }) => theme.textColor};
        stroke-width: 2;
    }
`;

const DropIcon: React.FC<DropIconProps> = ({ size }) => {
    return (
        <StyledDropIcon $size={size}>
            <path
                d="M22.6318 18.5293L22.6338 18.5332C23.1287 19.5059 23.375 20.5325 23.375 21.625C23.375 22.396 23.2743 23.1349 23.0752 23.8447C22.8723 24.5682 22.5914 25.2382 22.2344 25.8564C21.8795 26.4709 21.447 27.0295 20.9346 27.5332C20.4161 28.0429 19.846 28.4818 19.2227 28.8506C18.6066 29.215 17.9394 29.4983 17.2197 29.7002C16.5099 29.8993 15.771 30 15 30C14.229 30 13.4901 29.8993 12.7803 29.7002C12.0568 29.4973 11.3868 29.2164 10.7686 28.8594C10.1541 28.5045 9.59549 28.072 9.0918 27.5596C8.58211 27.0411 8.14316 26.471 7.77441 25.8477C7.40999 25.2316 7.12668 24.5644 6.9248 23.8447C6.72574 23.1349 6.625 22.396 6.625 21.625C6.625 20.5376 6.86329 19.5112 7.34277 18.5352L7.3418 18.5342L14.9326 3.23633L22.6318 18.5293Z"
            />
        </StyledDropIcon>
    );
};

export default DropIcon;
