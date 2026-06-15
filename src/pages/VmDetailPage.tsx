import { use, useEffect, useState } from 'react';
import Header from '../components/Header';
import { 
    OuterBox, RoundContainer, BodyDiv, TitleDiv,
    TitleLeft, TitleSub, Icon,
    TitleRight
} from './style/PageStyle';
import { ColorButton } from '../components/style/CompStyle';
import { ContainerInBox } from './style/CreateVmStyle';
import { 
    ContainerInRowBox, HalfBox, Conk1, Conk1Content, Conk3,
    Conk2, Conk2Content, Conk2ContentLeft, Conk2ContentRight, Conk2Inside
} from './style/VmDetailStyle';

import { FaNetworkWired, FaRegUser } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { PiMemory } from "react-icons/pi";
import { VscDebugRestart } from "react-icons/vsc";
import { IoMdAdd } from "react-icons/io";

import { GoCpu } from "react-icons/go";
import { OuterBar, InnerBar } from './style/VmDetailStyle';
import Port from '../components/Port';
import { useNoLogin } from '../hooks/NotLogin';
import { GetVmDetail } from '../scripts/GetVmDetail';

import type { VmInsideType } from '../types/VmInsideType';
import Loading from '../components/Loading';
import { AccessTokenName, BackUrl } from '../Datas';
import { getCookie } from '../scripts/Cookie';
import type { CreateVmType } from '../types/CreateVmtype';

import axios from 'axios';
import VmCreatePopUp from '../components/VmCreatePopUp';
import { useNavigate } from 'react-router-dom';
import PortAddPopUp from '../components/PortAddPopUp';
import type { PortType } from '../types/PortType';

interface VmIdData {
    vmid: string;
}

interface VmIdData2 {
    id: string;
}

interface PortResponse {
    ports: PortType[];
}

