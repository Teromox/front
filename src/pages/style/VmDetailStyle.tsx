import styled, { keyframes } from 'styled-components';

export const ContainerInRowBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 3dvw;

    margin-bottom: 3dvh;
`

export const HalfBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 50%;

    gap: 1.5dvh;
`

type ConksProps = {
    color: string;
}

export const Conk1 = styled.div<ConksProps>` // Container Kind 1 ㅋㅋ
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 8dvh;
    border-radius: 1dvh;
    padding-left: 1.4dvw;

    gap: 1.2dvw;

    background-color: #F9FAFB;

    svg {
        display: block; // SVG의 baseline(글자 밑줄 기준선) 기준 정렬 비활성화
        font-size: 2.7dvh;
        color: ${({ color }) => color};
    }
`

export const Conk1Content = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: auto;
    gap: 0.4dvh;

    p {
        margin: 0;
    }

    // 첫번째 p 자식
    p:first-child {
        font-size: 1.4dvh;
        font-weight: 400;
        color: #4A5565;
    }

    // 두번째 p 자식
    p:last-child {
        font-size: 1.7dvh;
        font-weight: 600;
        color: #101828;
    }
`

export const Conk2 = styled.div` // Container Kind 2 ㅋㅋ
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 8dvh;
    border-radius: 1dvh;

    background-color: #F9FAFB;
`

export const Conk2Inside = styled.div`
    display: flex;
    flex-direction: column;
    width: 89%;
    height: 100%;
    align-items: center;
    justify-content: center;
    margin: 0; // 상 우 하 좌
    gap: 1dvh;
`

export const Conk2Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
`

export const Conk2ContentLeft = styled.div<ConksProps>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0.4dvw;

    svg {
        display: block;
        font-size: 2dvh;
        color: ${({ color }) => color};
    }

    p {
        font-size: 1.6dvh;
        font-weight: 600;
        margin: 0;
        color: #101828;
    }
`

export const Conk2ContentRight = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.4dvw;

    // 오른쪽 끝으로 밀기
    margin-left: auto;

    p {
        margin: 0;
        font-size: 1.4dvh;
        font-weight: 600;
        color: #101828;
    }
`

export const OuterBar = styled.div`
    width: 100%;
    height: 0.8dvh;
    background-color: #E5E7EB;
    border-radius: 0.4dvh;
`

type InnerBarProps = {
    percentage: number;
    color: string;
}

const fillBar = keyframes`
  from {
    width: 0;
  }
`;

export const InnerBar = styled.div<InnerBarProps>`
    width: ${({ percentage }) => percentage}%;
    height: 100%;
    background-color: ${({ color }) => color};
    border-radius: 0.4dvh;

    // 애니메이션 효과 추가
    animation: ${fillBar} 1s ease-in-out; // 더 부드럽게
    // 바로 밑에서 설정하면 애니메이션 인스턴스가 중복되어 모두 똑같은 애니메이션을 가지게 됨
`

export const Conk3 = styled.div` // Container Kind 3 ㅋㅋ
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    height: 8dvh;
    gap: 1.4dvw;
`




