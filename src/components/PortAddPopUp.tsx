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

type PopupProps = {
    closeFunc?: () => void;
}

function PortAddPopUp(
    { 
        closeFunc
    }: PopupProps
) {
    return (
        <OuterBox>
            <Container style={{ height: '45dvh'}}>
                <XboxIconContainer>
                    <IoMdClose onClick={closeFunc} />
                </XboxIconContainer>
                <LineContainer>
                    <h1>포트 추가</h1>
                </LineContainer>
                <LabelContainer>
                    <Label>내부 포트</Label>
                    <InlineContainer>
                        <WhiteInput type="text" style={{ width: '100%' }} />
                    </InlineContainer>
                </LabelContainer>
                
                <LabelContainer>
                    <Label>외부 포트</Label>
                    <InlineContainer>
                        <WhiteInput type="text" style={{ width: '100%' }} />
                    </InlineContainer>
                </LabelContainer>
                <LabelContainer>
                    <BlackLink style={{ width: '100%', height: '5dvh', padding: 0 }} to="/dashboard">
                        추가
                    </BlackLink>
                </LabelContainer>
            </Container>
        </OuterBox>
    )
}

export default PortAddPopUp