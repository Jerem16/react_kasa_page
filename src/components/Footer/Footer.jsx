import logo from "../../img/logo/logo_kasa-blanc.svg";
import { Link } from "react-router-dom";
import React from "react";

function Footer() {
    return (
        <footer>
            <div className="footer">
                <img src={logo} alt="logo" className="footer_logo" />
                <nav className="footer_nav">
                    <Link to="/" className="footer_nav-a">
                        &#169; 2020 Kasa. All right reserved
                    </Link>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
