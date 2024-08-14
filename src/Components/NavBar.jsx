import { Link, useNavigate, useLocation } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utills/Firebase";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";

function NavBar() {
  let token = JSON.parse(localStorage.getItem("token"));
  const [isClickedSigin, setIsClickedSigin] = useState(false);
  const navigate = useNavigate();
  const logout = () => {
    setIsClickedSigin(false);
    const navigation = "#";
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        navigate("#");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  useEffect(() => {
    if (
      token === null &&
      location.pathname !== "/login" &&
      isClickedSigin === true
    ) {
      console.log("inside Navbar useeffect");
      navigate("/login");
    }
  }, [token, location, navigate]);

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
      </nav>

      {token !== null ? (
        <div className="logout__nav" onClick={logout}>
          <FaUserCircle />
          <label>Sign Out</label>
        </div>
      ) : (
        <div className="login__nav" onClick={() => setIsClickedSigin(true)}>
          <Link to="/login">
            <FaUserCircle />
            <label>Sign In</label>
          </Link>
        </div>
      )}
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
