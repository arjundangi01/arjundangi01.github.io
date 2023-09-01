import React from "react";
import Skill from "../components/skill";
import style from "../styles/skills.module.css";
import reactImg from "./Images/react-400.png";
import htmlImg from "./Images/html.png";
import cssImg from "./Images/css.png";
import javaImg from "./Images/java.png";
import routerImg from "./Images/router3.png";
import reduxImg from "./Images/redux.png";
import nodeJSImg from "./Images/nodejs.png";
import mongoJSImg from "./Images/mongo.png";

const Skills = () => {
  return (
    <div id="skills" className={`${style.skillsContainer}`}>
      <div className={`${style.container}`}>
        <Skill img={htmlImg}name={"HTML"} />
        <Skill img={cssImg} name={"CSS"}/>
        <Skill img={javaImg}name={"JAVASCRIPT"} />
        <Skill img={javaImg}name={"JAVA"} />
        <Skill img={reactImg}name={"React"} />
        <Skill img={routerImg}name={"Router"} />
        <Skill img={reduxImg} name={"Redux"}/>
        <Skill img={nodeJSImg}name={"Node Js"} />
        <Skill img={mongoJSImg} name={"Mongo"}/>
        <Skill img={htmlImg}name={"HTML"} />
        <Skill img={htmlImg}name={"HTML"} />
        <Skill img={htmlImg} name={"HTML"} />
      </div>
    </div>
  );
};

export default Skills;
