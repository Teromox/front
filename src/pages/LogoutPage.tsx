import { removeCookie } from "../scripts/Cookie";
import { Navigate } from "react-router-dom";
import { AccessTokenName } from "../Datas";

export default function LogoutPage() {
    removeCookie(AccessTokenName);
    return <Navigate to="/" />;
}