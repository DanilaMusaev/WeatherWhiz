import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

interface RainDrop {
    x: number;
    y: number;
    length: number;
    speed: number;
    opacity: number;
}

interface RainEffectProps {
    dropCount?: number;
    baseSpeed?: number;
    dropColor?: string;
    $zIndex?: number;
}

const RainCanvas = styled.canvas<{ $zIndex: number }>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: ${(props) => props.$zIndex};
    pointer-events: none;
`;

const RainEffect: React.FC<RainEffectProps> = ({
    dropCount = 300,
    baseSpeed = 4,
    dropColor = 'rgba(174, 194, 224, 0.5)',
    $zIndex = 0,
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<number | null>(null);
    const rainDropsRef = useRef<RainDrop[]>([]);

    const initializeRainDrops = useCallback(
        (canvas: HTMLCanvasElement) => {
            const drops: RainDrop[] = [];

            for (let i = 0; i < dropCount; i++) {
                drops.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    length: Math.random() * 20 + 10,
                    speed: Math.random() * 3 + baseSpeed,
                    opacity: Math.random() * 0.5 + 0.2,
                });
            }

            return drops;
        },
        [dropCount, baseSpeed]
    );

    const drawRain = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = dropColor;
        ctx.lineWidth = 1;
        ctx.lineCap = 'round';

        rainDropsRef.current.forEach((drop) => {
            ctx.globalAlpha = drop.opacity;
            ctx.beginPath();
            ctx.moveTo(drop.x, drop.y);
            ctx.lineTo(drop.x, drop.y + drop.length);
            ctx.stroke();

            drop.y += drop.speed;

            if (drop.y > canvas.height) {
                drop.y = -drop.length;
                drop.x = Math.random() * canvas.width;
            }
        });

        ctx.globalAlpha = 1;
        animationRef.current = requestAnimationFrame(drawRain);
    }, [dropColor]);

    // Инициализация и запуск анимации
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Устанавливаем размеры canvas
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            rainDropsRef.current = initializeRainDrops(canvas);
        };

        setCanvasSize();
        drawRain();

        const handleResize = () => {
            setCanvasSize();
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            window.removeEventListener('resize', handleResize);
        };
    }, [drawRain, initializeRainDrops]);

    return <RainCanvas ref={canvasRef} $zIndex={$zIndex} />;
};

export default RainEffect;
