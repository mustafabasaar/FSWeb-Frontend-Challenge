import { useContext } from "react";
import { SiteContext } from "../contexts/SiteContext";
function Skills() {
  const { store } = useContext(SiteContext);
  return (
    <div className="skills-container">
      <h1 className="skill-title">{store.baslik.skills}</h1>
      <div className="skill-explanation-area">
        <div>
          <h3>Java Script</h3>
          <p>
            JavaScript is a versatile programming language widely used for
            building interactive and dynamic web applications{" "}
          </p>
        </div>
        <div>
          <h3>React.Js</h3>
          <p>
            {" "}
            "React is a JavaScript library for building user interfaces, known
            for its component-based architecture that simplifies the development
            of interactive and reusable UI elements."
          </p>
        </div>
        <div>
          <h3>JAVA</h3>
          <p>
            Java is a high-level, object-oriented programming language that is
            designed to be platform-independent, allowing developers to write
            code once and run it on any device that supports Java{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Skills;
