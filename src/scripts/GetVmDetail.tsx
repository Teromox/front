import axios from "axios";
import { BackUrl, AccessTokenName } from "../Datas";
import { getCookie } from "./Cookie";
import type { VmInsideType } from "../types/VmInsideType";

export async function GetVmDetail(id: string): Promise<VmInsideType> {
    const accessToken = getCookie(AccessTokenName);

    const user = await axios.get<VmInsideType>(`${BackUrl}/api/vm/?id=${id}`, {
        headers: {
            Authorization: `${accessToken}`,
        },
    });
    return user.data;
}   