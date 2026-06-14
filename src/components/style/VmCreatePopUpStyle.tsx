import styled, { keyframes } from "styled-components";

export const OuterBox = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100dvw;
    height: 100dvh;
    background-color: rgba(128, 128, 128, 0.5);
`

export const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30dvw;
    height: 60dvh;
    background-color: #FFFFFF;
    border: 1px solid #D1D5DC;
    border-radius: 1.4dvh;
    animation: ${fadeIn} 0.5s ease-in;
`

export const CheckBoxContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 4dvh;

    svg {
        width: 10dvw;
        height: 10dvh;
        color: #22C55E;
    }
`

export const XboxIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 0dvh;

    svg {
        width: 3dvw;
        height: 3dvh;
        color: #666666;
        margin-right: 1.5dvw;
        margin-left: auto;
        cursor: pointer;
    }
`;

export const LineContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 1dvh;
`

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 80%;
    margin-bottom: 2dvh;
    gap: 0.5dvh;
`
export const InlineContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 5dvh;
`

export const Label = styled.p`
    font-size: 1.5dvh;
    color: #9a9a9a;
    font-weight: 500;
    margin: 0;
`

export const WarningLabel = styled.p`
    font-size: 1.5dvh;
    color: #ef4444;
    font-weight: 500;
    margin: 0;
`