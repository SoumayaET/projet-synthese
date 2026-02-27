import React,{useEffect} from 'react'
import './Footer.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos';
import 'aos/dist/aos.css' 

export default function Footer() {
  useEffect(()=>{
        Aos.init({duration:2000})
      },[])
  return (
    <section className="footer">
      <div className="footer-videoDiv">
        <video 
        src="/video/videoCity.mp4" muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="footer-secContent container">
        <div className="footer-contactDiv flex">
          <div data-aos="fade-up" className="footer-text">
            <small>Restez en contact</small>
            <h2>Voyagez avec nous à Marrakech</h2>
          </div>
          
          <div className="footer-inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Entrer votre adresse email' />
            <button data-aos="fade-up" className="footer-bnt btn flex" type='submit'>
            Envoyer<FiSend className='nav-icon icon'/>
            </button>
            
          </div>

        </div>

        <div className="footer-card flex">
          <div className="footer-Intro flex">
            <div className="footer-logoDiv">
              <a href="" className="footer-logo flex">
                <MdOutlineTravelExplore  className='footer-icon icon'/>
                .Marrakech
              </a>
            </div>
            <div data-aos="fade-up" className="footer-paragraph">
              Notre plateforme touristique met en lumière les cafés, hôtels et lieux emblématiques de Marrakech. 
              Elle permet aux propriétaires de présenter leurs établissements avec des informations claires 
              (adresse, horaires, prix moyen, image) et aux visiteurs de découvrir facilement les trésors de la ville. 
              L’objectif est de simplifier la recherche, améliorer l’expérience utilisateur et valoriser 
              l’offre touristique unique de Marrakech.
            </div>

            <div data-aos="fade-up" className="footer-socials">
              <FaFacebook  className='footer-icon icon'/>
              <FaInstagram  className='footer-icon icon'/>
              <FaTwitterSquare  className='footer-icon icon'/>
            </div>
          </div>

          <div className="footer-links grid">
            {/*g1*/}
            <div data-aos="fade-up" data-aos-duration="3000" className="footer-linkGroup">
              <span className="footer-groupTitle">
                Notre agence
              </span>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Services
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Assurance
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Agence
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Tourisme
              </li>
            </div>
            {/*g2*/}
            <div data-aos="fade-up" data-aos-duration="4000" className="footer-linkGroup">
              <span className="footer-groupTitle">
               Partenaires
              </span>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Booking
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                HostelWorld
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Trivago
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                TripAdvisor
              </li>
            </div>
            {/*g3*/}
            <div data-aos="fade-up" data-aos-duration="5000" className="footer-linkGroup">
              <span className="footer-groupTitle">
               Lieux emblématiques
              </span>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Place Jemaa el-Fna
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Jardin Majorelle
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Palais Bahia
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Médina de Marrakech
              </li>
              <li className="footer-list flex">
                <FiChevronRight className='footer-icon2 icon'/>
                Les Souks traditionnels
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>MEILLEURE EXPÉRIENCE DE VOYAGE À MARRAKECH</small>
            <small>DROITS RÉSERVÉS - ISRATECH 2026</small>
          </div>
        </div>
      </div>
    </section>
  )
}