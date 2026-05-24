import styled from 'styled-components'

export const LoadingContainer = styled.div`
    width: 100dvw;
    height: 100dvh;

    // fixed 속성으로 다른 요소들과 겹치게 설정
    position: fixed;
    top: 0;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E5E7EB;

    background-color: rgba(255, 255, 255, 0.4); // 반투명한 배경
    backdrop-filter: blur(15px); // 배경 흐리게 만들기
`