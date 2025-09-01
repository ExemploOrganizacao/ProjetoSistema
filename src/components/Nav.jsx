import { Link } from "react-router-dom"
import Logo from '../assets/mcqueen-serio.png'

const Nav = () => {
  return (
    <header className="bg-red-600 text-white p-4 shadow-md">
        <nav className="container mx-auto flex justify-between items-center flex-row-reverse">
        <img className="w-auto h-10" src={Logo} alt="logo"/>
        <ul className="flex gap-2">
          <li className="list-none">
            <Link to="/" className="hover:text-yellow-400 transition-colors duration-300">Home</Link>
          </li>

          <li className="list-none">
            <Link to="/cliente" className="hover:text-yellow-400 transition-colors duration-300">Cliente</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav