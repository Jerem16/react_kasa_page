import React from "react";
import { useParams } from "react-router-dom";
import accommodations from "../../data/logements.json";
import Error404 from "../Error404/Error404";
import Collapse from "../../components/Collapse/Collapse";
import Carousel from "../../components/Carousel/Carousel";
import HostCard from "../../components/LodgingHost/LodgingHost";
import "../../styles/main.scss";
import useBodyClass from "../useBodyClass";

function Logement() {
    useBodyClass("home");
    const { id } = useParams();

    const logement = accommodations.find(
        (accommodation) => accommodation.id === id
    );

    if (!logement) {
        return <Error404 />;
    }

    const rating = parseInt(logement.rating, 10);

    return (
        <main>
            <Carousel images={logement.pictures} />
            <div className="logement_card-layout">
                <article className="logement_card">
                    <h1 className="logement_card-title">{logement.title}</h1>
                    <p className="logement_card-location">
                        {logement.location}
                    </p>
                    <ul className="logement_card-tags">
                        {logement.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                </article>
                <HostCard host={logement.host} rating={rating} />
            </div>
            <div className="logement_collapse-layout">
                <Collapse
                    className="logement_collapse"
                    title="Description"
                    content={logement.description}
                />
                <Collapse
                    className="logement_collapse"
                    title="Équipements"
                    content={
                        <ul>
                            {logement.equipments.map((equipment) => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </main>
    );
}

export default Logement;
