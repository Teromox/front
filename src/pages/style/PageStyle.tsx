import styled from 'styled-components'
import React, { useState } from 'react';
import { RxServer } from "react-icons/rx";

export const OuterBox = styled.div`
    width: 100dvw;
    min-height: 90dvh; // 100dvh 넘어가도 배경이 유지되도록 min으로 번경, 밑에 여백 고려해서 90으로

    background-color: #E5E7EB;

    padding-bottom: 10dvh;
`

type RoundContainerProps = {
  width: string;
  height: string;
};

export const RoundContainer = styled.div<RoundContainerProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background-color: #ffffff;
    border-radius: 1dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); // 회색 그림자 추가해 입체적으로 더함
`

export const BodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const TitleDiv = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    font-size: 2.4dvh;
    font-weight: 700;
    margin: 3dvh 0 2dvh 0; // 상 우 하 좌
    padding-bottom: 2dvh;
    border-bottom: 0.4dvh solid #F9FAFB;

    p {
        margin: 0;
        margin-left: 3dvh;
    }
`

type IconProps = {
    running: boolean;
}

export const Icon = styled(RxServer)<IconProps>`
    margin-left: 2dvw;
    color: ${({ running }: IconProps) => (running ? "#00A63E" : "#99A1AF")}; // running 값에 따라 초록색/회색으로 상태 표현
`

export const TitleLeft = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center; // 수직 중앙 정렬
    gap: 1dvw;

    svg {
        display: block; // SVG의 baseline(글자 밑줄 기준선) 기준 정렬 비활성화
        font-size: 5dvh; // 상위 요소에서 font size를 상속하고 있으므로 여기서도 font size 지정해줘야 아이콘 크기 조절 가능
    }
`

export const TitleSub = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3dvh;

    h1 {
        font-size: 2dvh;
        font-weight: 500;
        margin: 0;
    }

    p {
        font-size: 1.4dvh;
        font-weight: 400;
        margin: 0;
        color: #4A5565;
    }
`

export const TitleRight = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.4dvw;
    margin-right: 2dvw;

    // 부모 요소 기준 자식을 오른쪽 끝으로 밀기
    margin-left: auto;
`