import React from "react";

function ExperienceComponent({
  timeFrame,
  title,
  company,
  projectDetails,
  techStack,
}) {
  return (
    <div className="experience">
      <div className="timeFrame">
        <label>{timeFrame}</label>
      </div>
      <div className="detailExperience">
        <h4>
          {title} - {company}
        </h4>
        <div className="projectDetails">
          <p>{projectDetails}</p>
        </div>
        <div className="techStack">
          <ul>
            {techStack.map((tech) => (
              <li key={tech.id}>{tech.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ExperienceComponent;
