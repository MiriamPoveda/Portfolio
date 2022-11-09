/* Styles */
import "../../styles/global/MainDetails.scss";
/* Multimedia */
import background from "../../multimedia/background.gif";

function MainDetails() {
  return (
    <>
      <div className="MainDetails">
        <img
          className="MainDetails__background"
          src={background}
          alt="Fondo de pantalla"
        />
      </div>
    </>
  );
}

export default MainDetails;
