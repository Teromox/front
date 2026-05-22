import { WhiteInput, BlackButton, Box } from "./CompStyle"

const widthStyle: React.CSSProperties = {
  width: "35dvw",
};

function Register() {
    return (
        <Box>
            <WhiteInput style={widthStyle} placeholder="아이디를 입력하세요."/>
            <WhiteInput style={widthStyle} type="email" placeholder="이메일을 입력하세요."/>
            <WhiteInput style={widthStyle} type="password" placeholder="비밀번호를 입력하세요."/>
            <WhiteInput style={widthStyle} type="password" placeholder="비밀번호를 다시 입력하세요."/>
            <BlackButton style={widthStyle}>회원가입</BlackButton>
        </Box>
    )
}

export default Register