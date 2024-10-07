import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useBodyClass = (className) => {
    const location = useLocation();

    // Effet pour ajouter ou retirer la classe basée sur la route
    useEffect(() => {
        const body = document.body;
        // const timer = setTimeout(() => {
        //     body.classList.remove("intro");
        //     body.classList.add("show");
        // }, 1900); // 2000 ms = 2 s

        if (location.pathname === "/") {
            body.classList.remove("intro", "show");
            body.classList.add(className);
        } else if (body.classList.contains("show")) {
            body.classList.remove("intro");
            // body.classList.add("show");
        } else {
            body.classList.remove(className);
            body.classList.add("intro");
            setTimeout(() => {
                body.classList.remove("intro");
                body.classList.add("show");
            }, 1900); // 2000 ms = 2 s
        }

        // Nettoyage pour retirer la classe quand le composant se démonte ou la route change
        return () => {
            body.classList.remove(className);
        };
    }, [location.pathname, className]);
};

export default useBodyClass;
