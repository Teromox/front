import styled from 'styled-components';

// 테두리 선 감싸는 밗스(컨테이너)
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100dvw;
    height: 90dvh;
`

// 로그인 회원가입 버튼 사이즈 지정
export const widthStyle: React.CSSProperties = {
  width: "17dvw",
};

// 로그인/회원가입 전환 버튼 감싸는 박스
export const SwitchBox = styled.div`
    display: flex;
    gap: 1dvw;
    padding-bottom: 3dvh;
`

// 제목 전용 태그
export const TitleH1 = styled.h1`
    font-size: 5dvh;
    font-weight: 400;
`

