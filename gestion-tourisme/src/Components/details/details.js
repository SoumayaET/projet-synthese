import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import {
  FaPhone,
  FaMapMarkerAlt,
  FaStar,
  FaClock,
  FaMoneyBillAlt,
  FaMapMarkedAlt,
  FaRoute
} from "react-icons/fa";

export default function Details() {

  const { id, type } = useParams();
  const [data, setData] = useState(null);

  const getEndpoint = () => {
    switch (type) {
      case "cafe": return "cafes";
      case "hotel": return "hotels";
      case "place": return "places";
      case "restaurant": return "restaurants";
      case "trip": return "trips";
      default: return "cafes";
    }
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/${getEndpoint()}/${id}`)
      .then(res => res.json())
      .then(res => setData(res.data || res)) // ✅ حل مشكل Laravel
      .catch(err => console.log(err));
  }, [id, type]);

  if (!data) return <p className="loading">Chargement...</p>;

  return (
    <div className="details-container" style={{ paddingTop: "100px" }} >

      {/* LEFT IMAGE */}
      <div className="details-left">
        <img src={data.image_url} alt={data.name} />
      </div>

      {/* RIGHT */}
      <div className="details-right">

        <h2 className="details-title">{data.name}</h2>

        {/* ADDRESS */}
        {data.address && (
          <p className="info">
            <FaMapMarkerAlt className="icon" />
            {data.address}
          </p>
        )}

        {/* PHONE */}
        {data.phone && (
          <p className="info">
            <FaPhone className="icon" />
            {data.phone}
          </p>
        )}

        {/* ⭐ STARS (أفقية + معنى) */}
        {data.stars && (
          <div className="stars">
            {[...Array(data.stars)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
            <span className="stars-text">
              ({data.stars} étoiles = niveau de qualité)
            </span>
          </div>
        )}

        {/* TYPE DETAILS */}
        {type === "cafe" && (
          <>
            <p><strong>Type:</strong> {data.type}</p>
            {data.ambiance && <p><strong>Ambiance:</strong> {data.ambiance}</p>}
            {data.services && <p><strong>Services:</strong> {data.services}</p>}
          </>
        )}

        {type === "hotel" && (
          <>
            {data.room_types && <p><strong>Chambres:</strong> {data.room_types}</p>}
            {data.amenities && <p><strong>Services:</strong> {data.amenities}</p>}
          </>
        )}

        {type === "place" && (
          <>
            <p><strong>Catégorie:</strong> {data.category}</p>
            {data.opening_hours && (
              <p><FaClock className="icon" /> {data.opening_hours}</p>
            )}
            {data.entry_fee && (
              <p><FaMoneyBillAlt className="icon" /> {data.entry_fee} €</p>
            )}
          </>
        )}

        {type === "restaurant" && (
          <>
            <p><strong>Cuisine:</strong> {data.cuisine}</p>
            {data.specialties && <p><strong>Spécialités:</strong> {data.specialties}</p>}
          </>
        )}

        {type === "trip" && (
          <>
            <p><strong>Départ:</strong> {data.departure}</p>
            <p><strong>Durée:</strong> {data.duration}</p>
            <p><strong>Prix:</strong> {data.price} €</p>
          </>
        )}

        {/* DESCRIPTION */}
        {data.description && (
          <p className="description">{data.description}</p>
        )}

        {data.departure_map_url && (
              <a
                href={data.departure_map_url}
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn start"
              >
                <FaRoute /> Point de départ
              </a>
            )}

        {/* ✅ زر Google Maps بدل iframe */}
        {data.map_url && (
              <a
                href={data.map_url}
                target="_blank"
                rel="noopener noreferrer"
                className="map-btn destination"
              >
                <FaMapMarkedAlt /> Destination
              </a>
            )}

      </div>
    </div>
  );
}