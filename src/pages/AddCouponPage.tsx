import React, { useState } from 'react';
import Header from '../components/Header';
import { OuterBox, RoundContainer, BodyDiv, TitleDiv } from './style/PageStyle';
import { Label, WhiteInput, BlackButton, LockedWhiteInput } from '../components/style/CompStyle';
import { ContainerInBox, InputContainer, InnerInputContainer, InputsContainer } from './style/CreateVmStyle';

function AddCouponPage() {

    // 쿠폰 등록 버튼 클릭 이벤트
    // 나중에 input 얻기할때 참고할 것
    const [couponCode, setCouponCode] = useState('');

    function AddBtnClick() {
        if (couponCode.trim()) {
            alert(couponCode);
        } else {
            alert('not');
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
                                onChange={(e) => setCouponCode(e.target.value)}
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