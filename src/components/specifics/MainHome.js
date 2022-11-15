/* Multimedia */
import trailer from "../../multimedia/wallpaper/trailer.mp4";

function MainHome() {
  return (
    <main className="main">
      <div className="presentation">
        <img
          className="presentation__textPresentation"
          src="https://readme-typing-svg.herokuapp.com?font=Inconsolata&size=18&weight=700&pause=1000&color=1FBAA3&center=true&vCenter=true&lines=¡Hola+terr%C3%ADcola!;Soy+Miriam,+desarrolladora+Front-End+Jr;Te+invito+a+visitar+mi+portfolio;¡Gracias+por+pasarte!"
          alt="Typing SVG"
        />
      </div>
      <video playsInline autoPlay muted loop className="trailer">
        <source src={trailer} type="video/mp4"></source>
      </video>
    </main>
  );
}

export default MainHome;
