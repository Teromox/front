import { useState } from "react";
import {
    Container,
    NotSupportContainer,
    FlyingImage,
} from "./style/NotSupport";
import { ColorButton } from "../components/style/CompStyle";

interface Particle {
    id: number;
    src: string;
    dx: number;
    dy: number;
    rotation: number;
}

export default function NotSupport() {
    const IMAGE_COUNT = 9;

    const [particles, setParticles] = useState<Particle[]>([]);

    const handleButtonClick = () => {
        const newParticles = Array.from({ length: 8 }, () => {
            const angle = Math.random() * Math.PI * 2;
            const distance = 150 + Math.random();

            return {
                id: Date.now() + Math.random(),
                src: `/${Math.floor(Math.random() * IMAGE_COUNT) + 1}.png`,
                dx: Math.cos(angle) * distance,
                dy: Math.sin(angle) * distance,
                rotation: Math.random() * 2000 - 1000,
            };
        });

        setParticles((prev) => [...prev, ...newParticles]);

        setTimeout(() => {
            setParticles((prev) =>
                prev.filter(
                    (p) => !newParticles.some((n) => n.id === p.id)
                )
            );
        }, 2000);
    };

    return (
        <NotSupportContainer>
            <Container>
                <h1>
                    지원되지 않는
                    <br />
                    화면입니다
                </h1>

                <p>데스크톱 환경에서 접속해주세요.</p>

                <ColorButton
                    color="#FFF2EB"
                    textColor="black"
                    onClick={handleButtonClick}
                >
                    팡팡
                </ColorButton>
            </Container>

            {particles.map((particle) => (
                <FlyingImage
                    key={particle.id}
                    src={particle.src}
                    alt=""
                    $dx={particle.dx}
                    $dy={particle.dy}
                    $rotation={particle.rotation}
                />
            ))}
        </NotSupportContainer>
    );
}