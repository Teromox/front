import React from 'react';
import { NotSupportContainer, FixedRightImage, FixedLeftImage } from './style/NotSupport';

export default function NotSupport() {
    return (
        <NotSupportContainer>
            <h1>지원되지 않는 화면입니다</h1>
            <p>데스크톱 환경에서 접속해주세요.</p>
            <FixedRightImage src="https://i.pinimg.com/736x/59/3c/b6/593cb6da2a14f15bc92a3dd590816171.jpg" alt="치이카와" />
            <FixedLeftImage src="https://i.pinimg.com/736x/ff/e2/07/ffe207e8cba9dec1ca66542da0323a01.jpg" alt="하치와레" />
        </NotSupportContainer>
    );
}