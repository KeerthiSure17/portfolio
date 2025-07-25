import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-xl font-bold text-white">
            KEERTHI SURE
          </Link>
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-white pb-1 transition-colors"
                  : "text-gray-300 hover:text-white transition-colors"
              }
            >
              Home
            </NavLink>
            <NavLink
              href="#about"
              to="/about"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-white pb-1 transition-colors"
                  : "text-gray-300 hover:text-white transition-colors"
              }
            >
              About
            </NavLink>
            <NavLink
              href="#projects"
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-white pb-1 transition-colors"
                  : "text-gray-300 hover:text-white transition-colors"
              }
            >
              Projects
            </NavLink>
            <NavLink
              href="#contact"
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-white pb-1 transition-colors"
                  : "text-gray-300 hover:text-white transition-colors"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
