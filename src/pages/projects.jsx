import React from "react";
import Project from "../components/project";
import style from "../styles/projects.module.css";
import glossierImg from "../pages/Images/gloosier.png";
const Projects = () => {
  return (
    <div id="projects" className={`  ${style.projects}`}>
      <div className={` ${style.container}`}>
        <div className={`project-card ${style.project}`}>
          <h1 className={`project-title`}>Myntra Clone</h1>
          <div className={`${style.imgDiv}`}>
            <div className={`${style.deskImgDiv}`}>
              <img src={glossierImg} alt="" />
            </div>
            <div className={`${style.phoneImgDiv}`}>
              <img src={glossierImg} alt="" />
            </div>
          </div>
          <p className={` project-description ${style.description1}`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum
            repellat delectus obcaecati! Quibusdam error dignissimos alias
            beatae, aliquid voluptatibus accusantium! Nulla asperiores iure nemo
            error. Et assumenda repellendus dicta. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Fugit illum repellat delectus
            obcaecati! Quibusdam error dignissimos alias beatae, aliquid
            voluptatibus accusantium! Nulla asperiores iure nemo error. Et
            assumenda repellendus dicta.
          </p>
          <div className={` project-tech-stack ${style.techDiv}`}>
            <p> HTML </p>
            <p> CSS </p>
            <p> JavaScript </p>
            <p> Local Storage </p>
          </div>
          <div>
            <button className={`project-github-link`}>github</button>
            <button className={`project-deployed-link`}>preview</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* <div className={`${style.right1}`}>
<h1 className={`project-title`} >Myntra Clone</h1>

<div className={`${style.inner1}`}>
  <p className={` project-description ${style.description1}`}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
    illum repellat delectus obcaecati! Quibusdam error dignissimos
    alias beatae, aliquid voluptatibus accusantium! Nulla asperiores
    iure nemo error. Et assumenda repellendus dicta. Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Fugit illum
    repellat delectus obcaecati! Quibusdam error dignissimos alias
    beatae, aliquid voluptatibus accusantium! Nulla asperiores iure
    nemo error. Et assumenda repellendus dicta.
  </p>
</div>

<div className={` project-tech-stack ${style.techDiv}`}>
  <p> HTML </p>
  <p> CSS </p>
  <p> JavaScript </p>
  <p> Local Storage </p>
</div>
<div>
  <button className={`project-github-link`} >github</button>
  <button className={`project-deployed-link`} >preview</button>
</div>
</div> */
}
