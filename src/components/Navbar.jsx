import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-center space-x-6">
      <Link to="/">Home</Link>
      <Link to="/gallery">Galerie</Link>
      <Link to="/about">O nás</Link>
      <Link to="/contact">Kontakt</Link>
    </nav>
  )
}