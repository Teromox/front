import { WhiteInput, BlackButton, Box } from "./style/CompStyle"
import { widthStyle } from "./style/AuthStyle"
import { BackUrl, AccessTokenName } from "../Datas"
import { useState } from "react"
import axios, { AxiosError } from "axios"
import { useNavigate } from "react-router-dom";

import type { ErrorType } from "../types/ErrorType" 
import type { AuthType } from "../types/AuthType"

import { setCookie } from "../scripts/Cookie"

interface LoginRequest {
    id: string;
    password: string;
}

function Login() {
    const navigate = useNavigate();

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        if (!id || !password) {
            alert("아이디와 비밀번호를 입력해주세요.");
            return;
        }
        try {
            const loginData: LoginRequest = {
                id,
                password,
            };
            const response = await axios.post<AuthType>(`${BackUrl}/api/auth/login`, loginData);
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
            <WhiteInput style={widthStyle} placeholder="아이디를 입력하세요." value={id} onChange={(e) => setId(e.target.value)}/>
            <WhiteInput style={widthStyle} type="password" placeholder="비밀번호를 입력하세요." value={password} onChange={(e) => setPassword(e.target.value)}/>
            <BlackButton style={widthStyle} onClick={login}>
                로그인
            </BlackButton>
        </Box>
    )
}

export default Login