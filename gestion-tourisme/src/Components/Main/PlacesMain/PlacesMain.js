import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ استيراد useNavigate
import "./PlacesMain.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Places() {
  const [places, setPlaces] = useState([]);
  const scrollRef = useRef();
  const navigate = useNavigate();   // ✅ إنشاء المتغيّر

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data))
      .catch((err) => console.log(err));
  }, []);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="places-section">
      <h2 className="place-title">Tourist Places</h2>

      <button className="place-scroll-btn left" onClick={() => scroll("left")}>
        <FaArrowLeft />
      </button>
      <button className="place-scroll-btn right" onClick={() => scroll("right")}>
        <FaArrowRight />
      </button>

      <div className="places-container" ref={scrollRef}>
        {places.map((place) => (
          <div className="place-card" key={place.id}>
            <img src={place.image_url} alt={place.name} className="place-img" />

            <div className="place-content">
              <h3>{place.name}</h3>
              <p className="place-address">{place.address}</p>
              <p className="place-category">{place.category}</p>
              <p className="place-description">{place.description}</p>

              {/* ✅ زر التفاصيل يوجّه لصفحة التفاصيل */}
              <button 
                className="place-details-btn" 
                onClick={() => navigate(`/details/place/${place.id}`)}
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}