import React from 'react'
import './Footer.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-videoDiv">
        <video 
        src="/video/videoCity.mp4" muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="footer-secContent container">
        <div className="footer-contactDiv flex">
          <div className="footer-text">
            <small>keep in toch</small>
            <h2>Travel with us</h2>
          </div>
          
          <div className="footer-inputDiv flex">
            <input type="text" placeholder='Entrer email adresse' />
            <button className="footer-bnt btn flex" type='submit'>
            Send<FiSend className='nav-icon icon'/>
            </button>
            
          </div>

        </div>

        <div className="footer-card flex">
          <div className="footer-Intro flex">
            <div className="footer-logoDiv">
              <a href="" className="footer-logo flex">
                <MdOutlineTravelExplore  className='footer-icon icon'/>
                .Travel

              </a>

            </div>
            <div className="footer-paragraph">
              vgggggggvvvvvvvvvvvvvvrdtr
              vgggggggvvvvvvvvvvvvvvrdtr
              vgggggggvvvvvvvvvvvvvvrdtr
              
            </div>

            <div className="footer-socials">
              <FaFacebook  className='footer-icon icon'/>
              <FaInstagram  className='footer-icon icon'/>
              <FaTwitterSquare  className='footer-icon icon'/>

            </div>
          </div>

          <div className="footer-links grid">
            {/*g1*/}
            <div className="footer-linkGroup">
              <span className="footer-groupTitle">
                our agency
              </span>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Services
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                insurance
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                agency
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                tourism 
              </li>
            </div>
            {/*g2*/}
          </div>
        </div>
      </div>
    </section>
  )
}
