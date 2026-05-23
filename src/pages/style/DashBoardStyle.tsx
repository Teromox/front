import styled from 'styled-components';

export const BodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MenuDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5dvh;
    gap: 1.5dvw;
`

export const VmTitleContainer = styled.div`
    width: 100%; // ContainerInside의 전체 너비로
`

export const VmTitle = styled.h1`
    font-size: 2.4dvh;
    font-weight: 700;
    margin: 2dvh 0 2dvh 3dvh; // 위쪽 오른쪽 아래 왼쪽
`

export const ContainerInside = styled.div`
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center; // 수직 중앙 정렬인데 나중에 먼가 안이쁘면 빼도 이쁨
    justify-content: center;
    gap: 0;
`

export const SmallTitle = styled.h2`
    font-size: 2dvh;
    font-weight: 500;
    margin: 0;
    margin-bottom: 1.4dvh;
`

export const ContentText = styled.p`
    font-size: 3dvh;
    font-weight: 600;
    margin: 0;
    margin-bottom: 1.4dvh;
`

export const ContentTextSmall = styled.p`
    font-size: 1.6dvh;
    font-weight: 700;
    margin: 0;
    color: #4A5565;
`

export const FirstTitle = styled.h1`
    font-size: 2.4dvh;
    font-weight: 700;
    margin: 0;
    margin-bottom: 0.3dvh;
`

export const SecondContent = styled.p`
    font-size: 1.5dvh;
    color: #4A5565;
    margin-bottom: 1.7dvh;
`