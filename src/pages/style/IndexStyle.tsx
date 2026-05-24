import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100dvw;
    height: 100dvh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContainerInBox = styled.div`
    width: 60%;
    height: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3dvh;
`

export const LeftDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;

    width: 100%;

    gap: 2dvh;
`

export const Title = styled.h1`
    font-size: 7dvh;
    font-weight: 700;
    margin: 0;
    color: #101828;

    animation: fadeIn 0.7s ease-in-out;

    @keyframes fadeIn {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

export const LineDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    text-align: left;
    justify-content: flex-start;
`

export const Line = styled.div`
    width: 100%;
    height: 0.2dvh;
    background-color: #101828;

    animation: widthAni 1.5s ease-in-out;

    @keyframes widthAni {
        from {
            width: 0;
        }
        to {
            width: 100%;
        }
    }
`

// animation-delay: 0.2s; 일케하면 애니메이션 순서 지정할수잇음

// 올라오는 애니메이션
export const TextUpAni = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
`

type DelayProps = {
    delay: number;
}

export const Texts = styled.div<DelayProps>`
    font-size: 2.5dvh;
    color: #101828;
    opacity: 0; // 초기 상태는 투명하게

    animation: ${TextUpAni} 0.7s ease-in-out;
    animation-delay: ${({ delay }) => delay}s;

    // 애니메이션이 끝난 후에도 유지되도록
    animation-fill-mode: forwards;

    p {
        margin: 0;
        font-weight: 400;
    }

    strong {
        font-weight: 700;
    }
`

export const WipeAni = keyframes`
    from {
        transform: translateX(-20px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
`

export const StartButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5dvw;
    margin-top: 2dvh;
`

export const StartButton = styled(Link)<DelayProps>`
    position: relative; // ::before 가 이걸 기준으로 위치하게
    overflow: hidden; // ::before가 버튼 밖으로 나가지 않도록

    display: inline-flex; // 내용물 크기만큼 버튼 크기 자동 증가
    flex-direction: row;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    gap: 0.4dvw;

    width: fit-content;
    min-height: 5dvh;

    padding: 2dvh 1.5dvw;

    background-color: #101828;
    color: white;

    font-size: 2dvh;
    text-decoration: none;

    padding: 0dvh 1dvw;

    opacity: 0;
    animation: ${WipeAni} 0.7s ease-in-out;
    animation-delay: ${({ delay }) => delay}s;
    animation-fill-mode: forwards;

    transition: color 0.35s ease;

    z-index: 1;

    // 호버 시 애니메이션 효과
    /* 
        <button>
            <::before>
        </button>
    */
    &::before {
        content: "";
        position: absolute; // 버튼 위에 배치

        top: 0;
        left: -100%; // 처음에는 버튼 왼쪽 바로 밖에 위치

        width: 100%;
        height: 100%;

        background-color: #f0f0f0;

        transition: left 0.4s ease-in-out;

        z-index: -1;
    }

    &:hover::before {
        left: 0;
    }

    &:hover {
        color: #101828;
    }
`;
