import Login from "../components/Login";
import React, { useState } from 'react';
import Register from "../components/Register";
import styled from 'styled-components';
import { WhiteButton, BlackButton } from "../components/CompStyle";

// 테두리 선 감싸는 밗스(컨테이너)
const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100dvw;
    height: 90dvh;
`

// 로그인 회원가입 버튼 사이즈 지정
const widthStyle: React.CSSProperties = {
  width: "17dvw",
};

// 로그인/회원가입 전환 버튼 감싸는 박스
const SwitchBox = styled.div`
    display: flex;
    gap: 1dvw;
    padding-bottom: 3dvh;
`

// 제목 전용 태그
const TitleH1 = styled.h1`
    font-size: 5dvh;
`

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <MainContainer>
            <TitleH1>Teromox</TitleH1>
            {isLogin ? (
                <>
                    <SwitchBox>
                        <BlackButton style={widthStyle} onClick={() => setIsLogin(true)}>로그인</BlackButton>
                        <WhiteButton style={widthStyle} onClick={() => setIsLogin(false)}>회원가입</WhiteButton>
                    </SwitchBox>
                    <Login />
                </>
            ) : (
                <>
                    <SwitchBox>
                        <WhiteButton style={widthStyle} onClick={() => setIsLogin(true)}>로그인</WhiteButton>
                        <BlackButton style={widthStyle} onClick={() => setIsLogin(false)}>회원가입</BlackButton>
                    </SwitchBox>
                    <Register />
                </>
            )}
            
        </MainContainer>
    )
}

export default AuthPage