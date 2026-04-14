import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import './Register.css'

export default function Register () {

  const navigate = useNavigate()

  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [role,setRole]= useState('owner')
  const [errors,setErrors]= useState({})

  const validate = ()=>{
    let e = {}

    if(!name) e.name = "Nom requis"

    if(!email) e.email = "Email requis"
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Email invalide"

    if(!password || password.length < 6)
      e.password = "Min 6 caractères"

    setErrors(e)
    return Object.keys(e).length === 0
  }

  const registerUser = async(e)=>{
    e.preventDefault()

    if(!validate()) return

    try{
      const {data} = await axios.post('http://127.0.0.1:8000/api/users',{
        name,
        email,
        password,
        role
      })

      // 🔥 auto login
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))

      window.dispatchEvent(new Event('authChange'))

      if(data.user.role === 'owner'){
        navigate('/owner-dashboard')
      }else{
        navigate('/')
      }

    }catch(error){
      if(error.response?.status === 422){
        setErrors(error.response.data.errors)
      }
    }
  }

  return (
    <section className="createHotel" style={{ paddingTop: "50px" }}>
      <div className="createContainer">
        
        <h2 className="createTitle">Créer un compte</h2>

        <form onSubmit={registerUser} className="createForm">

          <div className="formGroup">
            <label>Nom complet</label>
            <input value={name} onChange={(e)=>setName(e.target.value)} />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div className="formGroup">
            <label>Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} />
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="formGroup">
            <label>Mot de passe</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            {errors.password && <p>{errors.password}</p>}
          </div>

          

          <button type="submit" className="createBtn">
            S'inscrire
          </button>

        </form>

        <p style={{ textAlign: "center", marginTop: "10px", fontSize: "13px" }}>
          <Link to="/login">Se connecter</Link>
        </p>

      </div>
    </section>
  )
}