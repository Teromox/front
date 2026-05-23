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

// 중앙 정렬 등 가장 기초적인 박스
export const Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2dvh;
`