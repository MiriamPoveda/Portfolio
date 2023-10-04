/* Components */
import MainDetails from "../specifics/MainDetails";
import Footer from "../global/Footer";
/* Multimedia */
import fencoders from "../../multimedia/projects/fencoders.jpg";
import cards from "../../multimedia/projects/cards.jpg";
import refactored from "../../multimedia/projects/refactored.jpg";
import spells from "../../multimedia/projects/spells.jpg";
import cocktails from "../../multimedia/projects/cocktails.jpg";
import wow from "../../multimedia/projects/wilson.jpg";
import code from "../../multimedia/icons/code.png";
import group from "../../multimedia/icons/group.png";
import single from "../../multimedia/icons/single.png";

function Projects() {
  return (
    <>
      <main className="projectsMain">
        <div className="projectsMain__projectsBox">
          <ul className="projectsList">
            <li className="projectsList__projectsElement">
              <a
                href="https://miriampoveda.github.io/FEncoders/"
                title="FEncoders"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="projectsList__projectsImages"
                  src={fencoders}
                  alt="Proyecto FEncoders"
                />
              </a>
              <div className="projectsIconsBox">
                <span className="projectsList__projectsItem">
                  <a
                    className="projectsLinks"
                    title="Repositorio"
                    href="https://github.com/MiriamPoveda/FEncoders"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="projectsLinks__projectsCode"
                      src={code}
                      alt="Código"
                    />
                  </a>
                </span>
                <img
                  className="projectsLinks__projectsGroup"
                  src={group}
                  alt="Proyecto grupal"
                />
              </div>
            </li>

            <li className="projectsList__projectsElement">
              <a
                href="https://miriampoveda.github.io/AwesomeProfileCards/"
                title="Awesome Profile Cards"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="projectsList__projectsImages"
                  src={cards}
                  alt="Proyecto Awesome Profile Cards"
                />
              </a>
              <div className="projectsIconsBox">
                <span className="projectsList__projectsItem">
                  <a
                    className="projectsLinks"
                    title="Repositorio"
                    href="https://github.com/MiriamPoveda/AwesomeProfileCards"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="projectsLinks__projectsCode"
                      src={code}
                      alt="Código"
                    />
                  </a>
                </span>
                <img
                  className="projectsLinks__projectsGroup"
                  src={group}
                  alt="Proyecto grupal"
                />
              </div>
            </li>
            <li className="projectsList__projectsElement">
              <a
                href="https://miriampoveda.github.io/Refactorizadas/"
                title="Refactorizadas"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="projectsList__projectsImages"
                  src={refactored}
                  alt="Proyecto Refactorizadas"
                />
              </a>
              <div className="projectsIconsBox">
                <span className="projectsList__projectsItem">
                  <a
                    className="projectsLinks"
                    title="Repositorio"
                    href="https://github.com/MiriamPoveda/Refactorizadas"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="projectsLinks__projectsCode"
                      src={code}
                      alt="Código"
                    />
                  </a>
                </span>
                <img
                  className="projectsLinks__projectsGroup"
                  src={group}
                  alt="Proyecto grupal"
                />
              </div>
            </li>
          </ul>
          <ul className="projectsList">
            <li className="projectsList__projectsElement">
              <a
                href="https://miriampoveda.github.io/CocktailsFinder/"
                title="Cocktails Finder"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="projectsList__projectsImages"
                  src={cocktails}
                  alt="Proyecto Cocktails Finder"
                />
              </a>
              <div className="projectsIconsBox">
                <span className="projectsList__projectsItem">
                  <a
                    className="projectsLinks"
                    title="Repositorio"
                    href="https://github.com/MiriamPoveda/CocktailsFinder"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="projectsLinks__projectsCode"
                      src={code}
                      alt="Código"
                    />
                  </a>
                </span>
                <img
                  className="projectsLinks__projectsSingle"
                  src={single}
                  alt="Proyecto individual"
                />
              </div>
            </li>
            <li className="projectsList__projectsElement">
              <a
                href="https://miriampoveda.github.io/OwenWilsonWow/"
                title="Owen Wilson WOW"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="projectsList__projectsImages"
                  src={wow}
                  alt="Proyecto Owen Wilson WOW"
                />
              </a>
              <div className="projectsIconsBox">
                <span className="projectsList__projectsItem">
                  <a
                    className="projectsLinks"
                    title="Repositorio"
                    href="https://github.com/MiriamPoveda/OwenWilsonWow"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="projectsLinks__projectsCode"
                      src={code}
                      alt="Código"
                    />
                  </a>
                </span>
                <img
                  className="projectsLinks__projectsSingle"
                  src={single}
                  alt="Proyecto individual"
                />
              </div>
            </li>
            <li className="projectsList__projectsElement">
              <a
                href="https://through-spells.web.app/"
                title="Through Spells"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="projectsList__projectsImages"
                  src={spells}
                  alt="Proyecto Through Spells"
                />
              </a>
              <div className="projectsIconsBox">
                <span className="projectsList__projectsItem">
                  <a
                    className="projectsLinks"
                    title="Repositorio"
                    href="https://gitlab.com/MiriamPoveda/throughspells"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="projectsLinks__projectsCode"
                      src={code}
                      alt="Código"
                    />
                  </a>
                </span>
                <img
                  className="projectsLinks__projectsSingle"
                  src={single}
                  alt="Proyecto individual"
                />
              </div>
            </li>
          </ul>
        </div>
        <MainDetails />
      </main>
      <Footer />
    </>
  );
}

export default Projects;
