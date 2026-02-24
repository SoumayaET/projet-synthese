import React from 'react'
import './Home.css'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";


export default function Home() {
  return (
    <section className="home">
      
      <div className="overlay"></div>

      <video 
        src="/video/videoCity.mp4" muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container  ">
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>
          <h1 className='homeTitle'>Search your Holiday</h1>
        </div>

        {/* localisation */}
        <div className="carddiv">
              <div className="destinationInput">
                <label htmlFor="city">Search your desination</label>
                <div className="input flex">
                  <input type="text" placeholder='Enter name her' />
                  <GrLocation className='icon' />
                </div>
              </div>
            

            {/* date */}
            
              <div className="dateInput">
                <label htmlFor="date">Select your date</label>
                <div className="input flex">
                  <input type="date" />
                  
                </div>
              </div>
            

            {/* Price */}
            
              <div className="priceInput">
                  <div className="label_total flex">
                    <label htmlFor="price">Max price:</label>
                    <h1 className='total'>$5000</h1>
                  </div>
                  <div className="input flex">
                    <input  type="range" max="5000" min="1000" />
                  </div>
                </div>

                  <div className="sectionOptions flex">
                    <HiFilter className='icon'/> 
                    <span>more filter</span>
                  </div>
            </div>
          <div className="homeFooterIcon flex">
        <div className="rightIcons">
            <FaFacebook className='icon' />
            <FaInstagram  className='icon' />
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