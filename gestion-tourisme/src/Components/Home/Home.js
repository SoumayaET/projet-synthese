import React,{useEffect} from 'react'
import './Home.css'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";
import Aos from 'aos';
import 'aos/dist/aos.css' 

export default function Home() {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="home">
      
      <div className="overlay"></div>

      <video 
        src="/video/videoCity.mp4" muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Nos forfaits
          </span>
          <h1 data-aos="fade-up" className='homeTitle'>Cherchez vos vacances à Marrakech</h1>
        </div>

        {/* localisation */}
        <div data-aos="fade-up" className="carddiv">
              <div className="destinationInput">
                <label htmlFor="city">Recherchez votre destination</label>
                <div className="input flex">
                  <input type="text" placeholder='Entrez le nom ici' />
                  <GrLocation className='icon' />
                </div>
              </div>
            
            {/* date */}
              <div className="dateInput">
                <label htmlFor="date">Sélectionnez votre date</label>
                <div className="input flex">
                  <input type="date" />
                </div>
              </div>
            
            {/* Price */}
              <div className="priceInput">
                  <div className="label_total flex">
                    <label htmlFor="price">Prix maximum :</label>
                    <h1 className='total'>5000 MAD</h1>
                  </div>
                  <div className="input flex">
                    <input type="range" max="5000" min="1000" />
                  </div>
                </div>

                  <div className="sectionOptions flex">
                    <HiFilter className='icon'/> 
                    <span>Plus de filtres</span>
                  </div>
            </div>
          <div data-aos="fade-up" className="homeFooterIcon flex">
        <div className="rightIcons">
            <FaFacebook className='icon' />
            <FaInstagram className='icon' />
            <FaTwitterSquare className='icon' />
        </div>
        <div className="leftIcons">
           <FaList className='icon' />
           <TbAppsFilled className='icon' />
        </div>
      </div>
      </div>
      
    </section>
  )
}