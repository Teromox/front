import { IoExitOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowRoundBack } from "react-icons/io";

import { HeaderBox, LogoBox, BtnBox, NewAtag } from "./style/HeaderStyle";

type HeaderProps = {
  main: boolean;
};

function Header(
    { main }: HeaderProps
) {
    return (
        <HeaderBox>
            {main ? (
                <>
                    <LogoBox>
                        <p>Teromox</p>
                    </LogoBox>
                    <BtnBox>
                        <NewAtag to="/mypage" color="#364153" hoverColor="#364153cf">
                            <AiOutlineUser size={"2dvh"} />
                            <p>마이페이지</p>
                        </NewAtag>
                        <NewAtag to="/logout" color="#E7000B" hoverColor="#ff8086">
                            <IoExitOutline size={"2dvh"} />
                            <p>로그아웃</p>
                        </NewAtag>
                    </BtnBox>
                </>
            ) : (
                <LogoBox>
                    <NewAtag to="/dashboard" color="#364153" hoverColor="#364153cf">
                        <IoIosArrowRoundBack size={"2.5dvh"} />
                        <p>대시보드로 돌아가기</p>
                    </NewAtag>
                </LogoBox>
            )}
        </HeaderBox>
    )
}

export default Header