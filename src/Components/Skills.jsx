import React from "react";
import "../CSSFiles/skills.css";

const Skills = () => {
  return (
    <section
      className="intro text-center section-padding resume-section p-3 p-lg-5 d-flex flex-column"
      id="skills"
    >
      <div className="my-auto">
        <h1 className="arrow">Skills</h1>

        <div className="subheading mb-3">Programming Languages &amp; Tools</div>
        <ul className="list-inline list-icons">
          <li className="list-inline-item">
            <i className="devicon-html5-plain colored"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-css3-plain colored"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-javascript-plain colored"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-jquery-plain colored"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-sass-original colored"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-bootstrap-plain colored"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-wordpress-plain colored"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-grunt-plain colored"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-gulp-plain colored"></i>
          </li>
          <li className="list-inline-item">
            <i className="devicon-npm-original-wordmark colored"></i>
          </li>
        </ul>

        <div className="subheading mb-3">Workflow</div>
        <ul className="fa-ul mb-0">
          <li>
            <i className="fa-li fa fa-check"></i>
            <span> Mobile-First, Responsive Design</span>
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            <span>Cross Browser Testing &amp; Debugging</span>
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            <span>Cross Functional Teams</span>
          </li>
          <li>
            <i className="fa-li fa fa-check"></i>
            <span>Agile Development &amp; Scrum</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
