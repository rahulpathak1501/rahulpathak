import React, { useEffect } from "react";
import ExperienceComponent from "./ExperienceComponent";

function Experiences() {
  // useEffect(() => {
  //   localStorage.setItem("path", "/experiences");
  // }, []);
  const experiences = [
    {
      timeFrame: "2024 - Present",
      title: "System Engineer",
      company: "Tata Consultancy Services",
      projectDetails:
        "My contributions as a ReactJS Developer garnered great user engagement and application performance increase by implementing the new features that increased duration on-site, click-through rate (CTR), etc. Built the front-end with reusable components and libraries to speed up development and standardization of UI elements. Overall, my optimization efforts have resulted in improved page load times and high Google PageSpeed scores. I also managed the rest of application state with Redux, allowing us to double the number of users who could make requests at once without suffering from performance issues. In addition, I have implemented RESTful services for better data interchange and JWT for secure authentication sessions.",
      techStack: [
        { id: "1", name: "React" },
        { id: "2", name: "Redux" },
        { id: "3", name: "RESTful APIs" },
        { id: "4", name: "JWT" },
      ],
    },
    {
      timeFrame: "2019 - 2023",
      title: "Project Engineer",
      company: "Wipro Technologies",
      projectDetails:
        "As a ReactJS Developer, I developed user-friendly web applications using ReactJS technology and JavaScript ES6 to create dynamic interfaces. My experience includes working with AJAX, JSON, and various JavaScript plugins. I optimized the application by implementing advanced ReactJS features and collaborated closely with UX and UI teams. Using TypeScript reduced runtime errors, and I managed state with Redux or the React Context API. I integrated RESTful APIs to enhance individual user experiences and manipulated the Document Object Model with grid-based values. My approach to optimizing efficiency included Agile methodologies and supporting production. I wrote unit tests in Jest to ensure code reliability and engaged in software module design and implementation, ensuring project goals were met through effective client interaction.",
      techStack: [
        { id: "1", name: "JavaScript" },
        { id: "2", name: "HTML/CSS" },
        { id: "3", name: "React.js" },
        { id: "4", name: "React-Router" },
      ],
    },
  ];

  return (
    <div id="experiences">
      {experiences.map((experience, index) => (
        <ExperienceComponent
          key={index}
          timeFrame={experience.timeFrame}
          title={experience.title}
          company={experience.company}
          projectDetails={experience.projectDetails}
          techStack={experience.techStack}
        />
      ))}
    </div>
  );
}

export default Experiences;
