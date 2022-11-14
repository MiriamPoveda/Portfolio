/* Components */
import MainDetails from "../specifics/MainDetails";
import Footer from "../global/Footer";
/* Multimedia */
import fencoders from "../../multimedia/fencoders.jpg";
import cards from "../../multimedia/cards.jpg";
import refactored from "../../multimedia/refactored.jpg";
import spaces from "../../multimedia/spaces.jpg";
import cocktails from "../../multimedia/cocktails.jpg";
import wow from "../../multimedia/wilson.jpg";

function Projects() {
  return (
    <>
      <main className="projectsMain">
        <div className="projectsMain__projectsBox">
          <p className="projectsMain__projectsTitle">GRUPALES</p>
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
              <button className="projectsList__projectsButton">
                <a
                  className="projectsLinks"
                  href="https://github.com/MiriamPoveda/FEncoders"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositorio
                </a>
              </button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eum quod aliquid totam reiciendis corrupti est rerum
                sint quam. Magnam libero accusamus praesentium quasi itaque,
                iure voluptatum atque recusandae? Harum!
              </p>
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
              <button className="projectsList__projectsButton">
                <a
                  className="projectsLinks"
                  href="https://github.com/MiriamPoveda/AwesomeProfileCards"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositorio
                </a>
              </button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eum quod aliquid totam reiciendis corrupti est rerum
                sint quam. Magnam libero accusamus praesentium quasi itaque,
                iure voluptatum atque recusandae? Harum!
              </p>
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
              <button className="projectsList__projectsButton">
                <a
                  className="projectsLinks"
                  href="https://github.com/MiriamPoveda/Refactorizadas"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositorio
                </a>
              </button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eum quod aliquid totam reiciendis corrupti est rerum
                sint quam. Magnam libero accusamus praesentium quasi itaque,
                iure voluptatum atque recusandae? Harum!
              </p>
            </li>
          </ul>
          <p className="projectsMain__projectsTitle">INDIVIDUALES</p>
          <ul className="projectsList">
            <li className="projectsList__projectsElement">
              <a
                href="https://miriampoveda.github.io/OpenSpaces/"
                title="Open Spaces"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="projectsList__projectsImages"
                  src={spaces}
                  alt="Proyecto Open Spaces"
                />
              </a>
              <button className="projectsList__projectsButton">
                <a
                  className="projectsLinks"
                  href="https://github.com/MiriamPoveda/OpenSpaces"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositorio
                </a>
              </button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eum quod aliquid totam reiciendis corrupti est rerum
                sint quam. Magnam libero accusamus praesentium quasi itaque,
                iure voluptatum atque recusandae? Harum!
              </p>
            </li>
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
              <button className="projectsList__projectsButton">
                <a
                  className="projectsLinks"
                  href="https://github.com/MiriamPoveda/CocktailsFinder"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositorio
                </a>
              </button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eum quod aliquid totam reiciendis corrupti est rerum
                sint quam. Magnam libero accusamus praesentium quasi itaque,
                iure voluptatum atque recusandae? Harum!
              </p>
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
              <button className="projectsList__projectsButton">
                <a
                  className="projectsLinks"
                  href="https://github.com/MiriamPoveda/OwenWilsonWow"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositorio
                </a>
              </button>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis eum quod aliquid totam reiciendis corrupti est rerum
                sint quam. Magnam libero accusamus praesentium quasi itaque,
                iure voluptatum atque recusandae? Harum!
              </p>
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
