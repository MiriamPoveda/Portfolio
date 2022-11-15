/* Multimedia */
import background from "../../multimedia/wallpaper/background.gif";

function MainDetails() {
  return (
    <>
      <div className="mainDetails">
        <img
          className="mainDetails__background"
          src={background}
          alt="Fondo de pantalla"
        />
      </div>
    </>
  );
}

export default MainDetails;
