import styled, { keyframes } from "styled-components";

const explode = keyframes`
    0% {
        opacity: 1;
        transform:
            translate(-50%, -50%)
            translate(0, 0)
            rotate(0deg)
            scale(1);
    }

    100% {
        opacity: 0.6;
        transform:
            translate(-50%, -50%)
            translate(var(--dx), var(--dy))
            rotate(var(--rotation))
            scale(0.5);
    }
`;

export const FlyingImage = styled.img<{
    $dx: number;
    $dy: number;
    $rotation: number;
}>`
    position: fixed;
    left: 50%;
    top: 50%;

    width: 120px;
    pointer-events: none;
    z-index: 9999;

    --dx: ${({ $dx }) => `${$dx}px`};
    --dy: ${({ $dy }) => `${$dy}px`};
    --rotation: ${({ $rotation }) => `${$rotation}deg`};

    animation: ${explode} 4s
        cubic-bezier(0.18, 1.6, 0.32, 1)
        forwards;
`;

const dramaticEntrance = keyframes`
    // 900도 회전
    0% {
        transform: rotate(0deg) scale(0.5);
    }
    25% {
        transform: rotate(900deg) scale(1);
    }
    50% {
        transform: rotate(1800deg) scale(0.5);
    }
    75% {
        transform: rotate(2700deg) scale(1);
    }
    90% {
        transform: rotate(3600deg) scale(0.1);
    }
    100% {
        transform: rotate(3599640deg) scale(1);
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70dvw;
    height: 30dvh;

    padding: 2dvh;

    background-color: #FFFFFF;

    animation: ${dramaticEntrance} 1.8s
        cubic-bezier(0.18, 1.6, 0.32, 1) // 목표 지점 지나치고 다시 돌아오게
        forwards;

    button {
        border: 1px solid #FFD6BA;
    }
`

export const NotSupportContainer = styled.div`
    background-color: #FFDCDC;
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 400;

    p {
        margin-bottom: 3dvh;
    }
`

// 화면 가장 왼쪽 아래에 언제나 고정하는 기여운!!!!!! 이미지
export const FixedLeftImage = styled.img`
    position: fixed;
    bottom: 0;
    left: 0;
    // 이미지 크기를 비율에 맞게 최대 30dvh,v로 제한하여 표시하기
    max-width: 30dvw;
    max-height: 30dvh;
    width: auto;
    height: auto;
`

// 오른쪽에도 이미지 고정함
export const FixedRightImage = styled.img`
    position: fixed;
    bottom: 0;
    right: 0;
    max-width: 30dvw;
    max-height: 30dvh;
    width: auto;
    height: auto;
`