/* Multimedia */
import logo from "../../multimedia/global/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="footer__logo" src={logo} alt="Logo" />
      <p className="footer__copyright">Miriam Poveda ©2022</p>
    </footer>
  );
}

export default Footer;
