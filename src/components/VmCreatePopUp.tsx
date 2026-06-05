import { 
    Container,
    OuterBox,
    CheckBoxContainer,
    LineContainer,
    Label,
    LabelContainer,
    InlineContainer,
    WarningLabel
} from "../components/style/VmCreatePopUpStyle"
import { CiCircleCheck } from "react-icons/ci";
import { WhiteInput, BlackButton, BlackLink } from "./style/CompStyle";

type PopupProps = {
    title: string;
    password: string;
    ssh_key: string;
}

function VmCreatePopUp(
    { 
        title,
        password,
        ssh_key
    }: PopupProps
) {
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password)
            .then(() => {
                alert("비밀번호가 클립보드에 복사되었습니다.");
            })
            .catch((err) => {
                console.error("복사 실패: ", err);
            });
    }

    const handleDownload = () => {
        // 생성할 파일의 데이터와 타입 설정
        const blob = new Blob([ssh_key], { type: 'text/plain;charset=utf-8' });

        // Blob 객체를 가리키는 임시 URL 생성
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = 'key.pem'; // 다운로드될 파일명 지정

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <OuterBox>
            <Container>
                <CheckBoxContainer>
                    <CiCircleCheck />
                </CheckBoxContainer>
                <LineContainer>
                    <h1>{title}</h1>
                </LineContainer>
                <LabelContainer>
                    <Label>비밀번호</Label>
                    <InlineContainer>
                        <WhiteInput value={password} type="password" style={{ width: '62%' }} readOnly />
                        <BlackButton style={{ width: '35%', padding: 0 }} onClick={copyToClipboard}>
                            복사
                        </BlackButton>
                    </InlineContainer>
                </LabelContainer>
                
                <LabelContainer>
                    <Label>SSH 키</Label>
                    <BlackButton style={{ width: '100%', height: '5dvh', padding: 0 }} onClick={handleDownload}>
                        SSH 키 다운로드
                    </BlackButton>
                </LabelContainer>
                <LabelContainer>
                    <WarningLabel>※ 위 정보는 다시 확인할 수 없으니 꼭 복사해두세요</WarningLabel>
                </LabelContainer>
                <LabelContainer>
                    <BlackLink style={{ width: '100%', height: '5dvh', padding: 0 }} to="/dashboard">
                        대시보드로 이동
                    </BlackLink>
                </LabelContainer>
            </Container>
        </OuterBox>
    )
}

export default VmCreatePopUp