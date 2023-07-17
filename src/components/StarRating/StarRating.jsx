import React from "react";

const StarRating = ({ rating }) => {
    const stars = 5;
    const ratingStar = rating;
    const emptyStars = stars - ratingStar;

    return (
        <span className="star">
            {[...Array(ratingStar)].map((_, index) => (
                <i key={index} className="fas fa-star ratingStar"></i>
            ))}
            {[...Array(emptyStars)].map((_, index) => (
                <i key={index} className="fas fa-star emptyStars"></i>
            ))}
        </span>
    );
};

export default StarRating;
