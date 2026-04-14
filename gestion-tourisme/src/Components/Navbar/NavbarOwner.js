import { Link } from 'react-router-dom'

export default function NavbarOwner({ user, logout }) {
  return (
    <>
      <li className="navItem"><Link className="navLink" to='/ajouter-element'>Ajouter</Link></li>
      <li className="navItem"><Link className="navLink" to='/owner-dashboard'>Tableau de bord</Link></li>

      <button className="btn" onClick={logout}>Déconnexion</button>
    </>
  )
}