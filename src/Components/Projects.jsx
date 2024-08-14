import { Link } from "react-router-dom";
import movieManager from "../assests/movieManager.jpg";
import spotify from "../assests/spotify.png";
import ecommercer from "../assests/ecommerce.png";
import { useEffect } from "react";

function Projects() {
  // useEffect(() => {
  //   localStorage.setItem("path", "/projects");
  // }, []);
  return (
    <div id="project">
      <h1 id="project-h1">Projects</h1>
      <div className="projects">
        {/* <Link target="_blank" to="https://ez-snippet.vercel.app/"> */}
        <div className="project-card">
          <div className="project-card-img">
            <img alt="Movie Manager" src={movieManager} id="movie_manager" />
          </div>
          <div className="project-card-content">
            <h3>Movie Manager</h3>
            <div>React Hooks, Javascript, Html</div>
          </div>
        </div>
        {/* </Link>
        <Link target="_blank" to="https://ez-snippet.vercel.app/"> */}
        <div className="project-card">
          <div className="project-card-img">
            <img alt="Spotify Clone" src={spotify} id="spotify-clone" />
          </div>
          <div className="project-card-content">
            <h3>Spotify Clone</h3>
            <div>React, Styled-components, Axios</div>
          </div>
        </div>
        {/* </Link>
        <Link target="_blank" to="https://ez-snippet.vercel.app/"> */}
        <div className="project-card">
          <div className="project-card-img">
            <img alt="Ecommerce" src={ecommercer} id="ecommerce" />
          </div>
          <div className="project-card-content">
            <h3>Ecommerce</h3>
            <div>React Hooks, Javascript, Html</div>
          </div>
        </div>
        {/* </Link> */}
        {/* <Link target="_blank" to="https://ez-snippet.vercel.app/">
          <div className="project-card">
            <div className="project-card-img">
              <img alt="Movie Manager" src={movieManager} id="movie_manager" />
            </div>
            <div className="project-card-content">
              <h3>Movie Manager</h3>
              <div>React Hooks, Javascript, Html</div>
            </div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default Projects;
