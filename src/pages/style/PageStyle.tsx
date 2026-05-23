import styled from 'styled-components'
import React, { useState } from 'react';

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
    border-bottom: 0.4dvh solid #F9FAFB;

    p {
        margin: 0;
        margin-bottom: 2dvh;
        margin-left: 3dvh;
    }
`