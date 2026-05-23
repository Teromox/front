import React, { useState } from 'react';
import Header from '../components/Header';
import { OuterBox, RoundContainer, BodyDiv, TitleDiv } from './style/PageStyle';
import { Label, WhiteInput, BlackButton, LockedWhiteInput } from '../components/style/CompStyle';
import { ContainerInBox, InputContainer, InnerInputContainer, InputsContainer } from './style/CreateVmStyle';

function CreateVmPage() {
    return (
        <OuterBox>
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
                             }} type="text" placeholder='인스턴스 이름을 입력하세요' />
                        </InputContainer>
                        <InputContainer>
                            <Label>리눅스 계정 이름</Label>
                            <WhiteInput style={{ 
                                width: "100%",
                                border: "1px solid #D1D5DC",
                             }} type="text" placeholder='리눅스 계정 이름을 입력하세요' />
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
                        <BlackButton style={{ width: '100%', margin: '1dvh 0 3dvh 0' }}>
                            생성하기
                        </BlackButton>
                    </ContainerInBox>
                </RoundContainer>
            </BodyDiv>
        </OuterBox>
    )
}

export default CreateVmPage