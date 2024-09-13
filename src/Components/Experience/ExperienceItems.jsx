import React, { useState, memo } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ExperienceItem = memo(
  ({ jobTitle, company, fromDate, toDate, responsibilities }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleResponsibility = () => {
      setIsVisible(!isVisible);
    };

    return (
      <div className="experience-item">
        <div className="heading">
          <div className="job-heading">
            <span className="job-title">{jobTitle}</span> @{" "}
            <span className="company">{company}</span>
          </div>
          <div className="tenure">
            <span className="from-date">{fromDate}</span> -{" "}
            <span className="to-date">{toDate}</span>
          </div>
          <button className="toggle-button" onClick={toggleResponsibility}>
            {isVisible ? <FaArrowUp /> : <FaArrowDown />}
          </button>
        </div>

        {isVisible && (
          <div className={`job-responsibility fade-in`}>
            <ul>
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

export default ExperienceItem;
