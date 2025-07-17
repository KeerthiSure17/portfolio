import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import "./index.css";
import { NavBar } from "./components/NavBar";
import { MobileMenu } from "./components/MobileMenu";
import Home from "./components/Sections/Home";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Projects />} path="/projects" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Home />} path="*" />
        </Routes>
      </div>
    </>
  );
}

export default App;
