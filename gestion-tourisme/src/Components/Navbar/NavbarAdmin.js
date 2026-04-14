import { Link } from 'react-router-dom'
import AdminDashboard from '../AdminDashboard/AdminDashboard'
export default function NavbarAdmin({ logout }) {
  return (
    <>
      <li className="navItem"><Link className="navLink" to='/ajouter-element'>Ajouter </Link></li>
      <li className="navItem"><Link className="navLink" to='/Utilisateurs'>Utilisateurs</Link></li>
      <li className="navItem"><Link className="navLink" to='/admin-dashboard'>Tableau de bord</Link></li>
      <button className="btn" onClick={logout}>Déconnexion</button>
    </>
  )
}