import { 
    Container,
    OuterBox,
    CheckBoxContainer,
    LineContainer,
    Label,
    LabelContainer,
    InlineContainer,
    WarningLabel,
    XboxIconContainer
} from "../components/style/VmCreatePopUpStyle"
import { CiCircleCheck } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { WhiteInput, BlackButton, BlackLink } from "./style/CompStyle";
import { useState } from "react";
import axios from "axios";
import { AccessTokenName, BackUrl } from "../Datas";
import { getCookie } from "../scripts/Cookie";

type PopupProps = {
    closeFunc?: () => void;
    vmId?: string | null;
}

interface AddPortResponse  {
    status: string;
    outPort: number;
}

function PortAddPopUp(
    { 
        closeFunc,
        vmId
    }: PopupProps
) {
    const [internalPort, setInternalPort] = useState('');
    const accessToken = getCookie(AccessTokenName);

    const handleAddPort = async () => {
        if (!internalPort) {
            alert("내부 포트를 입력해주세요.");
            return;
        }

        const portData = {
            InPort: parseInt(internalPort, 10),
            VmId: vmId
        };
        try {
            const response = await axios.post<AddPortResponse>(`${BackUrl}/api/port/`, portData, {
                headers: {
                    Authorization: `${accessToken}`,
                }
            });
            alert(`포트가 추가되었습니다. 외부 포트: ${response.data.outPort}`);
            if (closeFunc) {
                closeFunc();
            }
        }
        catch (error: unknown) {
            console.error('포트 추가 실패:', error);
            const errMsg = axios.isAxiosError(error)
                ? (error.response?.data?.errorDescription ?? error.message)
                : (error instanceof Error ? error.message : String(error));
            if (errMsg == "Server Err") {
                alert('포트 최대 개수를 초과했습니다.');
                return;
            }
            alert(errMsg || '포트 추가에 실패했습니다. 다시 시도해주세요.');
            return;
        }
    }
    return (
        <OuterBox>
            <Container style={{ height: '34dvh'}}>
                <XboxIconContainer>
                    <IoMdClose onClick={closeFunc} />
                </XboxIconContainer>
                <LineContainer>
                    <h1>포트 추가</h1>
                </LineContainer>
                <LabelContainer>
                    <Label>내부 포트</Label>
                    <InlineContainer>
                        <WhiteInput 
                            type="number" 
                            style={{ width: '100%' }}
                            max={65535}
                            min={1} 
                            value={internalPort}
                            onChange={(e) => setInternalPort(e.target.value)}
                        />
                    </InlineContainer>
                </LabelContainer>
                <LabelContainer>
                    <BlackButton style={{ width: '100%', height: '5dvh', padding: 0 }} onClick={handleAddPort}>
                        추가
                    </BlackButton>
                </LabelContainer>
            </Container>
        </OuterBox>
    )
}

export default PortAddPopUp