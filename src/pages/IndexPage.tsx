import { GoArrowRight } from "react-icons/go";

import { 
    Container, ContainerInBox, 
    Title, LeftDiv,
    Line, LineDiv,
    Texts,
    StartButton, StartButtonContainer
} from './style/IndexStyle';

function IndexPage() {
    return (
        <Container>
            <ContainerInBox>
                <LeftDiv>
                    <Title>Teromox</Title>
                </LeftDiv>
                <LineDiv>
                    <Line />
                </LineDiv>
                <LeftDiv>
                    <Texts delay={0.5}>
                        <p>
                            <strong>아웃바운드 포트 제한 없는 실습용 인스턴스를 </strong>
                            몇 분 안에 생성하세요. <br />
                            짧은 실습용 인스턴스가 아닌 언제나 사용 가능한 가상 머신을 사용해 보세요.
                        </p>
                    </Texts>
                    <Texts delay={1}>
                        <p>
                            <strong>GCP, AWS 등 </strong>
                            사용하기 어렵고 과금 위험이 있는 서비스 대신. <br />
                            과금 위험 없이, 복잡한 방화벽 설정 없이,<br />
                            <strong>누구나 쉽게 사용할 수 있는 서비스.</strong>
                        </p>
                    </Texts>
                    <StartButtonContainer>
                        <StartButton delay={1.6} to="/auth">
                            지금 시작하기
                            <GoArrowRight style={{ width: '1.5dvw', height: '1.5dvh' }} />
                        </StartButton>
                        <StartButton delay={1.8} style={{ width: '10dvw' }} to="https://github.com/Teromox/Teromox/tree/main">
                            소스코드 확인하기
                            <GoArrowRight style={{ width: '1.5dvw', height: '1.5dvh' }} />
                        </StartButton>
                    </StartButtonContainer>
                </LeftDiv>
            </ContainerInBox>
        </Container>
    )
}

export default IndexPage