import Header from '../components/Header';
import { OuterBox, RoundContainer, BodyDiv, TitleDiv } from './style/PageStyle';
import { WhiteInput, BlackButton, ColorButton } from '../components/style/CompStyle';
import { ContainerContent, EmailBox } from './style/MyPageStyle';
import { MdOutlineMailLock } from "react-icons/md";
import { useNoLogin } from '../hooks/NotLogin';
import { getAllCookies } from '../scripts/Cookie';
import { useState } from 'react';
import axios from 'axios';
import { BackUrl } from '../Datas';
import { getCookie, setCookie } from '../scripts/Cookie';
import { AccessTokenName } from '../Datas';
import { useNavigate } from 'react-router-dom';

interface ChangeEmailRequest {
    newEmail: string;
}

const validateEmail = (value: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

function Mypage() {
    useNoLogin();
    const [_email, setEmail] = useState('');
    const { email } = getAllCookies();
    const accessToken = getCookie(AccessTokenName);
    const navigate = useNavigate();

    const changeEmailBtn = async() => {
        if (!validateEmail(_email)) {
            alert('유효한 이메일 주소를 입력하세요.');
            return;
        }
        if (_email.trim()) {
            try {
                const changeEmailData: ChangeEmailRequest = {
                    newEmail: _email
                };
                await axios.patch<unknown>(`${BackUrl}/api/auth/email`, changeEmailData, {
                    headers: {
                        Authorization: `${accessToken}`,
                    }
                });
                alert(`이메일이 성공적으로 변경되었습니다.`);
                // 번경된 이메일로 쿠키 업데이트
                setCookie('email', _email);
                // 새로고침
                window.location.reload();
            }
            catch (error) {
                console.error('이메일 변경 실패:', error);
                alert('이메일 변경에 실패했습니다. 다시 시도해주세요.');
                return;
            }
        } else {
            alert('이메일을 입력하세요.');
        }
    }

    const accountDeleteBtn = async() => {
        if (window.confirm('징짜 계정 삭제 할꼬에욤....??')) {
            try {
                await axios.delete(`${BackUrl}/api/auth/`, {
                    headers: {
                        Authorization: `${accessToken}`,
                    }
                });
                alert('계정이 성공적으로 삭제되었습니다.');
                navigate('/logout');
            }
            catch (error) {
                console.error('계정 삭제 실패:', error);
                alert('계정 삭제에 실패했습니다. 다시 시도해주세요.');
                return;
            }
        }
    }
    
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
                        <BlackButton onClick={changeEmailBtn}>변경하기</BlackButton>
                    </ContainerContent>
                </RoundContainer>
                <RoundContainer width="50dvw" height="AUTO" style={{ marginTop: '4dvh' }}>
                    <TitleDiv>
                        <p>계정 삭제</p>
                    </TitleDiv>
                    <ContainerContent>
                        <h1 style={{ fontWeight: 500 }}>계정을 삭제하시려면 아래 버튼을 눌러주세요</h1>
                        <ColorButton color="#DC2626" textColor="white" onClick={accountDeleteBtn}>
                            계정 삭제
                        </ColorButton>
                    </ContainerContent>
                </RoundContainer>
            </BodyDiv>
        </OuterBox>
    )
}

export default Mypage