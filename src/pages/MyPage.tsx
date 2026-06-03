import Header from '../components/Header';
import { OuterBox, RoundContainer, BodyDiv, TitleDiv } from './style/PageStyle';
import { WhiteInput, BlackButton, ColorButton } from '../components/style/CompStyle';
import { ContainerContent, EmailBox } from './style/MyPageStyle';
import { MdOutlineMailLock } from "react-icons/md";
import { useNoLogin } from '../hooks/NotLogin';
import { getAllCookies } from '../scripts/Cookie';
import { useState } from 'react';

function Mypage() {
    useNoLogin();
    const [_email, setEmail] = useState('');
    const { email } = getAllCookies();
    return (
        <OuterBox>
            <Header main={false} />
            <BodyDiv style={{ marginTop: '5dvh' }}>
                <RoundContainer width="50dvw" height="AUTO">
                    <TitleDiv>
                        <p>마이페이지</p>
                    </TitleDiv>
                    <ContainerContent>
                        <h1>현재 이메일</h1>
                        <EmailBox>
                            <MdOutlineMailLock />
                            <p>{email}</p>
                        </EmailBox>
                    </ContainerContent>
                    <ContainerContent>
                        <h1>이메일 변경</h1>
                        <WhiteInput 
                            type="email" 
                            placeholder='변경할 이메일을 입력하세요' 
                            value={_email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <BlackButton>변경하기</BlackButton>
                    </ContainerContent>
                </RoundContainer>
                <RoundContainer width="50dvw" height="AUTO" style={{ marginTop: '4dvh' }}>
                    <TitleDiv>
                        <p>계정 삭제</p>
                    </TitleDiv>
                    <ContainerContent>
                        <h1 style={{ fontWeight: 500 }}>계정을 삭제하시려면 아래 버튼을 눌러주세요</h1>
                        <ColorButton color="#DC2626" textColor="white">계정 삭제</ColorButton>
                    </ContainerContent>
                </RoundContainer>
            </BodyDiv>
        </OuterBox>
    )
}

export default Mypage