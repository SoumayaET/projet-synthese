import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

export default function Login() {

  const navigate = useNavigate()

  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [error,setError]= useState('')

  const loginUser = async(e)=>{
    e.preventDefault()

    try{
      const {data} = await axios.post('http://127.0.0.1:8000/api/login',{
        email,
        password
      })

      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      window.dispatchEvent(new Event('authChange')) // 🔥 مهم

      if(data.user.role === 'admin'){
        navigate('/admin-dashboard')
      }else if(data.user.role === 'owner'){
        navigate('/owner-dashboard')
      }else{
        navigate('/')
      }

    }catch(error){
      setError("Email ou mot de passe incorrect")
    }
  }

  return (
    <section className="createHotel">
      <div className="createContainer">
        
        <h2 className="createTitle">Connexion</h2>

        <form onSubmit={loginUser} className="createForm">

          <div className="formGroup">
            <label>Email</label>
            <input 
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Password</label>
            <input 
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{color:'red'}}>{error}</p>}

          <button type="submit" className="createBtn">
            Se connecter
          </button>

        </form>

        <p style={{ textAlign: "center", marginTop: "8px", fontSize: "12px" }}>
          <Link to="/forgot-password">
            Mot de passe oublié ?
          </Link>
        </p>

      </div>
    </section>
  )
}