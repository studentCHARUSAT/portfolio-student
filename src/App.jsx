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

        {/* Navigation */}
        <NavBar />

        {/* Dark / Light mode */}
        <button
          className="theme-button"
          onClick={() => setDarkMode((previous) => !previous)}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
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