import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import accommodations from "../../data/logements.json";

const locations = accommodations;

const HomeCardList = () => {
    const [delayedLocations, setDelayedLocations] = useState([]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedLocations(locations);
        }, 175);

        return () => clearTimeout(timer);
    }, []);

    return (
        <article className="home_card-list">
            {delayedLocations.map((location, index) => (
                <Link
                    key={location.id}
                    to={`/react_kasa_page/logement/${location.id}`}
                    className="home_card"
                    style={{ animationDelay: `${index * 175}ms` }}
                >
                    <img
                        src={location.cover}
                        alt={location.title}
                        className="home_card-img"
                    />
                    <div className="home_card-Filter"></div>
                    <h2 className="home_card-title">{location.title}</h2>
                </Link>
            ))}
        </article>
    );
};

export default HomeCardList;
