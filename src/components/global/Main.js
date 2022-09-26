import "../../styles/global/Main.scss";
import trailer from "../multimedia/trailer.mp4";

function Main() {
  return (
    <main>
      <video playsInline autoPlay muted loop className="trailer">
        <source src={trailer} type="video/mp4"></source>
      </video>
    </main>
  );
}

export default Main;
