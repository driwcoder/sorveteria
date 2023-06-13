import { Link } from "react-router-dom";
import Logo from '../../assets/img/logo2.png'
import './style.css'

export default function Header() {
  return (
    <header className="header">
      <nav className="nav-bar forma">
        <img src={Logo} alt="" />
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/flavors" className="link">Sabores</Link>
          <Link to="/about" className="link">Sobre</Link>
        </div>
      </nav>
    </header>
  );
}