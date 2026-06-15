import { useState } from 'react';
import Header from '../components/Header';
import { OuterBox, RoundContainer, BodyDiv, TitleDiv } from './style/PageStyle';
import { Label, WhiteInput, BlackButton } from '../components/style/CompStyle';
import { ContainerInBox, InputContainer } from './style/CreateVmStyle';
import { useNoLogin } from '../hooks/NotLogin';

import axios from 'axios';
import { BackUrl } from '../Datas';
import { getCookie } from '../scripts/Cookie';
import { AccessTokenName } from '../Datas';

interface CodeType {
    code: string;
}

interface AddCouponResponse {
    status: string;
    credit: number;
}

// Vm 생성 페이지와 유사해 컴포넌트 스타일을 최대한 재사용하였음.
function AddCouponPage() {
    useNoLogin();
    // 쿠폰 등록 버튼 클릭 이벤트
    // 나중에 input 얻기할때 참고할 것
    const [couponCode, setCouponCode] = useState('');
    const accessToken = getCookie(AccessTokenName);

    const couponData: CodeType = {
        code: couponCode
    };

    const AddBtnClick = async() => {
        if (couponCode.trim()) {
            try {
                const response = await axios.post<AddCouponResponse>(`${BackUrl}/api/code/`, couponData, {
                    headers: {
                        Authorization: `${accessToken}`,
                    }
                });
                alert(`${response.data.credit} 크레딧 충전되었습니다.`);
            }
            catch (error) {
                console.error('쿠폰 등록 실패:', error);
                alert('쿠폰 등록에 실패했습니다. 다시 시도해주세요.');
                return;
            }
        } else {
            alert('쿠폰 코드를 입력하세요.');
        }
    }
    
    return (
        <OuterBox>
            <Header main={false} />
            <BodyDiv style={{ marginTop: '5dvh' }}>
                <RoundContainer width="50dvw" height="AUTO">
                    <TitleDiv>
                        <p>쿠폰 등록</p>
                    </TitleDiv>
                    <ContainerInBox>
                        <InputContainer>
                            <Label>쿠폰 코드</Label>
                            <WhiteInput style={{ 
                                    width: "100%",
                                    border: "1px solid #D1D5DC",
                                }} 
                                type="text" 
                                placeholder='쿠폰 코드를 입력하세요.'
                                id='couponCodeInput'
                                onChange={(e) => setCouponCode(e.target.value)} // 번경 될 때 마다 usestate에 업데이트
                            />
                        </InputContainer>
                        <BlackButton onClick={AddBtnClick} style={{ width: '100%', margin: '0.3dvh 0 3dvh 0' }}>
                            등록하기
                        </BlackButton>
                    </ContainerInBox>
                </RoundContainer>
            </BodyDiv>
        </OuterBox>
    )
}

export default AddCouponPage