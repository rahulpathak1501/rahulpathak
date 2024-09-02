import { useEffect } from "react";

function Skills() {
  // useEffect(() => {
  //   localStorage.setItem("path", "/skills");
  // }, []);
  return (
    <section id="skills" className="what-I-know width98">
      <h1>What I Know</h1>
      <div className="skill-type">
        <div className="frontend">
          <label>
            <h3>Frontend</h3>
          </label>
          <div className="skill">
            <span>HTML</span>
          </div>
          <div className="skill">
            <span>CSS</span>
          </div>
          <div className="skill">
            <span>Javascript</span>
          </div>
          <div className="skill">
            <span>Typescript</span>
          </div>
          <div className="skill">
            <span>React.Js</span>
          </div>
        </div>
        <div className="backend">
          <label>
            <h3>Backend</h3>
          </label>
          <div className="skill">
            <span>Node.js</span>
          </div>
          <div className="skill">
            <span>Express.js</span>
          </div>
        </div>
        <div className="database">
          <label>
            <h3>Database</h3>
          </label>
          <div className="skill">
            <span>MySql</span>
          </div>
          <div className="skill">
            <span>PostgreSQL</span>
          </div>
          <div className="skill">
            <span>MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
