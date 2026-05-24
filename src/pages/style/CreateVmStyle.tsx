import styled from 'styled-components';

// 전체 감싸는 컨테이너
export const ContainerInBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 1.5dvh;
`

export const ContainerInRowBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 1.5dvh;
`

export const HalfBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    width: 50%;

    gap: 1.5dvh;
    background-color: #000000;
`

// 입력 칸 감싸는 컨테이너 (라벨이 있어서 특이로 뺌)
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5dvh;
    width: 100%;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 5%;
    width: 100%;
`

export const InnerInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5dvh;
    width: 35%;
`