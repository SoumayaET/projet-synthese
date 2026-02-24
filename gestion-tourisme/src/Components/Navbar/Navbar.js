import React,{useState} from 'react'
import './Navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiDotsNine } from "react-icons/pi";
import {Route , Link ,Routes} from 'react'


export default function Navbar() {
    const [active, setActive] = useState('navBar') 
    function ShowNav(){
        setActive('navBar activeNavBar')
    }
    function closeNavBar(){
        setActive('navBar')
    }
  return (

    
    <section className="navBarSection">
        <header className="header flex">
            <div className="logoDiv">
                <a href="#" className="logo flex">
                    <h1><MdOutlineTravelExplore className='icon'/> Travel. </h1>
                </a>
            </div> 

            <div className={active}>
                <ul className="navLists flex">
                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Packages</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Shop</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">About</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Pages</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">News</a>
                    </li>
                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>
                    <button className="btn">
                        <a href="#">BOOK NOW</a>
                    </button>
                    <div onClick={closeNavBar} className="closeNavBar">
                        <IoIosCloseCircleOutline className='icon' />

                    </div> 
                </ul>
            </div>
            <div onClick={ShowNav} className="toggleNavbar">
                <PiDotsNine className='icon' />

            </div>
        </header>
        <Routes>
        <Route to="/deatils/$id" element={<details/>}/>
        <Route to="/deatils/$id" element={<profile/>}/>
        </Routes>
    </section>
  )
}
