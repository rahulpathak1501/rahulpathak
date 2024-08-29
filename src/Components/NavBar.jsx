import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utills/Firebase";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import Login from "../pages/Login";
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
    <div className="NavBar">
      <img alt="Logo" />
      <nav>
        <ul className="nav-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experiences">Experiences</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
    </div>
  );
}

export default NavBar;

{
  /* <nav>
        <ul className="nav-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/experiences">Experiences</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="hamburger-menu">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav> */
}
