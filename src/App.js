import "./App.css";
import Home from "./home/Home.jsx";
import About from "./about/About.jsx";
import Education from "./education/Education.jsx";
import Project from "./project/Project.jsx";
import Contact from "./contact/Contact.jsx";
import Nav from "./sideNav/Nav.jsx";

function App() {
  return (
    <main>
      <Nav />
      <Home />
      <About />
      <Education />
      <Project />
      <Contact />
    </main>
  );
}

export default App;
