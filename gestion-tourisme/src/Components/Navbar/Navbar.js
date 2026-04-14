import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineTravelExplore } from "react-icons/md";
import { PiDotsNine } from "react-icons/pi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import NavbarAdmin from './NavbarAdmin'
import NavbarOwner from './NavbarOwner'
import NavbarGuest from './NavbarGuest'
import './Navbar.css'

export default function Navbar() {
  const [active, setActive] = useState('navBar')
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const loadUser = () => {
    const storedUser = localStorage.getItem('user')
    setUser(storedUser ? JSON.parse(storedUser) : null)
  }

  useEffect(() => {
    loadUser()
    window.addEventListener('authChange', loadUser)

    return () => window.removeEventListener('authChange', loadUser)
  }, [])

  const showNav = () => setActive('navBar activeNavBar')
  const closeNav = () => setActive('navBar')

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    window.dispatchEvent(new Event('authChange')) // 🔥 مهم

    setUser(null)
    navigate('/')
  }

  return (
    <section className="navBarSection">
      <header className="header">

        <div className="logoDiv">
          <Link to="/" className="logo">
            <h1><MdOutlineTravelExplore className='icon' /> Marrakech City</h1>
          </Link>
        </div>

        <div className={active}>
          <ul className="navLists">

            <li className="navItem"><Link className="navLink" to='/'>Accueil</Link></li>
            <li className="navItem"><Link className="navLink" to='/destinations'>Destinations</Link></li>
            <li className="navItem"><a className="navLink" href="#">À propos</a></li>
            <li className="navItem"><a className="navLink" href="#">Contact</a></li>

            {user ? (
              user.role === 'admin' ? (
                <NavbarAdmin user={user} logout={logout} />
              ) : user.role === 'owner' ? (
                <NavbarOwner user={user} logout={logout} />
              ) : (
                <NavbarGuest />
              )
            ) : (
              <NavbarGuest />
            )}

            <div onClick={closeNav} className="closeNavBar">
              <IoIosCloseCircleOutline className='icon' />
            </div>
          </ul>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <PiDotsNine className='icon' />
        </div>

      </header>
    </section>
  )
}