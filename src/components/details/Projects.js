/* Components */
import MainDetails from "../specifics/MainDetails";
import Footer from "../global/Footer";

function Projects() {
  return (
    <>
      <main className="projectsMain">
        <div>
          <div>
            <div>GRUPALES</div>
          </div>
          <div>
            <div>INDIVIDUALES</div>
          </div>
        </div>
        <MainDetails />
      </main>
      <Footer />
    </>
  );
}

export default Projects;
