import { removeCookie, clearCookie } from "../scripts/Cookie";
import { Navigate } from "react-router-dom";
import { AccessTokenName } from "../Datas";

export default function LogoutPage() {
    removeCookie(AccessTokenName);
    clearCookie();
    return <Navigate to="/" />;
}