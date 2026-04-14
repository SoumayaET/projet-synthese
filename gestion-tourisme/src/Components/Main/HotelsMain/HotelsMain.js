import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";   // ✅ استيراد useNavigate
import "./HotelsMain.css";
import { FaArrowLeft, FaArrowRight, FaPhone } from "react-icons/fa";

export default function Hotels() {
  const [hotels, setHotels] = useState([]);
  const scrollRef = useRef();
  const navigate = useNavigate();   // ✅ إنشاء المتغيّر

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/hotels")
      .then((res) => res.json())
      .then((data) => setHotels(data))
      .catch((err) => console.log(err));
  }, []);

  const scroll = (dir) => {
    scrollRef.current.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="hotels-section">
      <h2 className="title">Hotels</h2>

      {/* زر يسار */}
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        <FaArrowLeft />
      </button>

      {/* زر يمين */}
      <button className="scroll-btn right" onClick={() => scroll("right")}>
        <FaArrowRight />
      </button>

      <div className="hotels-container" ref={scrollRef}>
        {hotels.map((hotel) => (
          <div className="hotel-card" key={hotel.id}>
            <img src={hotel.image_url} alt={hotel.name} className="hotel-img" />

            <div className="hotel-content">
              <h3>{hotel.name}</h3>
              <p className="address">{hotel.address}</p>

              {/* 📞 الهاتف */}
              <div className="phone">
                <FaPhone />
                <span>{hotel.phone}</span>
              </div>

              {/* ✅ زر التفاصيل يوجّه لصفحة التفاصيل */}
              <button 
                className="details-btn" 
                onClick={() =>navigate(`/details/hotel/${hotel.id}`)}
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