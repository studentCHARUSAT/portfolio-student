import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git and GitHub"
  ];

  return (
    <div>
      <NavBar activeSection="Home" />

      <Header
        name="Aaron"
        themeColor="#2563eb"
      />

      <About
        bio="I am a student learning web development and React."
      />

      <Skills
        skillList={skills}
      />
      
      <Projects />

      <Footer
        email="24dce072@charusat.edu.in"
      />
    </div>
  );
}

export default App;