function VmDetailPage() {
    useNoLogin();

    const navigate = useNavigate();
    const [isRunning, setIsRunning]= useState(true); // VM 실행 상태를 나타내는 상태 변수
    const [isLoading, setIsLoading] = useState(false);

    const [sshKey, setSshKey] = useState('');
    const [password, setPassword] = useState('');
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const [isPortPopUpOpen, setIsPortPopUpOpen] = useState(false);

    const urlParams = new URLSearchParams(window.location.search);
    const vmId = urlParams.get('id');
    const accessToken = getCookie(AccessTokenName);

    const wait3Seconds = () => {
        return new Promise(resolve => setTimeout(resolve, 3000));
    }

    const exampleVmDetail: VmInsideType = {
        cpu: 0,
        mem: 0,
        name: "로딩중",
        innerIp: "로딩중",
        outIp: "로딩중",
        username: "로딩중",
        status: "로딩중",
        sshPort: 0,
        uptime: 0,
        maxmem: 0,
    };

    const [vmDetail, setVmDetail] = useState<VmInsideType>(exampleVmDetail);
    
    const vmIdData: VmIdData = {
        vmid: vmId,
    };

    const vmIdData2: VmIdData2 = {
        id: vmId,
    };

    const startVm = async () => {
        setIsLoading(true);
        const response = await axios.post<any>(`${BackUrl}/api/vm/run`, vmIdData, {
            headers: {
                Authorization: `${accessToken}`,
            }
        });
        setIsRunning(true);
        await wait3Seconds();
        setIsLoading(false);
    }

    const stopVm = async() => {
        setIsLoading(true);
        const response = await axios.delete<any>(`${BackUrl}/api/vm/run`, { 
            data: vmIdData,
            headers: {
                Authorization: `${accessToken}`,
            }
        });
        setIsRunning(false)
        await wait3Seconds();
        setIsLoading(false);
    }

    const deleteVm = async () => {
        setIsLoading(true);
        const response = await axios.delete<any>(`${BackUrl}/api/vm/`, { 
            data: vmIdData2,
            headers: {
                Authorization: `${accessToken}`,
            }
        });
        alert('인스턴스가 성공적으로 삭제되었습니다.');
        setIsLoading(false);
        navigate('/dashboard');
    }

    const resetVm = async () => {
        setIsLoading(true);
        const response = await axios.put<CreateVmType>(`${BackUrl}/api/vm/`, vmIdData2, {
            headers: {
                Authorization: `${accessToken}`,
            }
        });
        setSshKey(response.data.private_key);
        setPassword(response.data.password);
        setIsLoading(false);
        setIsPopUpOpen(true);
    }

    const [portList, setPortList] = useState<PortType[]>([]);

    useEffect(() => {
        const fetchPortList = async () => {
            try {
                const response = await axios.get<PortResponse>(`${BackUrl}/api/port/?id=${vmId}`, {
                    headers: {
                        Authorization: `${accessToken}`,
                    }
                });
                setPortList(response.data.ports);
            }
            catch (error) {
                console.error('포트 리스트 가져오기 실패:', error);
            }
        }
        fetchPortList();
    }, [vmId, accessToken]);

    useEffect(() => {
        const fetchVmDetail = async () => {
            if (vmId) {
                try {
                    const detail: VmInsideType = await GetVmDetail(vmId);
                    // console.log('VM 상세 정보:', detail);
                    // console.log('VM 상세 정보 - 내부 IP:', detail.innerIp);
                    // console.log('VM 상세 정보 - 외부 IP:', detail.outIp);
                    // console.log('VM 상세 정보 - 사용자명:', detail.username);
                    setVmDetail(detail);
                    if (detail.status === 'running') {
                        setIsRunning(true);
                    } else {
                        setIsRunning(false);
                    }
                }
                catch (error) {
                    console.error('VM 상세 정보 가져오기 실패:', error);
                }
            }
        }
        fetchVmDetail();
    }, [vmId]);

    return (
        <OuterBox>
            {isLoading && <Loading />}
            {isPopUpOpen && (
                <VmCreatePopUp 
                    title="인스턴스 재생성 완료"
                    password={password}
                    ssh_key={sshKey}
                />
            )}
            {isPortPopUpOpen && (
                <PortAddPopUp vmId={vmId} closeFunc={() => setIsPortPopUpOpen(false)} />
            )}
            <Header main={false} />
            <BodyDiv style={{ marginTop: '5dvh' }}>
                <RoundContainer width="60dvw" height="AUTO">
                    <TitleDiv>
                        <TitleLeft>
                            <Icon running={isRunning} />
                            <TitleSub>
                                <TitleSub>
                                    <h1>{vmDetail?.name || '로딩중'}</h1>
                                    <p>ID: {vmId}</p>
                                </TitleSub>
                            </TitleSub>
                        </TitleLeft>
                        <TitleRight>
                            {isRunning ? (
                                <ColorButton
                                    color="#E7000B" 
                                    textColor="white" 
                                    onClick={stopVm}
                                    style={{
                                        width: '4dvw', 
                                        height: '2dvh', 
                                        fontSize: '1.5dvh',
                                        padding: '2dvh 0dvw',
                                    }}
                                >종료</ColorButton>
                            ) : (
                                <ColorButton
                                    color="#00A63E" 
                                    textColor="white" 
                                    onClick={startVm}
                                    style={{
                                        width: '4dvw', 
                                        height: '2dvh', 
                                        fontSize: '1.5dvh',
                                        padding: '2dvh 0dvw',
                                    }}
                                >시작</ColorButton>
                            )}
                        </TitleRight>
                    </TitleDiv>
                    <ContainerInRowBox>
                        <HalfBox>
                            <Conk1 color="#4A5565">
                                <FaNetworkWired/>
                                <Conk1Content>
                                    <p>내부 IP</p>
                                    <p>{vmDetail?.innerIp || '로딩중'}</p>
                                </Conk1Content>
                            </Conk1>
                            <Conk1 color="#155DFC">
                                <FaNetworkWired/>
                                <Conk1Content>
                                    <p>외부 IP</p>
                                    <p>{vmDetail?.outIp || '로딩중'}</p>
                                </Conk1Content>
                            </Conk1>
                            <Conk1 color="#9810FA">
                                <FaRegUser/>
                                <Conk1Content>
                                    <p>사용자명</p>
                                    <p>{vmDetail?.username || '로딩중'}</p>
                                </Conk1Content>
                            </Conk1>
                        </HalfBox>
                        <HalfBox>
                            <Conk2>
                                <Conk2Inside>
                                    <Conk2Content>
                                        <Conk2ContentLeft color="#F54900">
                                            <GoCpu />
                                            <p>CPU 사용량</p>
                                        </Conk2ContentLeft>
                                        <Conk2ContentRight>
                                            <p>{vmDetail?.cpu !== undefined ? `${Math.round(vmDetail?.cpu)}%` : '로딩중'}</p>
                                        </Conk2ContentRight>
                                    </Conk2Content>
                                    <Conk2Content>
                                        <OuterBar>
                                            <InnerBar percentage={Math.round(vmDetail?.cpu) || 0} color="#F54900" />
                                        </OuterBar>
                                    </Conk2Content>
                                </Conk2Inside>
                            </Conk2>
                            <Conk2>
                                <Conk2Inside>
                                    <Conk2Content>
                                        <Conk2ContentLeft color="#000000">
                                            <PiMemory />
                                            <p>RAM 사용량</p>
                                        </Conk2ContentLeft>
                                        <Conk2ContentRight>
                                            <p>{vmDetail?.mem !== undefined ? `${Math.round(vmDetail?.mem / vmDetail?.maxmem * 100)}%` : '로딩중'}</p>
                                        </Conk2ContentRight>
                                    </Conk2Content>
                                    <Conk2Content>
                                        <OuterBar>
                                            <InnerBar percentage={Math.round(vmDetail?.mem / vmDetail?.maxmem * 100) || 0} color="#000000" />
                                        </OuterBar>
                                    </Conk2Content>
                                </Conk2Inside>
                            </Conk2>
                            <Conk3>
                                <ColorButton
                                    color="#000000" 
                                    textColor="white" 
                                    style={{
                                        width: '45%',
                                        height: '60%', 
                                        fontSize: '1.5dvh',
                                        padding: '2dvh 1dvw',
                                        gap: '0.4dvw',
                                    }}
                                    onClick={resetVm}
                                >
                                    <VscDebugRestart size={"1.0dvw"} />
                                    인스턴스 초기화
                                </ColorButton>
                                <ColorButton
                                    color="#E7000B" 
                                    textColor="white" 
                                    style={{
                                        width: '45%',
                                        height: '60%', 
                                        fontSize: '1.5dvh',
                                        padding: '2dvh 1dvw',
                                        gap: '0.4dvw',
                                    }}
                                    onClick={deleteVm}
                                >
                                    <MdOutlineDeleteSweep size={"1.3dvw"} />
                                    인스턴스 삭제
                                </ColorButton>
                            </Conk3>
                        </HalfBox>
                    </ContainerInRowBox>
                </RoundContainer>
                <RoundContainer width="60dvw" height="AUTO" style={{ marginTop: '4dvh' }}>
                    <TitleDiv>
                        <p>포트 관리</p>
                        <TitleRight>
                            <ColorButton
                                color="#000000" 
                                textColor="white" 
                                style={{
                                    width: '7dvw', 
                                    height: '3dvh', 
                                    fontSize: '1.5dvh',
                                    padding: '2dvh 1dvw',
                                    gap: '0.4dvw',
                                }}
                                onClick={() => setIsPortPopUpOpen(true)}
                            >
                                <IoMdAdd />
                                포트 추가
                            </ColorButton>
                        </TitleRight>
                    </TitleDiv>
                    <ContainerInBox style={{ marginBottom: '5dvh' }}>
                        <Port ssh={true} vmId={vmId} port={"22"} outport={vmDetail?.sshPort.toString() || '0'} />
                        {portList.map((port, index) => (
                            <Port key={index} ssh={false} vmId={vmId} port={port.inPort.toString()} outport={port.outPort.toString()} />
                        ))}
                    </ContainerInBox>
                </RoundContainer>
            </BodyDiv>
        </OuterBox>
    )
}

export default VmDetailPage