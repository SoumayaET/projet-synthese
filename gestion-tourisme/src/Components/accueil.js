import React from 'react'
import Home from './Home/Home';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import '../app.css'
import HeroSection from './HeroSection/HeroSection';
export default function Accueil() {
  return (
    <div >
      <HeroSection/>
      <Main style={{ paddingTop: "200px" }} />
      
    </div>
  )
}
