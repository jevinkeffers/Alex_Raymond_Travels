import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted />
            <h1>Alex Raymond Travels</h1>
            <p>THE ART OF DISCOVERY ...</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" button-Size="btn--large">
                    About Alex
                </Button>
                <Button className="btns" buttonStyle="btn--primary" button-Size="btn--large">
                    Book Now!
                </Button>
            </div>
        </div>
    )
}

export default Hero
