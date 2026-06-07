import Header from '../components/Header';
import { OuterBox, RoundContainer, BodyDiv } from './style/PageStyle';
import { 
    MenuDiv, 
    SmallTitle, 
    ContentText, 
    ContainerInside, 
    FirstTitle, SecondContent,
    VmTitleContainer, VmTitle
} from './style/DashBoardStyle';
import { IconBtnInside, BlackLink } from '../components/style/CompStyle';
import { FaTicket } from "react-icons/fa6";
import { FiFilePlus } from "react-icons/fi";
// import Loading from '../components/Loading'; 나중에 로딩 필요할때 쓰기
import Vm from '../components/Vm';
import { useNoLogin } from '../hooks/NotLogin';

import { getAllCookies } from '../scripts/Cookie';
import { useState } from 'react';
import type { VmType } from '../types/VmType';

import { GetVmDetail } from '../scripts/GetVmDetail';
import { useEffect } from 'react';

function DashBoard() {
    const [vmList, setVmList] = useState([] as VmType[]);
    useNoLogin(setVmList);
    const { credit } = getAllCookies();

    const [vmDetails, setVmDetails] = useState([]);

    useEffect(() => {
        const loadVmDetails = async () => {
            const details = await Promise.all(
                vmList.map(async vm => {
                    const detail = await GetVmDetail(vm.id);

                    return {
                        ...vm,
                        detail
                    };
                })
            );

            setVmDetails(details);
        };

        if (vmList.length > 0) {
            loadVmDetails();
        }
    }, [vmList]);
    
    console.log("vmList:", vmList);
    return (
        <OuterBox>
            <Header main={true} />
            <BodyDiv>
                <MenuDiv>
                    <RoundContainer width="20dvw" height="20dvh">
                        <ContainerInside>
                            <SmallTitle>보유 크레딧</SmallTitle>
                            <ContentText>{credit} 크레딧</ContentText>
                            <BlackLink to="/addcoupon" style={{width: '90%', height: '25%', fontSize: '1.5dvh'}}>
                                <IconBtnInside>
                                    <FaTicket style={{ width: "1dvw", height: "1dvw" }}/>
                                    충전하기
                                </IconBtnInside>
                            </BlackLink>
                        </ContainerInside>
                    </RoundContainer>
                    <RoundContainer width="20dvw" height="20dvh">
                        <ContainerInside>
                            <SmallTitle>전체 VM</SmallTitle>
                            <ContentText>{vmList.length}대</ContentText>
                        </ContainerInside>  
                    </RoundContainer>
                    <RoundContainer width="20dvw" height="20dvh">
                        <ContainerInside>
                            <FirstTitle>인스턴스 생성</FirstTitle>
                            <SecondContent>가상 머신을 생성하세요</SecondContent>
                            <BlackLink to="/createvm" style={{width: '90%', height: '25%', fontSize: '1.5dvh'}}>
                                <IconBtnInside>
                                    <FiFilePlus style={{ width: "1dvw", height: "1dvw" }}/>
                                    생성하기
                                </IconBtnInside>
                            </BlackLink>
                        </ContainerInside>
                    </RoundContainer>
                </MenuDiv>
                <RoundContainer width="63dvw" height="AUTO" style={{ marginTop: '5dvh' }}>
                    <VmTitleContainer>
                        <VmTitle>인스턴스 목록</VmTitle>
                    </VmTitleContainer>
                    {
                        vmDetails.map(vm => (
                            <Vm
                                vmId={vm.id}
                                name={vm.detail.name}
                                running={vm.detail.status === "running"}
                                cpu={Math.round(vm.detail.cpu)}
                                memory={Math.round(vm.detail.mem / vm.detail.maxmem * 100)}
                                ip={vm.ip}
                            />
                        ))
                    }
                </RoundContainer>
            </BodyDiv>
        </OuterBox>
    )
}

export default DashBoard