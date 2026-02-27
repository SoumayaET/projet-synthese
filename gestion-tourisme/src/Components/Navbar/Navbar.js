import React,{useState, useEffect} from 'react'
import './Navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { PiDotsNine } from "react-icons/pi";
import { Route, Link, Routes, useNavigate } from 'react-router-dom';
import Compte from '../Compte/Compte';
import Details from '../Details/Details';
import Destinations from '../Destinations/Destinations';
import Accueil from '../Accueil';
import CreateHotel from '../CreateHotel/CreateHotel';
import Register  from '../Register/Register';
import Login from '../Login/Login';

export default function Navbar() {

    const [active, setActive] = useState('navBar')
    const [user, setUser] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        const storedUser = localStorage.getItem('user')
        if(storedUser){
            setUser(JSON.parse(storedUser))
        }
    },[])

    function ShowNav(){
        setActive('navBar activeNavBar')
    }

    function closeNavBar(){
        setActive('navBar')
    }

    function logout(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser(null)
        navigate('/')
    }

  return (
    <section className="navBarSection">
        <header className="header flex">

            <div className="logoDiv">
                <Link to="/" className="logo flex">
                    <h1><MdOutlineTravelExplore className='icon'/> Marrakech City.</h1>
                </Link>
            </div> 

            <div className={active}>
                <ul className="navLists flex">

                    {/* Visible for everyone */}
                    <li className="navItem">
                        <Link className="navLink" to='/'>Accuiel</Link>
                    </li>

                    <li className="navItem">
                        <Link className="navLink" to='/destinations'>Destinations</Link>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink"> À propos</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Contact</a>
                    </li>

                    {/* If user is logged */}
                    {/* If user is logged */}
                        {user && (
                        <>
                            {user.role === 'visiteur' && (
                            <li className="navItem">
                                <Link className="navLink" to={`/compte/${user.id}`}>
                                    Mon Compte
                                </Link>
                            </li>
                            )}

                            {user.role === 'owner' && (
                            <>
                                <li className="navItem">
                                    <Link className="navLink" to='/addHotels'>Ajouter Hotel</Link>
                                </li>
                                <li className="navItem">
                                    <Link className="navLink" to='/addCafes'>Ajouter Cafe</Link>
                                </li>
                                <li className="navItem">
                                    <Link className="navLink" to={`/compte/${user.id}`}>Mon Compte</Link>
                                </li>
                            </>
                            )}

                            {user.role === 'admin' && (
                            <>
                                <li className="navItem">
                                    <Link className="navLink" to='/addHotels'>Ajouter Hotel</Link>
                                </li>
                                <li className="navItem">
                                    <Link className="navLink" to='/addCafes'>Ajouter café</Link>
                                </li>
                                <li className="navItem">
                                    <Link className="navLink" to='/users'>Utilisateurs</Link>
                                </li>
                            </>
                            )}

                            <button className="btn" onClick={logout}>Déconnexion</button>
                        </>
                        )}
                    {/* If NOT logged */}
                    {!user && (
                        <>
                            <Link className="btn" to='/Login'>
                                Connexion
                            </Link>
                            <Link className="btn" to='/Register'>
                                Inscription
                            </Link>
                        </>
                    )}

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
            <Route path="/" element={<Accueil />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/compte/:id" element={<Compte />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/addHotels" element={<CreateHotel />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
        </Routes>
       
    </section>
  )
}