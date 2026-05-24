import { 
    Container,
    ContainerLeft, ContainerRight,
    Content
} from "./style/PortStyle";

import { MdDeleteOutline } from "react-icons/md";

type PortProps = {
    port: string;
    des: string;
}

function Port(
    { 
        port,
        des
    }: PortProps
) {
    return (
        <Container>
            <ContainerLeft>
                <Content>
                    <h1>포트</h1>
                    <p>{port}</p>
                </Content>
                <Content>
                    <h1>설명</h1>
                    <p>{des}</p>
                </Content>
            </ContainerLeft>
            <ContainerRight>
                <Content>
                    <MdDeleteOutline size={"2dvh"} />
                </Content>
            </ContainerRight>
        </Container>
    )
}

export default Port