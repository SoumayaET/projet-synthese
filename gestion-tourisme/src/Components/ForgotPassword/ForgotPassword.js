import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../Register/Register.css' // نفس الستايل

export default function ForgotPassword() {

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data } = await axios.post('http://127.0.0.1:8000/api/forgot-password', {
        email
      })

      setMessage(data.message)

    } catch (error) {
      setMessage(error.response?.data?.message || "Une erreur s'est produite")
    }
  }

  return (
    <section className="createHotel">
      <div className="createContainer">
        
        <h2 className="createTitle">Mot de passe oublié</h2>

        <form onSubmit={handleSubmit} className="createForm">

          <div className="formGroup">
            <label>Email</label>
            <input 
              type="email"
              placeholder="Entrez votre email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="createBtn">
            Envoyer
          </button>

        </form>

        {/* Message */}
        {message && (
          <p style={{ textAlign: "center", marginTop: "10px", fontSize: "12px" }}>
            {message}
          </p>
        )}

        {/* Retour login */}
        <p style={{ textAlign: "center", marginTop: "10px", fontSize: "12px" }}>
          Retour à{" "}
          <Link to="/login" style={{ color: "var(--PrimaryColor)", fontWeight: "600" }}>
            la connexion
          </Link>
        </p>

      </div>
    </section>
  )
}