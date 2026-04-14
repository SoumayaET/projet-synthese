import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ استيراد useNavigate
import "./RestaurantsMain.css";
import { FaArrowLeft, FaArrowRight, FaPhone } from "react-icons/fa";

export default function Restaurants() {
  const [restaurants, setRestaurants] = useState([]);
  const scrollRef = useRef();
  const navigate = useNavigate();   // ✅ إنشاء المتغيّر

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.log(err));
  }, []);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="restaurants-section">
      <h2 className="restaurant-title">Restaurants</h2>

      <button className="restaurant-scroll-btn left" onClick={() => scroll("left")}>
        <FaArrowLeft />
      </button>
      <button className="restaurant-scroll-btn right" onClick={() => scroll("right")}>
        <FaArrowRight />
      </button>

      <div className="restaurants-container" ref={scrollRef}>
        {restaurants.map((restaurant) => (
          <div className="restaurant-card" key={restaurant.id}>
            <img src={restaurant.image_url} alt={restaurant.name} className="restaurant-img" />

            <div className="restaurant-content">
              <h3>{restaurant.name}</h3>

              <p className="restaurant-address">{restaurant.address}</p>
              <p className="restaurant-cuisine">{restaurant.cuisine}</p>

              <div className="restaurant-phone">
                <FaPhone />
                <span>{restaurant.phone}</span>
              </div>

              {/* ✅ زر التفاصيل يوجّه لصفحة التفاصيل */}
              <button 
                className="restaurant-details-btn" 
                onClick={() => navigate(`/details/restaurant/${restaurant.id}`)}
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