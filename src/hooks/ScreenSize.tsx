import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const MIN_WIDTH = 768;
const MIN_HEIGHT = 700;

export function useScreenGuard() {
    const navigate = useNavigate();

    const status = useRef(true);
    const backUrl = useRef<string>("/dashboard");

    useEffect(() => {
        const check = () => {
            const w = window.innerWidth;
            const h = window.innerHeight;

            // 화면 작으면 막고, 화면 충분하면 저장한 url로 다시 이동하깅
            if (w < MIN_WIDTH || h < MIN_HEIGHT) {
                if (status.current) {
                    backUrl.current = window.location.pathname;
                    navigate("/notsupported");
                    status.current = false;
                }
            }

            if (!status.current && w >= MIN_WIDTH && h >= MIN_HEIGHT) {
                navigate(backUrl.current || "/dashboard");
                status.current = true;
            }
        };

        check();
        window.addEventListener("resize", check);

        return () => window.removeEventListener("resize", check);
    }, [navigate]);
}