import logo from "../../img/logo/logo_kasa-head.svg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Header() {
    const location = useLocation();

    useEffect(() => {
        const links = document.querySelectorAll("a");

        links.forEach((link) => {
            if (link.getAttribute("href") === location.pathname) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }, [location]);

    return (
        <header className="header">
            <img src={logo} alt="logo" className="header_logo" />
            <nav className="header_nav">
                <Link to="/react_kasa_page/" className="nav_link">
                    Accueil
                </Link>
                <Link to="/react_kasa_page/a_propos" className="nav_link">
                    A Propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
