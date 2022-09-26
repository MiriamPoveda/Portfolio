import { Link } from "react-router-dom";
import "../../styles/global/Header.scss";

function Footer() {
  return (
    <header className="header">
      <p>
        <Link title="Inicio" to="/">
          Miriam Poveda
        </Link>
      </p>
      <nav>
        <ul className="headerList">
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

export default Footer;
