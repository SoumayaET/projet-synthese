import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ استيراد useNavigate
import "./TripsMain.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Trips() {
  const [trips, setTrips] = useState([]);
  const scrollRef = useRef();
  const navigate = useNavigate();   // ✅ إنشاء المتغيّر

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/trips")
      .then((res) => res.json())
      .then((data) => setTrips(data))
      .catch((err) => console.log(err));
  }, []);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="trips-section">
      <h2 className="trip-title">Trips</h2>

      <button className="trip-scroll-btn left" onClick={() => scroll("left")}>
        <FaArrowLeft />
      </button>
      <button className="trip-scroll-btn right" onClick={() => scroll("right")}>
        <FaArrowRight />
      </button>

      <div className="trips-container" ref={scrollRef}>
        {trips.map((trip) => (
          <div className="trip-card" key={trip.id}>
            <img src={trip.image_url} alt={trip.name} className="trip-img" />

            <div className="trip-content">
              <h3>{trip.name}</h3>
              <p className="trip-departure">{trip.departure}</p>
              <p className="trip-duration">{trip.duration}</p>
              <p className="trip-price">{trip.price} MAD</p>

              {/* ✅ زر التفاصيل يوجّه لصفحة التفاصيل */}
              <button 
                className="trip-details-btn" 
                onClick={() => navigate(`/details/trip/${trip.id}`)}
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