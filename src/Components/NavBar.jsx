import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utills/Firebase";
import { useState } from "react";
import Login from "../pages/Login";
import logo from "../assets/logo.png";
import { LoginModal } from "../pages/LoginModal";

function NavBar() {
  let token = JSON.parse(localStorage.getItem("token"));
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <section className="navbar width98">
      <img alt="Logo" src={logo} />
      <nav>
        <ul className="nav-menu">
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
        <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {token !== null ? (
          <div className="logout__nav" onClick={handleLogout}>
            {/* <FaUserCircle /> */}
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
            {/* <FaUserCircle /> */}
            <label>Sign In</label>
          </div>
        )}
      </nav>
    </section>
  );
}

export default NavBar;
