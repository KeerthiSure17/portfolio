import { useEffect } from "react";
import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() =>
          setMenuOpen((prev) => {
            !prev;
          })
        }
        className="absolute top-6 text-white text-3xl focus:outline-none cursor-pointer "
        aria-label="Close Menu"
      >
        &times;
      </button>
      <Link
        href="#home"
        to="/"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Home
      </Link>
      <Link
        href="#about"
        to="/about"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        About
      </Link>
      <Link
        href="#projects"
        to="/projects"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Projects
      </Link>
      <Link
        href="#contact"
        to="/contact"
        onClick={() => setMenuOpen(false)}
        className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        Contact
      </Link>
    </div>
  );
};
