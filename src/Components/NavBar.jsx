import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utills/Firebase";

import { useState, useEffect, useCallback } from "react";

import Login from "../pages/Login";
import logo from "../assets/logo.png";
import { LoginModal } from "../pages/LoginModal";

function NavBar() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        setIsLoginModalOpen(false);
        navigate("/");
      })
      .catch((error) => console.error("Error signing out:", error));
  }, [navigate]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleClose = (event) => {
      if (
        !event.target.closest(".nav-menu") &&
        !event.target.closest(".hamburger-menu")
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener("click", handleClose);
      document.addEventListener("scroll", closeMenu);
    } else {
      document.removeEventListener("click", handleClose);
      document.removeEventListener("scroll", closeMenu);
    }

    return () => {
      document.removeEventListener("click", handleClose);
      document.removeEventListener("scroll", closeMenu);
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <section className="navbar width98">
      <img alt="Logo" src={logo} />

      <nav>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          {/* <li>
            <a href="#project">Projects</a>
          </li> */}

          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="/resume" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </li>
        </ul>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {token ? (
          <div className="logout__nav" onClick={handleLogout}>
            <label>Sign Out</label>
          </div>
        ) : (
          <div className="login__nav" onClick={() => setIsLoginModalOpen(true)}>
            <LoginModal
              isOpen={isLoginModalOpen}
              onClose={() => setIsLoginModalOpen(false)}
            >
              <Login />
            </LoginModal>
            <label>Sign In</label>
          </div>
        )}
      </nav>
    </section>
  );
}

export default NavBar;
