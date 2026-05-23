import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { RxServer } from "react-icons/rx";

export const Container = styled.div`
    width: 100%;
    height: 10dvh;
    // 위쪽 F9FAFB(회색) 보더로 표 효과
    border-top: 0.4dvh solid #F9FAFB;
    display: flex;
    flex-direction: row;
    // 수평 정렬만, 수직 정렬은 하지 않기 (왼쪽부터 채울 것)
    align-items: center;
`

type IconProps = {
    running: boolean;
}

export const Icon = styled(RxServer)<IconProps>`
    width: auto; 
    height: 55%;
    margin-left: 2dvw;
    color: ${({ running }: IconProps) => (running ? "#00A63E" : "#99A1AF")}; // running 값에 따라 초록색/회색으로 상태 표현
`

export const DesBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: auto; 
    height: 100%;
    gap: 0.5dvh;
    margin-left: 1.3dvw;
`

export const DesTitle = styled(Link)`
    font-size: 1.8dvh;
    font-weight: 600;
    margin: 0;
    color: black;
    text-decoration: none; // 링크의 밑줄 제거

    &:hover {
        color: #4A5565; // 마우스 오버 시 색상 변경
    }
`

export const DesSubBox = styled.div`
    gap: 0;
`

export const DesSub = styled.p`
    font-size: 1.3dvh;
    font-weight: 400;
    margin: 0;
    color: #4A5565;
`

export const StatusBox = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 3dvw;
    // 부모 기준 자식을 오른쪽 끝으로 밀기
    margin-left: auto;
    gap: 0.3dvw;
    width: auto;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const StatusContent = styled.div`
    height: 80%;
    width: 5dvw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.7dvh;
`

export const StatusLabel = styled.div`
    font-weight: 400;
    color: #4A5565;
    gap: 0.4dvw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
        display: block; // SVG의 baseline(글자 밑줄 기준선) 기준 정렬 비활성화
        size: 1.6dvh;
    }

    p {
        font-size: 1.4dvh;
        margin: 0;
    }
`

export const StatusValue = styled.p`
    font-size: 1.6dvh;
    font-weight: 700;
    color: black;
    margin: 0;
`