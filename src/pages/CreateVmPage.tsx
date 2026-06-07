import Header from '../components/Header';
import { OuterBox, RoundContainer, BodyDiv, TitleDiv } from './style/PageStyle';
import { Label, WhiteInput, BlackButton, LockedWhiteInput } from '../components/style/CompStyle';
import { ContainerInBox, InputContainer, InnerInputContainer, InputsContainer } from './style/CreateVmStyle';
import { useNoLogin } from '../hooks/NotLogin';
import { useState } from 'react';
import axios, { AxiosError } from "axios"
import { BackUrl } from '../Datas';
import type { ErrorType } from '../types/ErrorType'
import type { CreateVmType } from '../types/CreateVmtype';
import Loading from '../components/Loading'; 
import VmCreatePopUp from '../components/VmCreatePopUp';
import { getCookie } from '../scripts/Cookie';
import { AccessTokenName } from '../Datas';

interface CreateVmRequest {
    name: string;
    userName: string;
}

function CreateVmPage() {
    useNoLogin();

    const [instanceName, setInstanceName] = useState('');
    const [linuxUsername, setLinuxUsername] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isPopUpOpen, setIsPopUpOpen] = useState(true);

    const [sshKey, setSshKey] = useState('');
    const [password, setPassword] = useState('');

    const accessToken = getCookie(AccessTokenName);

    const makeVm = async () => {
        if (!instanceName.trim()) {
            alert('인스턴스 이름을 입력해주세요.');
            return;
        }
        if (!linuxUsername.trim()) {
            alert('리눅스 계정 이름을 입력해주세요.');
            return;
        }
        try {
            const createData: CreateVmRequest = {
                name: instanceName,
                userName: linuxUsername,
            };
            setIsLoading(true);
            console.log(createData);
            axios
                .post<CreateVmType>(
                    `${BackUrl}/api/vm`, 
                    createData, // 두 번째 파라미터: Body 데이터 (DTO로 매핑됨)
                    {
                        headers: {
                            Authorization: `${accessToken}`, // 세 번째 파라미터: 설정 (인증 헤더)
                        },
                    }
                )
                .then((response) => {
                    console.log(response.data);
                    alert('인스턴스가 성공적으로 생성되었습니다.');
                    setSshKey(response.data.private_key);
                    setPassword(response.data.password);
                    setIsLoading(false);
                    setIsPopUpOpen(true);
                })
                .catch((error) => {
                    const err = error as AxiosError<ErrorType>;
                    console.log(err.response?.status);
                    console.log(err.response?.data.errorCode);
                    console.log(err.response?.data.errorMsg);
                    alert(err.response?.data.errorDescription || '인스턴스 생성에 실패했습니다. 다시 시도해주세요.');
                    // console.log(error);
                    // alert('인스턴스 생성에 실패했습니다. 다시 시도해주세요.');
                    setIsLoading(false);
                });
        } catch (err) {
            const error = err as AxiosError<ErrorType>;
            console.log(error.response?.status);

            console.log(error.response?.data.errorCode);
            console.log(error.response?.data.errorMsg);

            alert(error.response?.data.errorDescription);
        }
    }

    return (
        <OuterBox>
            {isPopUpOpen && (
                <VmCreatePopUp 
                    title="인스턴스 생성 완료"
                    password={password}
                    ssh_key={sshKey}
                />
            )}
            {isLoading && <Loading />}
            <Header main={false} />
            <BodyDiv style={{ marginTop: '5dvh' }}>
                <RoundContainer width="50dvw" height="AUTO">
                    <TitleDiv>
                        <p>새 인스턴스 생성</p>
                    </TitleDiv>
                    <ContainerInBox>
                        <InputContainer>
                            <Label>인스턴스 이름</Label>
                            <WhiteInput style={{ 
                                width: "100%",
                                border: "1px solid #D1D5DC",
                             }} type="text" placeholder='인스턴스 이름을 입력하세요' 
                             value={instanceName}
                             onChange={(e) => setInstanceName(e.target.value)} />
                        </InputContainer>
                        <InputContainer>
                            <Label>리눅스 계정 이름</Label>
                            <WhiteInput style={{ 
                                width: "100%",
                                border: "1px solid #D1D5DC",
                             }} type="text" placeholder='리눅스 계정 이름을 입력하세요' 
                             value={linuxUsername}
                             onChange={(e) => setLinuxUsername(e.target.value)} />
                        </InputContainer>
                        <InputsContainer>
                            <InnerInputContainer>
                                <Label>Core</Label>
                                <LockedWhiteInput style={{ 
                                    width: "100%",
                                    border: "1px solid #D1D5DC",
                                }} type="text" value='1 Cores' />
                            </InnerInputContainer>
                            <InnerInputContainer>
                                <Label>RAM</Label>
                                <LockedWhiteInput style={{ 
                                    width: "100%",
                                    border: "1px solid #D1D5DC",
                                }} type="text" value='512 MB' />
                            </InnerInputContainer>
                            <InnerInputContainer>
                                <Label>Storage</Label>
                                <LockedWhiteInput style={{ 
                                    width: "100%",
                                    border: "1px solid #D1D5DC",
                                }} type="text" value='20 GB' />
                            </InnerInputContainer>
                        </InputsContainer>
                        <BlackButton onClick={makeVm} style={{ width: '100%', margin: '1dvh 0 3dvh 0' }}>
                            생성하기
                        </BlackButton>
                    </ContainerInBox>
                </RoundContainer>
            </BodyDiv>
        </OuterBox>
    )
}

export default CreateVmPage