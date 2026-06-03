import { Cookies } from 'react-cookie'

const cookies = new Cookies();

export const setCookie = (name: string, value: string) => {
	return cookies.set(name, value, { path: '/' })
}

export const getCookie = (name: string) => {
	return cookies.get(name)
}

export const removeCookie = (name: string) => {
	return cookies.remove(name, { path: '/' })
}

export const patchCookie = (id: string, email: string, credit: string, vm: string) => {
    setCookie("Id", id);
    setCookie("Email", email);
    setCookie("Credit", credit);
    setCookie("Vm", vm);
}

export const clearCookie = () => {
    cookies.remove("Id", { path: '/' });
    cookies.remove("Email", { path: '/' });
    cookies.remove("Credit", { path: '/' });
    cookies.remove("Vm", { path: '/' });
}

export const getAllCookies = () => {
    const id = getCookie("Id");
    const email = getCookie("Email");
    const credit = getCookie("Credit");
    const vm = getCookie("Vm");
    
    return { id, email, credit, vm };
}