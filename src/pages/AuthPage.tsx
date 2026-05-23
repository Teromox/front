import Login from "../components/Login";
import React, { useState } from 'react';
import Register from "../components/Register";
import { WhiteButton, BlackButton } from "../components/style/CompStyle";
import { widthStyleHalf } from "../components/style/AuthStyle";
import { MainContainer, TitleH1, SwitchBox } from "./style/AuthPageStyle";

function AuthPage() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <MainContainer>
            <TitleH1>Teromox</TitleH1>
            {isLogin ? (
                <>
                    <SwitchBox>
                        <BlackButton style={widthStyleHalf} onClick={() => setIsLogin(true)}>로그인</BlackButton>
                        <WhiteButton style={widthStyleHalf} onClick={() => setIsLogin(false)}>회원가입</WhiteButton>
                    </SwitchBox>
                    <Login />
                </>
            ) : (
                <>
                    <SwitchBox>
                        <WhiteButton style={widthStyleHalf} onClick={() => setIsLogin(true)}>로그인</WhiteButton>
                        <BlackButton style={widthStyleHalf} onClick={() => setIsLogin(false)}>회원가입</BlackButton>
                    </SwitchBox>
                    <Register />
                </>
            )}
            
        </MainContainer>
    )
}

export default AuthPage