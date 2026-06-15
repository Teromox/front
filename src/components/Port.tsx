import { 
    Container,
    ContainerLeft, ContainerRight,
    Content
} from "./style/PortStyle";
import { AccessTokenName, BackUrl } from "../Datas";
import { getCookie } from "../scripts/Cookie";
import axios from "axios";

import { MdDeleteOutline } from "react-icons/md";

type PortProps = {
    port: string;
    outport: string;
    ssh: boolean;
    vmId?: string | null;
}

function Port(
    { 
        port,
        outport,
        ssh,
        vmId
    }: PortProps
) {
    const accessToken = getCookie(AccessTokenName);
    const handleDeletePort = async () => {
        const portData = {
            OutPort: parseInt(outport, 10),
            VmId: vmId
        };
        try {
            await axios.delete<unknown>(`${BackUrl}/api/port/`, {
                headers: {
                    Authorization: `${accessToken}`,
                },
                data: portData
            });
            alert(`포트가 삭제되었습니다.`);
            // 페이지 새로고침
            window.location.reload();
        }
        catch (error: unknown) {
            alert('포트 삭제에 실패했습니다. 다시 시도해주세요.');
            return;
        }
    }
    return (
        <Container>
            <ContainerLeft>
                <Content>
                    <h1>포트</h1>
                    <p>{port}</p>
                </Content>
                {ssh && (
                    <Content>
                        <h1>SSH 접속 포트</h1>
                        <p>{outport}</p>
                    </Content>
                ) || (
                    <Content>
                        <h1>외부 포트</h1>
                        <p>{outport}</p>
                    </Content>
                )}
            </ContainerLeft>
            <ContainerRight>
            {!ssh && (
                <Content>
                    <MdDeleteOutline onClick={handleDeletePort} size={"2dvh"} />
                </Content>
            )}
            </ContainerRight>
        </Container>
    )
}

export default Port