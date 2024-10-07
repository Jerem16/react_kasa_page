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
            <Link to="/">
                <img src={logo} alt="logo" className="header_logo" />
            </Link>
            <nav className="header_nav">
                <Link to="/" className="nav_link">
                    Accueil
                </Link>
                <Link to="/a_propos" className="nav_link">
                    A Propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
