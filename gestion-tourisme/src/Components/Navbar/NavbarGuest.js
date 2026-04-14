import { Link } from 'react-router-dom'

export default function NavbarGuest() {
  return (
    <>
      <Link className="btn" to='/Login'>Connexion</Link>
      <Link className="btn" to='/Register'>Inscription</Link>
    </>
  )
}
