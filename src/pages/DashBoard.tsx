import styled from 'styled-components';
import React, { useState } from 'react';
import Header from '../components/Header';

const OuterBox = styled.div`
    width: 100dvw;
    height: 100dvh;
    background-color: #E5E7EB;
`

function DashBoard() {
    return (
        <OuterBox>
            <Header />
        </OuterBox>
    )
}

export default DashBoard