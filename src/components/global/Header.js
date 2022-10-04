import { Link } from "react-router-dom";
import "../../styles/global/Header.scss";
import home from "../../multimedia/home.png";

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
          <li>
            <Link title="Sobre mí" to="/AboutMe">
              Sobre mí
            </Link>
          </li>
          <li>
            <Link title="Proyectos" to="/Projects">
              Proyectos
            </Link>
          </li>
          <li>
            <Link title="Contacto" to="/Contact">
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
