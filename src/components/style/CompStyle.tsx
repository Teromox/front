import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const IconBtnInside = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5dvw;

    svg {
        flex-shrink: 0;
    }

    p {
        margin: 0;
    }
`

export const BlackButton = styled.button`
    background: #000000;
    color: white;
    padding: 1.3dvh 4dvw;
    border: none;
    border-radius: 8px;
    text-align: center;
    font-size: 2dvh;

    display: flex;
    justify-content: center;
    align-items: center;

    // 애니메이션: 보잉하는애니메이션
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;

    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        transform: translateY(-2px);
        background: #222222;
    }

    &:active {
        transform: scale(0.96);
    }
`

export const BlackLink = styled(Link)`
    background: #000000;
    color: white;
    padding: 0.1dvh 0.5dvw;
    border: none;
    border-radius: 8px;
    text-align: center;
    font-size: 2dvh;

    display: flex;
    justify-content: center;
    align-items: center;

    // 애니메이션: 보잉하는애니메이션
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;

    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        transform: translateY(-2px);
        background: #222222;
    }

    &:active {
        transform: scale(0.96);
    }

    // 링크의 기본 스타일 제거
    text-decoration: none;
`

type ColorButtonProps = {
    color: string;
    textColor: string;
}

export const ColorButton = styled.button<ColorButtonProps>`
    background: ${({ color }) => color};
    color: ${({ textColor }) => textColor};
    padding: 1.3dvh 4dvw;
    border: none;
    border-radius: 8px;
    text-align: center;
    font-size: 2dvh;

    display: flex;
    justify-content: center;
    align-items: center;

    // 애니메이션: 보잉하는애니메이션
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;

    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        transform: translateY(-2px);
    }

    &:active {
        transform: scale(0.96);
    }
`

export const LabelTag = styled.label`
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 0.3dvh;
    font-size: 2dvh;
`

export const WhiteButton = styled.button`
    background: #ffffff;
    color: #000000;
    padding: 1.3dvh 4dvw;
    border: 0.2px solid #000000;
    border-radius: 8px;
    text-align: center;
    font-size: 2dvh;

    display: flex;
    justify-content: center;
    align-items: center;

    // 애니메이션: 보잉하는애니메이션
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;

    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        transform: translateY(-2px);
        background: #f8f8f8;
    }

    &:active {
        transform: scale(0.96);
    }
`

export const WhiteInput = styled.input`
    background: #ffffff;
    color: #000000;
    /* padding: 1.3dvh 4dvw; */
    padding-top: 1dvh;
    padding-bottom: 1dvh;
    border: 0.2px solid #000000;
    border-radius: 8px;
    text-align: center;
    font-size: 2dvh;

    display: flex;
    justify-content: center;
    align-items: center;

    // 애니메이션: 보잉하는애니메이션
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;

    &:hover {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
        transform: translateY(-2px);
        background: #f8f8f8;
    }

    &:active {
        transform: scale(0.96);
    }
`

// 잠근된 입력창
export const LockedWhiteInput = styled.input`
    background: #ffffff;
    color: #000000;
    /* padding: 1.3dvh 4dvw; */
    padding-top: 1dvh;
    padding-bottom: 1dvh;
    border: 0.2px solid #000000;
    border-radius: 8px;
    text-align: center;
    font-size: 1.7dvh;

    display: flex;
    justify-content: center;
    align-items: center;

    // 애니메이션: 보잉하는애니메이션
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        background 0.2s ease;

    // 입력창 잠금
    pointer-events: none;
`

// 중앙 정렬 등 가장 기초적인 박스
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2dvh;
`

// 붙는 라벨
export const Label = styled.label`
    font-size: 1.8dvh;
    font-weight: 500;
    margin: 0;
    color: #364153;
    text-align: left;
    margin-bottom: 0.5dvh;
`
