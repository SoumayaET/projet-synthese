import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import './EditItem.css'

export default function EditItem() {

  const { type, id } = useParams()
  const navigate = useNavigate()

  const [step, setStep] = useState(1)

  const [form, setForm] = useState({
    name: '',
    address: '',
    phone: '',
    image: null,

    type_cafe: '',
    ambiance: '',
    services: '',
    map_url: '',

    stars: '',
    room_types: '',
    amenities: '',

    category: '',
    nearby_activities: '',
    opening_hours: '',
    entry_fee: '',

    cuisine: '',
    specialties: '',

    description: ''
  })

  const token = localStorage.getItem('token')

  const getEndpoint = () => {
    switch (type) {
      case 'cafes': return 'cafes'
      case 'hotels': return 'hotels'
      case 'places': return 'places'
      case 'restaurants': return 'restaurants'
      case 'trips': return 'trips'
      default: return 'cafes'
    }
  }

  // 🔥 تحميل البيانات
  useEffect(() => {
    fetchItem()
  }, [])

  const fetchItem = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/${getEndpoint()}/${id}`)
    setForm(res.data)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleImage = (e) => {
    setForm({ ...form, image: e.target.files[0] })
  }

  // 🔥 UPDATE
  const submitForm = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    Object.keys(form).forEach(key => {
      if (form[key]) formData.append(key, form[key])
    })

    try {
      await axios.post(
        `http://127.0.0.1:8000/api/${getEndpoint()}/${id}?_method=PUT`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )

      navigate('/dashboard', { state: { updated: true } });
    } catch (error) {
      console.log(error.response?.data)
    }
  }

  return (
    <section className="editSection" style={{ paddingTop: "120px" }}>
      <div className="editContainer">

        <h2 className="editTitle">Modifier {type}</h2>

        <form onSubmit={submitForm} className="editForm">

          {/* STEP 1 */}
          {step === 1 && (
            <>
              <div className="formGroup">
                <label>Nom</label>
                <input name="name" value={form.name || ''} onChange={handleChange} required />
              </div>

              <div className="formGroup">
                <label>Adresse</label>
                <input name="address" value={form.address || ''} onChange={handleChange} required />
              </div>

              <div className="formGroup">
                <label>Téléphone</label>
                <input name="phone" value={form.phone || ''} onChange={handleChange} />
              </div>

              {type === 'cafes' && (
                <div className="formGroup">
                  <label>Type café</label>
                  <input name="type" value={form.type || ''} onChange={handleChange} />
                </div>
              )}

              {type === 'hotels' && (
                <div className="formGroup">
                  <label>Stars</label>
                  <input type="number" name="stars" value={form.stars || ''} onChange={handleChange} />
                </div>
              )}

              {type === 'places' && (
                <div className="formGroup">
                  <label>Catégorie</label>
                  <input name="category" value={form.category || ''} onChange={handleChange} />
                </div>
              )}

              {type === 'restaurants' && (
                <div className="formGroup">
                  <label>Cuisine</label>
                  <input name="cuisine" value={form.cuisine || ''} onChange={handleChange} />
                </div>
              )}

              <button type="button" className="editBtn" onClick={() => setStep(2)}>
                Suivant
              </button>
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <div className="formGroup">
                <label>Description</label>
                <input name="description" value={form.description || ''} onChange={handleChange} />
              </div>

              {type === 'cafes' && (
                <>
                  <div className="formGroup">
                    <label>Ambiance</label>
                    <input name="ambiance" value={form.ambiance || ''} onChange={handleChange} />
                  </div>

                  <div className="formGroup">
                    <label>Services</label>
                    <input name="services" value={form.services || ''} onChange={handleChange} />
                  </div>
                </>
              )}

              {type === 'restaurants' && (
                <div className="formGroup">
                  <label>Spécialités</label>
                  <input name="specialties" value={form.specialties || ''} onChange={handleChange} />
                </div>
              )}

              <div className="formGroup">
                <label>Image</label>
                <input type="file" onChange={handleImage} />
              </div>

              <div className="btnGroup">
                <button type="button" className="editBtn" onClick={() => setStep(1)}>
                  Retour
                </button>

                <button type="submit" className="editBtn">
                  Modifier
                </button>
              </div>
            </>
          )}

        </form>
      </div>
    </section>
  )
}