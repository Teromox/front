import styled from 'styled-components';

export const ContainerContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;

    h1 {
        font-size: 2dvh;
        font-weight: 600;
        margin: 0;
        margin-bottom: 1.9dvh;
    }

    input {
        border: 0.2px solid #D1D5DC;
        margin-bottom: 1dvh;
    }

    button {
        margin-bottom: 4dvh;
    }
`

export const EmailBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 1dvw;
    padding: 0 0 0 0; // 위 오른쪽 아래 왼쪽
    background-color: #F9FAFB;
    border-radius: 1dvh;
    margin-bottom: 2dvh;

    p {
        font-size: 1.7dvh;
        color: #111827;
        margin: 2dvh 0 2dvh 0; // 위 오른쪽 아래 왼쪽
    }

    svg {
        margin-left: 1.6dvw;
        color: #111827;
        height: 2.5dvh;
        width: auto;
    }
`