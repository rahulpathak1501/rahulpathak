import { useEffect } from "react";

function Skills() {
  // useEffect(() => {
  //   localStorage.setItem("path", "/skills");
  // }, []);
  return (
    <div id="skills" className="what-I-know">
      <h1>What I Know</h1>
      <div className="skill-type">
        <div className="frontend">
          <label>
            <h3>Frontend</h3>
          </label>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">Javascript</div>
          <div className="skill">Typescript</div>
          <div className="skill">React.Js</div>
        </div>
        <div className="backend">
          <label>
            <h3>Backend</h3>
          </label>
          <div className="skill">Node.js</div>
          <div className="skill">Express.js</div>
        </div>
        <div className="database">
          <label>
            <h3>Database</h3>
          </label>
          <div className="skill">MySql</div>
          <div className="skill">PostgreSQL</div>
          <div className="skill">MongoDB</div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
