/* Components */
import MainDetails from "../specifics/MainDetails";
import Footer from "../global/Footer";
/* Multimedia */
import me from "../../multimedia/personal/me.png";

function AboutMe() {
  return (
    <>
      <main className="aboutMeMain">
        <div className="meInfo">
          <div className="meGrid">
            <img className="meInfo__mePhoto" src={me} alt="Foto de perfil" />
            <p className="meInfo__meIntroduction">
              Mi pasión por la creatividad terminó dirigiéndome hacia la
              programación, a descubrir ese gran mundo tecnológico, todo lo que
              podía aportarme y lo que yo podía aportar. Así que, después de
              coger las maletas para introducirme en el mundo de la
              interpretación, donde aprendí mucho sobre cómo matizar las
              emociones y potenciar mi espíritumás creativo, me reinventé como
              desarrolladora Front-End. En ese impasse pasé algunos años
              trabajando en la gestión y venta de seguros pero ahora pico código
              cada día.
            </p>
          </div>
          <div className="division">
            <div className="division__circle"></div>
            <div className="division__circle"></div>
            <div className="division__circle"></div>
          </div>
          <div className="meGrid">
            <span className="meInfo__meTitle">FORMACIÓN</span>
            <ul className="containerInfo">
              <div className="containerInfo__containerList">
                <li>
                  <i className="fa-brands fa-html5"></i>
                </li>
                <li>
                  <i className="fa-brands fa-css3-alt"></i>
                </li>
                <li>
                  <i className="fa-brands fa-sass"></i>
                </li>
              </div>
              <div className="containerInfo__containerList">
                <li>
                  <i className="fa-brands fa-square-js"></i>
                </li>
                <li>
                  <i className="fa-brands fa-react"></i>
                </li>
                <li>
                  <i className="fa-brands fa-node"></i>
                </li>
              </div>
              <div className="containerInfo__containerList">
                <li>
                  <i className="fa-brands fa-gulp"></i>
                </li>
                <li>
                  <i className="fa-brands fa-npm"></i>
                </li>
                <li>
                  <i className="fa-brands fa-git"></i>
                </li>
              </div>
            </ul>
          </div>
          <div className="division">
            <div className="division__circle"></div>
            <div className="division__circle"></div>
            <div className="division__circle"></div>
          </div>
          <div className="meGrid">
            <span className="meInfo__meTitle">HABILIDADES</span>
            <ul className="containerInfo">
              <div className="containerInfo__containerSkills">
                <li>
                  <p className="skillsInfo">Trabajo</p>
                  <i className="fa-solid fa-desktop"></i>
                  <p className="skillsInfo">Remoto</p>
                </li>
                <li>
                  <p className="skillsInfo">Trabajo</p>
                  <i className="fa-solid fa-people-group"></i>
                  <p className="skillsInfo">Equipo</p>
                </li>
                <li>
                  <p className="skillsInfo">Filosofía Agile</p>
                  <i className="fa-brands fa-think-peaks"></i>
                  <p className="skillsInfo">Marco Scrum</p>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <MainDetails />
      </main>
      <Footer />
    </>
  );
}

export default AboutMe;
