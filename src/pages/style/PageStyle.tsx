import styled from 'styled-components'
import React, { useState } from 'react';

export const OuterBox = styled.div`
    width: 100dvw;
    height: 100dvh;
    background-color: #E5E7EB;
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