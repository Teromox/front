import { 
    Container, Icon,
    DesBox, DesTitle, DesSubBox, DesSub,
    StatusBox, StatusContent, StatusLabel, StatusValue
} from "../components/style/VmStyle"
import { FiCpu } from "react-icons/fi";
import { PiMemoryBold  } from "react-icons/pi";

type VmProps = {
    running: boolean;
    name: string;
    vmId: string;
    cpu: string;
    memory: string;
    ip: string;
}

function Vm(
    { 
        running,
        name,
        vmId,
        cpu,
        memory,
        ip
    }: VmProps
) {
    return (
        <Container>
            <Icon running={running}/>
            <DesBox>
                <DesTitle to="/vmdetail">{name}</DesTitle>
                <DesSubBox>
                    <DesSub>ID: {vmId}</DesSub>
                    <DesSub>내부 IP: {ip}</DesSub>
                </DesSubBox>
            </DesBox>
            <StatusBox>
                <StatusContent>
                    <StatusLabel>
                        <FiCpu />
                        <p>CPU</p>
                    </StatusLabel>
                    <StatusValue>{cpu}</StatusValue>
                </StatusContent>
                <StatusContent>
                    <StatusLabel>
                        <PiMemoryBold />
                        <p>RAM</p>
                    </StatusLabel>
                    <StatusValue>{memory}</StatusValue>
                </StatusContent>
            </StatusBox>
        </Container>
    )
}

export default Vm