/* Components */
import MainDetails from "../specifics/MainDetails";
import Footer from "../global/Footer";
/* Multimedia */
import CV from "../../multimedia/MiriamPoveda.pdf";

function Contact() {
  return (
    <>
      <main className="contactMain">
        <div className="contactMain__iconsMain">
          <a
            href="https://github.com/MiriamPoveda"
            title="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-brands fa-github-alt"></i>
          </a>
          <a
            href="https://es.linkedin.com/in/miriampoveda"
            title="Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            href="mailto:mpoveda94@gmail.com"
            title="Email"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-solid fa-envelope"></i>
          </a>
          <a
            href={CV}
            download="MiriamPoveda.pdf"
            title="CV en PDF"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-solid fa-file"></i>
          </a>
          <p className="textCV">
            ¡Haz click en los iconos para visitar mis redes, mandarme un email o
            descargar mi CV!
          </p>
        </div>
        <MainDetails />
      </main>
      <Footer />
    </>
  );
}

export default Contact;
