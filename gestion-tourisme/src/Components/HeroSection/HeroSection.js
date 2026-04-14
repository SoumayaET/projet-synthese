import React from "react";
import "./HeroSection.css";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const scrollToCards = () => {
    const cardsSection = document.getElementById("cards-section");
    if (cardsSection) {
      cardsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToFilterPage = () => {
    navigate("/search");
  };

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/image-HeroSection.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

      }}
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Marrakech City</h1>
          <p>
            Explore the best hotels, cafes, restaurants, and trips in Marrakech.
          </p>

          <div className="hero-buttons">
            <a href="#main">
            <button className="hero-scroll-btn" onClick={scrollToCards}>
              
              <FaArrowDown /> Explore
              
            </button>
            </a>
            <Link to="/search">
            <button className="hero-filter-btn" onClick={goToFilterPage}>
              Search & Filter
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}