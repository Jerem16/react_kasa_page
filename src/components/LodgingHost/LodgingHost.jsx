import React from "react";
import StarRating from "../StarRating/StarRating";

const HostCard = ({ host, rating }) => {
    const splitName = host.name.split(" ");
    const firstName = splitName[0];
    const lastName = splitName[1];

    return (
        <article className="logement_host">
            <h2 className="logement_host-title">
                {firstName}
                <br />
                {lastName}
            </h2>
            <img
                src={host.picture}
                alt={host.name}
                className="logement_host-img"
            />

            <StarRating rating={rating} />
        </article>
    );
};

export default HostCard;
