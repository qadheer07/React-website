import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
      <h1> Online Marketplace for Premium Gemstones </h1>
      <p> We are on a mission of helping Jewelry Manufacturers find High Quality ethically sourced Gemstones from all around the world. <Link to="/" className="learn-more">
        Learn{"\u00a0"}more{"\u00a0"}<i className="fas fa-chevron-right"></i>
      </Link> </p>
      
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          to='/signup'
        >
          {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
          Sign Up as a Buyer {"\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"}
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          {" "}
          Sell your Premium Gemstones
        </Button>
        <h4>Aleady on Gemelry? <a href='/login'>Sign in</a></h4>
      </div>
    </div>
  );
}

export default HeroSection;
