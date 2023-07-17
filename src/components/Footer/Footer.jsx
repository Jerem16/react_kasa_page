import logo from "../../img/logo/logo_kasa-blanc.svg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Footer() {
    const location = useLocation();
    const [url, setUrl] = useState("");

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    const [footerStyle, setFooterStyle] = useState({});

    useEffect(() => {
        const handleResize = () => {
            const isFooterVisible =
                window.innerHeight >= document.body.offsetHeight;

            if (
                url === "/react_kasa_page/" ||
                (url === "/react_kasa_page" && isFooterVisible)
            ) {
                setFooterStyle({
                    position: "fixed",
                    bottom: "0",
                });
            } else {
                setFooterStyle({
                    position: "absolute",
                });
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [url]);

    return (
        <footer key={url} style={footerStyle}>
            <div className="footer">
                <img src={logo} alt="logo" className="footer_logo" />
                <nav className="footer_nav">
                    <Link to="/react_kasa_page/" className="footer_nav-a">
                        &#169; 2020 Kasa. All right reserved
                    </Link>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;
