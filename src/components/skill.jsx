import React from "react";
import style from "../styles/skills.module.css";

const Skill = ({ img, name }) => {
  return (
    <div className={`skills-card ${style.skillDiv}`}>
      <div>
        <img className={`skills-card-img ${style.img}`} src={img} alt="" />
      </div>
      <h3 className={`skills-card-name ${style.name}`}>{name}</h3>
    </div>
  );
};

export default Skill;
