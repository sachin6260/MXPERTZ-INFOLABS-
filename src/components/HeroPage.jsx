 
import React from "react";
import './HeroPage.css'

const HeroPage = () => {
    return (
        <div className="hero-section">
            <h1>The Lost City of Future of Earth</h1>

             <div className="button-container">
                <button className="button">
                    World Explore
                </button>
                <button className="button">
                    Story Adventure
                </button>
                <button className="button">
                    Brain Quest
                </button>
            </div>

             <div className="drag-section">
                <p>Drag Picture to the matching world, light up the current pair, shake for a retry.</p>
            </div>
        </div>
    );
};

export default HeroPage;
