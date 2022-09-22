// import { Routes, Route } from 'react-router-dom';
import "../styles/App.scss";
import video from "../multimedia/trailer.mp4";

function App() {
  return (
    <div>
      <header className="header">
        <p>Miriam Poveda</p>
        <ul className="headerList">
          <li>Sobre mí</li>
          <li>Proyectos</li>
          <li>Contacto</li>
        </ul>
      </header>
      <main>
        <video playsInline autoPlay muted loop className="trailer">
          <source src={video} type="video/mp4"></source>
        </video>
      </main>
      <footer className="footer">
        <p>Miriam Poveda ©2022</p>
      </footer>
    </div>
  );
}

export default App;
