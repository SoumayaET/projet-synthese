import React from 'react'
import './app.css';
import Navbar from './Components/Navbar/Navbar';

import Footer from './Components/Footer/Footer';
import * as react from 'react'
import { Route, Routes } from 'react-router-dom';
import Compte from './Components/Compte/Compte';

import Accueil from './Components/Accueil';
import Register  from './Components/Register/Register';
import Login from './Components/Login/Login';
import Search from './Components/Search/Search';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import CreateItem from './Components/CreateItem/CreateItem';
import Details from './Components/Details/Details';
import OwnerDashboard from './Components/OwnerDashboard/OwnerDashboard';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import EditItem from './Components/EditItem/EditItem';



export default function App() {
  return (
    <div>

      
      <Navbar/>
      <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/compte/:id" element={<Compte />} />
            
            <Route path="/ajouter-element" element={<CreateItem />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/search" element={<Search />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            
            <Route path="/details/:type/:id" element={<Details />} />
              {/* OWNER */}
            <Route path="/owner-dashboard" element={<OwnerDashboard />} />

            {/* ADMIN */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/edit/:type/:id" element={<EditItem />} />
        </Routes>
    <Footer/>
    
    </div>
  )
}
