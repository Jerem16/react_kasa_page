import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useBodyClass = (className) => {
    const location = useLocation();

    useEffect(() => {
        const body = document.body;

        if (location.pathname === "/react_kasa_page/") {
            body.classList.remove("intro", "show");
            body.classList.add(className);
        } else if (body.classList.contains("show")) {
            body.classList.remove("intro");
        } else {
            body.classList.remove(className);
            body.classList.add("intro");
            setTimeout(() => {
                body.classList.remove("intro");
                body.classList.add("show");
            }, 1900);
        }

        return () => {
            body.classList.remove(className);
        };
    }, [location.pathname, className]);
};

export default useBodyClass;
