import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './CreateItem.css' // نفس CSS الذي أرسلته

export default function CreateItem() {

  const navigate = useNavigate()

  const [type, setType] = useState('cafe')
  const [step, setStep] = useState(1)

  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    image: null,

    // cafe
    type_cafe: '',
    ambiance: '',
    services: '',
    map_url: '',

    // hotel
    stars: '',
    room_types: '',
    amenities: '',

    // place
    category: '',
    nearby_activities: '',
    opening_hours: '',
    entry_fee: '',

    // restaurant
    cuisine: '',
    specialties: '',

    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleImage = (e) => {
    setForm({ ...form, image: e.target.files[0] })
  }

  const getEndpoint = () => {
    switch (type) {
      case 'cafe': return 'cafes'
      case 'hotel': return 'hotels'
      case 'place': return 'places'
      case 'restaurant': return 'restaurants'
      default: return 'cafes'
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    Object.keys(form).forEach(key => {
      if (form[key]) formData.append(key, form[key])
    })

    try {
      await axios.post(`http://127.0.0.1:8000/api/${getEndpoint()}`, formData)
      navigate('/')
    } catch (error) {
      console.log(error.response?.data)
    }
  }

  return (
    <section className="createTrip" style={{ paddingTop: "90px" }}>
      <div className="createContainer">

        <h2 className="createTitle">Créer un élément</h2>

        {/* اختيار النوع */}
        <div className="formGroup">
          <label>Type</label>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="cafe">Café</option>
            <option value="hotel">Hôtel</option>
            <option value="place">Lieu touristique</option>
            <option value="restaurant">Restaurant</option>
          </select>
        </div>

        <form onSubmit={submitForm} className="createForm">

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="formGroup">
                <label>Nom</label>
                <input name="name" onChange={handleChange} required />
              </div>

              <div className="formGroup">
                <label>Adresse</label>
                <input name="address" onChange={handleChange} required />
              </div>

              <div className="formGroup">
                <label>Téléphone</label>
                <input name="phone" onChange={handleChange} />
              </div>

              {/* حسب النوع */}
              {type === 'cafe' && (
                <div className="formGroup">
                  <label>Type de café</label>
                  <input name="type_cafe" onChange={handleChange} />
                </div>
              )}

              {type === 'hotel' && (
                <div className="formGroup">
                  <label>Stars</label>
                  <input type="number" name="stars" onChange={handleChange} />
                </div>
              )}

              {type === 'place' && (
                <div className="formGroup">
                  <label>Catégorie</label>
                  <input name="category" onChange={handleChange} />
                </div>
              )}

              {type === 'restaurant' && (
                <div className="formGroup">
                  <label>Cuisine</label>
                  <input name="cuisine" onChange={handleChange} />
                </div>
              )}

              <button type="button" className="createBtn" onClick={() => setStep(2)}>
                Suivant
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <div className="formGroup">
                <label>Description</label>
                <input name="description" onChange={handleChange} />
              </div>

              {type === 'cafe' && (
                <>
                  <div className="formGroup">
                    <label>Ambiance</label>
                    <input name="ambiance" onChange={handleChange} />
                  </div>

                  <div className="formGroup">
                    <label>Services</label>
                    <input name="services" onChange={handleChange} />
                  </div>
                </>
              )}

              {type === 'hotel' && (
                <>
                  <div className="formGroup">
                    <label>Room types</label>
                    <input name="room_types" onChange={handleChange} />
                  </div>

                  <div className="formGroup">
                    <label>Amenities</label>
                    <input name="amenities" onChange={handleChange} />
                  </div>
                </>
              )}

              {type === 'place' && (
                <>
                  <div className="formGroup">
                    <label>Activités</label>
                    <input name="nearby_activities" onChange={handleChange} />
                  </div>
                </>
              )}

              {type === 'restaurant' && (
                <div className="formGroup">
                  <label>Spécialités</label>
                  <input name="specialties" onChange={handleChange} />
                </div>
              )}

              <div className="formGroup">
                <label>Image</label>
                <input type="file" onChange={handleImage} />
              </div>

              <div className="btnGroup">
                <button type="button" className="createBtn" onClick={() => setStep(1)}>
                  Retour
                </button>

                <button type="submit" className="createBtn">
                  Créer
                </button>
              </div>
            </>
          )}

        </form>
      </div>
    </section>
  )
}