import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './CreateHotel.css'

export default function CreateHotel() {

  const navigate = useNavigate()

  const [name,setName]= useState('')
  const [address,setAddress]= useState('')
  const [stars,setStars]= useState('')
  const [phone,setPhone]= useState('')
  const [image,setImage]= useState(null)

  const changeHandler = (e)=>{
      setImage(e.target.files[0])
  }

  const createHotel = async(e)=>{
      e.preventDefault()

      const formData = new FormData()
      formData.append('name',name)
      formData.append('address',address)
      formData.append('stars',stars)
      formData.append('phone',phone)
      formData.append('image',image)

      try{
        const {data} = await axios.post('http://127.0.0.1:8000/api/hotels',formData)
        console.log(data.message)
        navigate('/')
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
        
        <h2 className="createTitle">Create New Hotel</h2>

        <form onSubmit={createHotel} className="createForm">

          <div className="formGroup">
            <label>Hotel Name</label>
            <input 
              type="text"
              placeholder="Enter hotel name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Address</label>
            <input 
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Stars</label>
            <input 
              type="number"
              min="1"
              max="5"
              placeholder="1 - 5"
              value={stars}
              onChange={(e)=>setStars(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Phone</label>
            <input 
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Hotel Image</label>
            <input 
              type="file"
              onChange={changeHandler}
              accept="image/*"
              required
            />
          </div>

          <button type="submit" className="createBtn">
            Create Hotel
          </button>

        </form>

      </div>
    </section>
  )
}