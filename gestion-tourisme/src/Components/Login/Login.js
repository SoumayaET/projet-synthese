import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Login.css'

export default function Login() {

  const navigate = useNavigate()

  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')

  const loginUser = async(e)=>{
      e.preventDefault()

      try{
        const {data} = await axios.post('http://127.0.0.1:8000/api/login',{
          email,
          password
        })

        // حفظ التوكن
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))

        // توجيه حسب الدور
        if(data.user.role === 'owner'){
          navigate('/owner-dashboard')
        }else{
          navigate('/')
        }

      }catch(error){
        console.log(error.response?.data?.message)
      }
  }

  return (
    <section className="createHotel">
      <div className="createContainer">
        
        <h2 className="createTitle">Login</h2>

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

          <button type="submit" className="createBtn">
            Login
          </button>

        </form>

      </div>
    </section>
  )
}