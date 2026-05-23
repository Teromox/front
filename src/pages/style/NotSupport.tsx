import styled from 'styled-components';
import { url } from '../../../node_modules/zod/src/v4/mini/schemas';

export const NotSupportContainer = styled.div`
    width: 100dvw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 400;
`

// 화면 가장 왼쪽 아래에 언제나 고정하는 기여운!!!!!! 이미지
export const FixedLeftImage = styled.img`
    position: fixed;
    bottom: 0;
    left: 0;
    // 이미지 크기를 비율에 맞게 최대 30dvh,v로 제한하여 표시하기
    max-width: 30dvw;
    max-height: 30dvh;
    width: auto;
    height: auto;
`

// 오른쪽에도 이미지 고정함
export const FixedRightImage = styled.img`
    position: fixed;
    bottom: 0;
    right: 0;
    max-width: 30dvw;
    max-height: 30dvh;
    width: auto;
    height: auto;
`