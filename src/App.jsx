import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import AnimatedBackground from "./components/AnimatedBackground";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <>
      {/* Animated background stays behind the website */}
      <AnimatedBackground />

      <div className="app">
        <NavBar />

        {/* Dark / Light mode */}
        <button
          className="theme-button"
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          onClick={() => setDarkMode((previous) => !previous)}
        >
          <span aria-hidden="true">{darkMode ? "Light" : "Dark"}</span> mode
        </button>

        {/* Page content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

      </div>
    </>
  );
}

export default App;