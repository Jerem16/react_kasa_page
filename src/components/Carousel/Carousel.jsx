import React, { useState } from "react";
import SlideNumber from "./SlideNumber";

const Carousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        if (currentSlide === images.length - 1) {
            setCurrentSlide(0); // Réinitialise à la première diapositive
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const goToPreviousSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(images.length - 1); // Passe à la dernière diapositive
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    return (
        <div className="slideshow">
            {images.length > 1 && (
                <button
                    className="slideshow-arrow slideshow-arrow-left"
                    onClick={goToPreviousSlide}
                >
                    <i className="fa-sharp fa-solid fa-chevron-left"></i>
                </button>
            )}
            <div className="slideshow-slide">
                <img
                    src={images[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                />
            </div>
            {images.length > 1 && (
                <button
                    className="slideshow-arrow slideshow-arrow-right"
                    onClick={goToNextSlide}
                >
                    <i className="fa-sharp fa-solid fa-chevron-right"></i>
                </button>
            )}
            <SlideNumber
                currentSlide={currentSlide}
                totalSlides={images.length}
            />
        </div>
    );
};

export default Carousel;
