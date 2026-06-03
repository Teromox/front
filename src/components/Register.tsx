import { WhiteInput, BlackButton, Box } from "./style/CompStyle"
import { widthStyle } from "./style/AuthStyle"
import { useState } from "react";
import { AccessTokenName, BackUrl } from "../Datas";
import { setCookie } from "../scripts/Cookie";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";

import type { ErrorType } from "../types/ErrorType" 
import type { AuthType } from "../types/AuthType"

interface RegisterRequest {
    id: string;
    email: string;
    password: string;
}

function Register() {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const register = async () => {
        if (!id || !email || !password || !confirmPassword) {
            alert("모든 필드를 입력해주세요.");
            return;
        }
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }
        try {
            const RegiData: RegisterRequest = {
                id,
                email,
                password
            };
            const response = await axios.post<AuthType>(`${BackUrl}/api/auth/register`, RegiData);
            setCookie(AccessTokenName, response.data.jwt);
            navigate("/dashboard");
        } catch (err) {
            const error = err as AxiosError<ErrorType>;
            console.log(error.response?.status);

            console.log(error.response?.data.errorCode);
            console.log(error.response?.data.errorMsg);

            alert(error.response?.data.errorDescription);
        }
    }

    return (
        <Box>
            <WhiteInput style={widthStyle} value={id} onChange={(e) => setId(e.target.value)} placeholder="아이디를 입력하세요."/>
            <WhiteInput style={widthStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일을 입력하세요."/>
            <WhiteInput style={widthStyle} type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호를 입력하세요."/>
            <WhiteInput style={widthStyle} type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="비밀번호를 다시 입력하세요."/>
            <BlackButton style={widthStyle} onClick={register}>
                회원가입
            </BlackButton>
        </Box>
    )
}

export default Register