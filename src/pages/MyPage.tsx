import styled from 'styled-components';
import React, { useState } from 'react';
import Header from '../components/Header';
import { OuterBox } from './style/PageStyle';

function Mypage() {
    return (
        <OuterBox>
            <Header main={false} />
        </OuterBox>
    )
}

export default Mypage