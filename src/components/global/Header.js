import { Link } from "react-router-dom";
/* Multimedia */
import home from "../../multimedia/global/home.png";

function Header() {
  return (
    <header className="header">
      <p>
        <Link title="Inicio" to="/">
          <img src={home} alt="Inicio" className="header__headerHome" />
        </Link>
      </p>
      <nav>
        <ul className="header__headerList">
          <li className="headerButtons">
            <Link className="headerLinks" title="Sobre mí" to="/AboutMe">
              Sobre mí
            </Link>
          </li>
          <li className="headerButtons">
            <Link className="headerLinks" title="Proyectos" to="/Projects">
              Proyectos
            </Link>
          </li>
          <li className="headerButtons">
            <Link className="headerLinks" title="Contacto" to="/Contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
