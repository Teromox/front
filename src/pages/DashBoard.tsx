import React, { useState } from 'react';
import Header from '../components/Header';
import { OuterBox, RoundContainer } from './style/PageStyle';
import { 
    BodyDiv, MenuDiv, 
    SmallTitle, 
    ContentText, 
    ContainerInside, 
    ContentTextSmall, 
    FirstTitle, SecondContent,
    VmTitleContainer, VmTitle
} from './style/DashBoardStyle';
import { BlackButton, IconBtnInside } from '../components/style/CompStyle';
import { FaTicket } from "react-icons/fa6";
import { FiFilePlus } from "react-icons/fi";
import styled from 'styled-components';
import { AUTO } from './../../node_modules/css-to-react-native/src/tokenTypes';

function DashBoard() {
    return (
        <OuterBox>
            <Header main={true} />
            <BodyDiv>
                <MenuDiv>
                    <RoundContainer width="20dvw" height="20dvh">
                        <ContainerInside>
                            <SmallTitle>보유 크레딧</SmallTitle>
                            <ContentText>5 크레딧</ContentText>
                            <BlackButton style={{width: '90%', height: '25%', fontSize: '1.5dvh'}}>
                                <IconBtnInside>
                                    <FaTicket style={{ width: "1dvw", height: "1dvw" }}/>
                                    충전하기
                                </IconBtnInside>
                            </BlackButton>
                        </ContainerInside>
                    </RoundContainer>
                    <RoundContainer width="20dvw" height="20dvh">
                        <ContainerInside>
                            <SmallTitle>전체 VM</SmallTitle>
                            <ContentText>3대</ContentText>
                            <ContentTextSmall>실행 중 : 2대</ContentTextSmall>
                        </ContainerInside>
                    </RoundContainer>
                    <RoundContainer width="20dvw" height="20dvh">
                        <ContainerInside>
                            <FirstTitle>인스턴스 생성</FirstTitle>
                            <SecondContent>가상 머신을 생성하세요</SecondContent>
                            <BlackButton style={{width: '90%', height: '25%', fontSize: '1.5dvh'}}>
                                <IconBtnInside>
                                    <FiFilePlus style={{ width: "1dvw", height: "1dvw" }}/>
                                    생성하기
                                </IconBtnInside>
                            </BlackButton>
                        </ContainerInside>
                    </RoundContainer>
                </MenuDiv>
                <RoundContainer width="63dvw" height="AUTO" style={{ marginTop: '5dvh' }}>
                    <ContainerInside>
                        <VmTitleContainer>
                            <VmTitle>실행 중인 VM</VmTitle>
                        </VmTitleContainer>
                    </ContainerInside>
                </RoundContainer>
            </BodyDiv>
        </OuterBox>
    )
}

export default DashBoard