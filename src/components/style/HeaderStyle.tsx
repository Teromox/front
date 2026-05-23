import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const HeaderBox = styled.div`
    width: 100dvw;
    height: 6dvh;
    background-color: #ffffff;
    display: flex;
    align-items: center;
`

export const LogoBox = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20dvw;
    font-size: 3dvh;
    font-weight: 400;
`

export const BtnBox = styled.h1`
    position: absolute;
    right: 0; // 부모 요소의 기준으로 오른쪽 맨 끝으로 div 밀기
    margin-right: 20dvw;
    display: flex;
    flex-direction: row;
    gap: 1.5dvw;
`

// 컬러 말고는 다른 게 없으므로 스타일이 겹치는 부분만 따로 뺀 뒤 컬러면 프롭으로 받음
export const NewAtag = styled(Link)<{
    color?: string;
    hoverColor?: string;
}>`
    text-decoration: none;
    color: ${({ color }) => color}; // = (props) => props.hoverColor 같은 표현임
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.2dvw;
    font-weight: 500;

    &:hover {
        cursor: pointer; // 마우스 커서 모양 바뀌게 하여 유저 경험을 향상
        color: ${({ hoverColor }) => hoverColor};
    }
    svg {
        display: block; // SVG의 baseline(글자 밑줄 기준선) 기준 정렬 비활성화
        size: 2dvh;
    }
    p {
        font-size: 1.8dvh;
    }
`