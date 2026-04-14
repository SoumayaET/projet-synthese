import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ استيراد useNavigate
import "./CafesMain.css";
import { FaArrowLeft, FaArrowRight, FaStar, FaPhone } from "react-icons/fa";

export default function Cafes() {
  const [cafes, setCafes] = useState([]);
  const scrollRef = useRef();
  const navigate = useNavigate();   // ✅ إنشاء المتغيّر

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cafes")
      .then((res) => res.json())
      .then((data) => setCafes(data))
      .catch((err) => console.log(err));
  }, []);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="cafes-section">
      <h2 className="title">Cafes</h2>

      {/* زر يسار */}
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        <FaArrowLeft />
      </button>

      {/* زر يمين */}
      <button className="scroll-btn right" onClick={() => scroll("right")}>
        <FaArrowRight />
      </button>

      <div className="cafes-container" ref={scrollRef}>
        {cafes.map((cafe) => (
          <div className="cafe-card" key={cafe.id}>
            <img src={cafe.image_url} alt={cafe.name} className="cafe-img" />

            <div className="cafe-content">
              <h3>{cafe.name}</h3>

              <p className="address">{cafe.address}</p>

              {/* ⭐ النجوم أفقية */}
              <div className="stars">
                {[...Array(cafe.stars || 0)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* 📞 نفس السطر */}
              <div className="phone">
                <FaPhone />
                <span>{cafe.phone}</span>
              </div>

              {/* ✅ زر التفاصيل يوجّه لصفحة التفاصيل */}
              <button 
                className="details-btn" 
                onClick={() => navigate(`/details/cafe/${cafe.id}`)}
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