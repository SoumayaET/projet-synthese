import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './DashboardAdmin.css'
import { useNavigate } from 'react-router-dom'

export default function DashboardAdmin() {

  const [view, setView] = useState('users')
  const [data, setData] = useState([])
  const [users, setUsers] = useState([])

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    if (view !== 'users') fetchData(view)
  }, [view])

  const fetchUsers = async () => {
    const res = await axios.get('http://127.0.0.1:8000/api/users')
    setUsers(res.data)
  }

  const fetchData = async (type) => {
    const res = await axios.get(`http://127.0.0.1:8000/api/${type}`)
    setData(res.data)
  }

  // 🔥 حذف بدون refresh
  const deleteItem = async (type, id) => {
    const confirmDelete = window.confirm("Voulez-vous supprimer ?")
    if (!confirmDelete) return

    try {
      await axios.delete(`http://127.0.0.1:8000/api/${type}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })

      // ✅ حذف مباشر من state
      if (type === 'users') {
        setUsers(prev => prev.filter(u => u.id !== id))
      } else {
        setData(prev => prev.filter(item => item.id !== id))
      }

    } catch (err) {
      console.log(err.response?.data)
    }
  }

  const goToEdit = (type, id) => {
    navigate(`/edit/${type}/${id}`) // ✅ تصحيح مهم
  }

  return (
    <div className="dashboard" style={{ paddingTop: "90px" }} >

      {/* 🔥 SIDEBAR */}
      <div className="sidebar">
        <h2>Admin</h2>

        <button className={view === 'users' ? 'active' : ''} onClick={() => setView('users')}>Users</button>
        <button className={view === 'hotels' ? 'active' : ''} onClick={() => setView('hotels')}>Hotels</button>
        <button className={view === 'cafes' ? 'active' : ''} onClick={() => setView('cafes')}>Cafes</button>
        <button className={view === 'restaurants' ? 'active' : ''} onClick={() => setView('restaurants')}>Restaurants</button>
        <button className={view === 'trips' ? 'active' : ''} onClick={() => setView('trips')}>Trips</button>
        <button className={view === 'places' ? 'active' : ''} onClick={() => setView('places')}>Places</button>
      </div>

      {/* 🔥 CONTENT */}
      <div className="content">

        <h1>Tableau de bord Admin</h1>

        {/* ✅ USERS (بدون Modifier) */}
        {view === 'users' && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td>{u.id}</td>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    {/* ❌ لا يوجد Modifier */}
                    <button
                      className="deleteBtn"
                      onClick={() => deleteItem('users', u.id)}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {/* ✅ OTHER */}
        {view !== 'users' && (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Owner</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    {users.find(u => u.id === item.user_id)?.name || 'N/A'}
                  </td>
                  <td>

                    {/* ✅ Modifier فقط لغير users */}
                    <button
                      className="editBtn"
                      onClick={() => goToEdit(view, item.id)}
                    >
                      Modifier
                    </button>

                    <button
                      className="deleteBtn"
                      onClick={() => deleteItem(view, item.id)}
                    >
                      Supprimer
                    </button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

      </div>
    </div>
  )
}