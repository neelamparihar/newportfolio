import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Certificate from "./components/Certificate";
import Dsa from "./components/Dsa";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Certificate />
      <Dsa />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
