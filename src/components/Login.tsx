import { WhiteInput, BlackButton, Box } from "./style/CompStyle"
import { widthStyle } from "./style/AuthStyle"

function Login() {
    return (
        <Box>
            <WhiteInput style={widthStyle} placeholder="아이디를 입력하세요."/>
            <WhiteInput style={widthStyle} type="password" placeholder="비밀번호를 입력하세요."/>
            <BlackButton style={widthStyle}>로그인</BlackButton>
        </Box>
    )
}

export default Login