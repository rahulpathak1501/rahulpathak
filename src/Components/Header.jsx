import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../Utills/Firebase";
import Login from "../pages/Login";
import { LoginModal } from "../pages/LoginModal";
import RotatingText from "../SupportiveComponents/RotatingText";
import "../CSSFiles/header.css";

const Header = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  // const [isClicked, setIsClicked] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const texts = ["Web Designer", "Photographer", "3D Artist"];
  const colors = ["#E04343", "#FFE800", "#4CAF50"];
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function menuButtonHandler() {
    setIsOpen(!isOpen);
  }

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        setIsLoginModalOpen(false);
        navigate("/");
      })
      .catch((error) => console.error("Error signing out:", error));
  };

  return (
    <header id="home">
      <div className="container-fluid">
        <div className="row">
          <div className={`menu-wrap ${isOpen ? "show-menu" : ""}`}>
            <nav className={isOpen ? "show-menu" : "menu"}>
              <div className="icon-list">
                <a href="#home">
                  <i className="fa fa-fw fa-home"></i>
                  <span>Home</span>
                </a>
                <a href="#about">
                  <i className="fa fa-fw fa-quote-left"></i>
                  <span>About</span>
                </a>
                <a href="#skills">
                  <i className="fa fa-fw fa-globe"></i>
                  <span>Skills</span>
                </a>
                <a href="#experiences">
                  <i className="fa fa-fw fa-picture-o"></i>
                  <span>Experiences</span>
                </a>
                <a href="#contact">
                  <i className="fa fa-fw fa-envelope-o"></i>
                  <span>Contact</span>
                </a>
                <a href="/resume" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-fw fa-envelope-o"></i>
                  <span>Resume</span>
                </a>
                {token ? (
                  <a href="#" onClick={handleLogout}>
                    <i className="fa fa-fw fa-envelope-o"></i>
                    <span>Sign out</span>
                  </a>
                ) : (
                  <a href="#" onClick={() => setIsLoginModalOpen(true)}>
                    <i className="fa fa-fw fa-envelope-o"></i>
                    <LoginModal
                      isOpen={isLoginModalOpen}
                      onClose={() => setIsLoginModalOpen(false)}
                    >
                      <Login />
                    </LoginModal>
                    <span>Sign In</span>
                  </a>
                )}
                {/* {token ? (
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
        )} */}
              </div>
            </nav>
          </div>
          <button
            className="menu-button"
            id="open-button"
            onClick={menuButtonHandler}
          ></button>
        </div>
      </div>

      <section className="hero" id="hero">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-right navicon">
              <a id="nav-toggle" className="nav_slide_button" href="#">
                <span></span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-1 inner">
              <h1 className="animated fadeInDown">
                R<span style={{ color: "#E04343" }}>a</span>hul
                <br />
                <span>
                  P<span style={{ color: "#FFE800" }}>a</span>thak
                </span>
              </h1>
              <h3 className="animated fadeInUp delay-05s">
                <RotatingText items={texts} colors={colors} />
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <a href="#about" className="scrollto wow fadeInUp delay-5s">
                <p>SEE MORE</p>
                <p className="scrollto--arrow">
                  <img
                    src="src\assets\img\scroll-down.png"
                    alt="scroll down arrow"
                  />
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
