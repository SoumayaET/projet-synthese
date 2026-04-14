import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import './OwnerDashboard.css';

export default function OwnerDashboard() {

  const [view, setView] = useState('hotels');
  const [data, setData] = useState([]);
  const [user, setUser] = useState(null);

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const location = useLocation(); 

  const BASE_URL = "http://127.0.0.1:8000";

  // 👤 USER
  const fetchUser = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/user`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(res.data);
    } catch (err) {
      console.error("User error:", err);
    }
  };

  
  const fetchData = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/my-items`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const filtered = res.data.filter(item => item.type === view);
      setData(filtered);

    } catch (err) {
      console.error("Data error:", err);
    }
  };

  // 🗑️ DELETE
  const deleteItem = async (id) => {
    if (!window.confirm("Supprimer ?")) return;

    try {
      await axios.delete(`${BASE_URL}/api/${view}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      setData(prev => prev.filter(item => item.id !== id));

    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // ✏️ EDIT
  const editItem = (item) => {
    navigate(`/edit/${view}/${item.id}`, { state: item });
  };

  // 🔁 LOAD USER
  useEffect(() => {
    fetchUser();
  }, []);

  // 🔁 LOAD DATA بعد user + بعد update ✅
  useEffect(() => {
    if (user) {
      fetchData();
    }
  }, [view, user, location.state]); // ✅ إضافة location.state

  return (
    <div className="ownerDashboard" style={{ paddingTop: "90px" }}>

      <div className="sidebar">
        <h2>Owner</h2>

        <button onClick={() => setView('hotels')}>Hotels</button>
        <button onClick={() => setView('cafes')}>Cafes</button>
        <button onClick={() => setView('restaurants')}>Restaurants</button>
        <button onClick={() => setView('trips')}>Trips</button>
        <button onClick={() => setView('places')}>Places</button>
      </div>

      <div className="content">

        <div className="ownerInfo">
          <h2>{user?.name || "Loading..."}</h2>
          <p>{user?.email}</p>
        </div>

        <div className="cards">

          {data.length === 0 ? (
            <p>Aucun élément</p>
          ) : (
            data.map(item => {

              // ✅ تصحيح المسار
              const imageSrc = item.image
                ? `${BASE_URL}/storage/${item.type}/image/${item.image}`
                : "https://via.placeholder.com/300";

              return (
                <div className="card" key={item.id}>

                  <img
                    src={imageSrc}
                    alt={item.name}
                    onError={(e) => e.target.src = "https://via.placeholder.com/300"}
                  />

                  <div className="cardBody">
                    <h3>{item.name}</h3>
                    <p>{item.address}</p>

                    <div className="actions">

                      <button
                        className="editBtn"
                        onClick={() => editItem(item)}
                      >
                        Modifier
                      </button>

                      <button
                        className="deleteBtn"
                        onClick={() => deleteItem(item.id)}
                      >
                        Supprimer
                      </button>

                    </div>
                  </div>

                </div>
              );
            })
          )}

        </div>

      </div>
    </div>
  );
}