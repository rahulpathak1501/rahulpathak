import React from "react";
import { Link } from "react-router-dom";
import movieManager from "../assets/movieManager.jpg";
import spotify from "../assets/spotify.png";
import ecommercer from "../assets/ecommerce.png";

// Array to store project data
const projects = [
  {
    id: "movie-manager",
    image: movieManager,
    title: "Movie Manager",
    description: "React Hooks, JavaScript, HTML",
    link: "#", // Add actual link if needed
  },
  {
    id: "spotify-clone",
    image: spotify,
    title: "Spotify Clone",
    description: "React, Styled-components, Axios",
    link: "#", // Add actual link if needed
  },
  {
    id: "ecommerce",
    image: ecommercer,
    title: "Ecommerce",
    description: "React Hooks, JavaScript, HTML",
    link: "#", // Add actual link if needed
  },
];

function Projects() {
  return (
    <section id="project" className="width98">
      <h1 id="project-h1">Projects</h1>
      <div className="projects">
        {projects.map(({ id, image, title, description, link }) => (
          <div className="project-card" key={id}>
            <div className="project-card-img">
              <img alt={title} src={image} id={id} />
            </div>
            <div className="project-card-content">
              <h3>{title}</h3>
              <div>{description}</div>
            </div>
          </div>
          // <Link key={id} to={link} target="_blank">
          //   <div className="project-card">
          //     <div className="project-card-img">
          //       <img alt={title} src={image} id={id} />
          //     </div>
          //     <div className="project-card-content">
          //       <h3>{title}</h3>
          //       <div>{description}</div>
          //     </div>
          //   </div>
          // </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
