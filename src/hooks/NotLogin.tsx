import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BackUrl, AccessTokenName } from "../Datas";
import { getCookie } from "../scripts/Cookie";
import axios from "axios";
import { removeCookie, patchCookie } from "../scripts/Cookie";

import type { UserType } from "../types/UserType";

export function useNoLogin(setList?: (data?: any) => void) {
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
            const accessToken = getCookie(AccessTokenName);
            if (accessToken) {
                try {
                    // header Authorization: jwt
                    const user = await axios.get<UserType>(`${BackUrl}/api/auth/`, {
                        headers: {
                            Authorization: `${accessToken}`,
                        },
                    });
                    if (user.status === 200) {
                        const userId = user.data.id;
                        const userEmail = user.data.email;
                        const userCredit = user.data.credit;
                        const userVm = user.data.vm;
                        
                        setList?.(userVm);
                        // if (setList) {
                        //     setList(userVm);
                        // }

                        console.log(userId, userEmail, userCredit, userVm);
                        patchCookie(userId, userEmail, userCredit.toString(), userVm.toString());

                        return;
                    }
                } catch (err) {
                    console.log(err);
                    navigate("/auth");
                    removeCookie(AccessTokenName);
                }
            }
            navigate("/auth");
        };
        checkAuth(); // async 구현
    }, [navigate]);
}