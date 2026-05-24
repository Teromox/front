import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8dvh;

    border-radius: 1dvh;
    border: 1px solid #E5E7EB;
`

export const ContainerLeft = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1.4dvw;
    margin-left: 2dvw;
`

export const ContainerRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.4dvw;
    margin-left: auto;
    margin-right: 3dvw;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    height: 100%;
    gap: 0.4dvh;

    h1 {
        font-size: 1.4dvh;
        font-weight: 400;
        margin: 0;
        color: #4A5565;
    }

    p {
        font-size: 1.6dvh;
        font-weight: 600;
        margin: 0;
        color: #101828;
    }

    svg {
        display: block;
        color: #E7000B;
        padding: 0.4dvh;
        transition: all 0.2s ease;
    }

    svg:hover {
        background-color: rgba(255, 255, 255, 0.08);
        border-radius: 50%;
        cursor: pointer;
        
        transform: scale(1.08);
    }
`