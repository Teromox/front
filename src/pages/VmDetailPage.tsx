import { useState } from 'react';
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

function VmDetailPage() {
    useNoLogin();
    const [isRunning, setIsRunning]= useState(true); // VM 실행 상태를 나타내는 상태 변수

    return (
        <OuterBox>
            <Header main={false} />
            <BodyDiv style={{ marginTop: '5dvh' }}>
                <RoundContainer width="60dvw" height="AUTO">
                    <TitleDiv>
                        <TitleLeft>
                            <Icon running={isRunning} />
                            <TitleSub>
                                <TitleSub>
                                    <h1>Ubuntu 20.04</h1>
                                    <p>ID: 101</p>
                                </TitleSub>
                            </TitleSub>
                        </TitleLeft>
                        <TitleRight>
                            {isRunning ? (
                                <ColorButton
                                    color="#E7000B" 
                                    textColor="white" 
                                    onClick={() => setIsRunning(false)}
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
                                    onClick={() => setIsRunning(true)}
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
                                    <p>10.0.0.1</p>
                                </Conk1Content>
                            </Conk1>
                            <Conk1 color="#155DFC">
                                <FaNetworkWired/>
                                <Conk1Content>
                                    <p>외부 IP</p>
                                    <p>59.23.119.207</p>
                                </Conk1Content>
                            </Conk1>
                            <Conk1 color="#9810FA">
                                <FaRegUser/>
                                <Conk1Content>
                                    <p>사용자명</p>
                                    <p>admin</p>
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
                                            <p>50%</p>
                                        </Conk2ContentRight>
                                    </Conk2Content>
                                    <Conk2Content>
                                        <OuterBar>
                                            <InnerBar percentage={50} color="#F54900" />
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
                                            <p>10%</p>
                                        </Conk2ContentRight>
                                    </Conk2Content>
                                    <Conk2Content>
                                        <OuterBar>
                                            <InnerBar percentage={10} color="#000000" />
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
                            >
                                <IoMdAdd />
                                포트 추가
                            </ColorButton>
                        </TitleRight>
                    </TitleDiv>
                    <ContainerInBox style={{ marginBottom: '5dvh' }}>
                        <Port port="80" des="HTTP"/>
                        <Port port="80" des="HTTP"/>
                        <Port port="80" des="HTTP"/>
                        <Port port="80" des="HTTP"/>
                    </ContainerInBox>
                </RoundContainer>
            </BodyDiv>
        </OuterBox>
    )
}

export default VmDetailPage