import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Register.css' // نفس الستايل الذي أرسلته

export default function Register () {

  const navigate = useNavigate()

  const [name,setName]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const [role,setRole]= useState('visiteur')

  const registerUser = async(e)=>{
      e.preventDefault()

      try{
        const {data} = await axios.post('http://127.0.0.1:8000/api/users',{
          name,
          email,
          password,
          role
        })

        console.log(data.message)
        navigate('/') // بعد التسجيل يرجع للصفحة الرئيسية

      }catch(error){
        if(error.response?.status === 422){
            console.log(error.response.data.errors)
        }else{
            console.log(error.response?.data?.message)
        }
      }
  }

  return (
    <section className="createHotel">
      <div className="createContainer">
        
        <h2 className="createTitle">Create Account</h2>

        <form onSubmit={registerUser} className="createForm">

          <div className="formGroup">
            <label>Full Name</label>
            <input 
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Email</label>
            <input 
              type="email"
              placeholder="Enter your email"
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

          <div className="formGroup">
            <label>Select Role</label>
            <select 
              value={role}
              onChange={(e)=>setRole(e.target.value)}
              required
              style={{
                padding: "10px 15px",
                borderRadius: "8px",
                border: "1px solid var(--greyText)",
                background: "var(--inputColor)"
              }}
            >
              <option value="visiteur">Visiteur</option>
              <option value="owner">Owner</option>
            </select>
          </div>

          <button type="submit" className="createBtn">
            Register
          </button>

        </form>

      </div>
    </section>
  )
}