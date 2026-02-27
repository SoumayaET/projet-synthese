import React, { useState, useEffect } from 'react'
import './Main.css'
import { CiLocationOn } from "react-icons/ci";
import { FaClipboardCheck } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css' 
import axios from 'axios';

export default function Main() {
  const [hotels, setHotels] = useState([])

  const fetchHotel = async () => {
    try {
      const { data } = await axios.get('http://127.0.0.1:8000/api/hotels');
      setHotels(data);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  }

  const deleteHotel = async (id) => {
    try {
      const { data } = await axios.delete(`http://127.0.0.1:8000/api/hotels/${id}`);
      console.log(data.message);
      fetchHotel();
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  }

  useEffect(() => {
    fetchHotel()
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="main container section">

      <div className="main-secTitle">
        <h3 className="main-title" data-aos="fade-right">
          Most Visited Hotels
        </h3>
      </div>

      <div className="main-secContainer grid">
        {hotels.map((ele) => (
          <div data-aos="fade-up" className="main-singleDestination" key={ele.id}>
            
            <div className="main-imageDiv">
              <img src={ele.image_url} alt={ele.name} />
            </div>

            <div className="main-cardInfo">
              <h4 className="main-desTitle">{ele.name}</h4>
              <span className="main-continent flex">
                <CiLocationOn className='main-icon icon' />
                <span className='main-name'>{ele.address}</span>
              </span>

              <div className="main-fees flex">
                <div className="main-grade">
                  <span>{ele.stars}<small>★</small></span>
                </div>

                <div className="main-price">
                  <h5>{ele.phone}</h5>
                </div>
              </div>

              <div className="main-desc">
                <p>{ele.description || 'No description available.'}</p>
              </div>

              <button className='main-btn btn flex' onClick={() => deleteHotel(ele.id)}>
                Details <FaClipboardCheck className='main-icon icon'/>
              </button>

            </div>
          </div>
        ))}
      </div>
    </section>
  )
}