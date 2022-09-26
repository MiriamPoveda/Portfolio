import { Routes, Route } from "react-router-dom";
/* Components */
import Header from "./global/Header";
import Main from "./global/Main";
import Footer from "./global/Footer";
import AboutMe from "../components/details/AboutMe";
import Projects from "../components/details/Projects";
import Contact from "../components/details/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
