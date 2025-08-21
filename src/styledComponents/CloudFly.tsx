import styled, { keyframes } from "styled-components";
import CloudyIcon from "./icons/CloudyIcon";

interface CloudProps {
    $top: number;
    $size: number;
    $duration: number;
    $delay: number;
    $opacity: number;
    $zIndex: number;
}

interface CloudFlyProps {
    cloudCount?: number;
    minSize?: number;
    maxSize?: number;
    minDuration?: number;
    maxDuration?: number;
    className?: string;
}

const moveCloud = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(calc(100vw + 100%));
  }
`;

const CloudsContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
    z-index: 0;
`;

const CloudWrapper = styled.div<CloudProps>`
    position: absolute;
    top: ${(props) => props.$top}%;
    left: -200px;
    z-index: ${(props) => props.$zIndex};
    
    width: ${(props) => props.$size}px;
    height: ${(props) => props.$size}px;
    opacity: ${(props) => props.$opacity};

    animation: ${moveCloud} ${(props) => props.$duration}s linear infinite;
    animation-delay: ${(props) => props.$delay}s;
    filter: blur(${(props) => Math.max(1, props.$size / 70)}px);
    -webkit-mask-image: linear-gradient(to bottom, transparent 10%, #00000075 60%, transparent);
    mask-image: linear-gradient(to bottom, transparent 10%, #00000075 60%, transparent);

    &:nth-child(odd) {
        animation-direction: alternate;
    }

    &:nth-child(even) {
        animation-direction: alternate-reverse;
    }
`;

const CloudFly: React.FC<CloudFlyProps> = ({
    cloudCount = 8,
    minSize = 60,
    maxSize = 200,
    minDuration = 12,
    maxDuration = 30,
    className,
}) => {
    const generateClouds = () => {
        const clouds = [];

        for (let i = 0; i < cloudCount; i++) {
            const size = Math.floor(
                Math.random() * (maxSize - minSize) + minSize
            );
            const top = Math.floor(Math.random() * 85) + 5; // 5%-95%
            const duration = Math.floor(
                Math.random() * (maxDuration - minDuration) + minDuration
            );
            const delay = Math.random() * 10; // Задержка до 10 секунд
            const opacity = 0.1 + Math.random() * 0.2; // 0.1-0.2
            const zIndex = Math.floor(Math.random() * 10); // 0-9

            clouds.push(
                <CloudWrapper
                    key={i}
                    $top={top}
                    $size={size}
                    $duration={duration}
                    $delay={delay}
                    $opacity={opacity}
                    $zIndex={zIndex}
                >
                    <CloudyIcon size={size} />
                </CloudWrapper>
            );
        }

        return clouds;
    };

    return (
        <CloudsContainer className={className}>
            {generateClouds()}
        </CloudsContainer>
    );
};

export default CloudFly;
