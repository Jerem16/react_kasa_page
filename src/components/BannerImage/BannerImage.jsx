import React from "react";
import home_img from "../../img/img_home.jpg";
import about_img from "../../img/img_a-propos.jpg";

const BannerImage = ({ page, bannerID }) => {
    let image;
    let text;

    const homeText = "Chez vous, partout et ailleurs";

    if (page === "/") {
        image = home_img;
        text = homeText;
    } else if (page === "about") {
        image = about_img;
        text = null;
    }

    return (
        <div className="BannerCard" id={bannerID}>
            <img src={image} alt="Card-home_img" className="BannerImage" />
            <div className="BannerFilter"></div>
            <p className="BannerText">{text}</p>
        </div>
    );
};

export default BannerImage;
