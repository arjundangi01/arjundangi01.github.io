import React from "react";
import style from "../styles/projects.module.css";
import glossierImg from "../pages/Images/gloosier.png";
import gssImg from "../pages/Images/gloosier s.png";
const Project = ({
  title,
  subTitle,
  img1,
  img2,
  desc,
  techUsed,
  features,
  resp,
  git,
  preview,
}) => {
  return (
    <div className={`project-card ${style.project}`}>
      <div className={`${style.content}`}>
        <div className={`${style.contentLeft}`}>
          <div>
            <h1 className={`project-title`}>{title} </h1>
            <h3 className={`${style.subTitle}`}>{subTitle}</h3>
          </div>
          <div className={style.btnDiv}>
            <a href={git }>
            <button className={`project-github-link ${style.button}`}>
              <span className={style.buttonContent}>Github </span>
            </button>
            </a>
            <a href={preview} target="blank" >
            <button className={`project-deployed-link ${style.button}`}>
              <span className={style.buttonContent}>Preview </span>
            </button>
            </a>
         
          </div>
        </div>
        <div className={`${style.contentRight}`}>
          <div className={`${style.inner1}`}>
            <div className={` project-description ${style.description1}`}>
              <p>
                { desc}
              </p>
              <p>Features :</p>
              {features.map((ele) => (
                <li> {ele} </li>
              ))}
       
              <p>
                Area of Responsibility :{resp}
              </p>
            </div>
          </div>
          <div>
            <h4>Tech Stack Used</h4>
            <div className={` project-tech-stack ${style.techDiv}`}>
              {techUsed.map((ele) => (
                <p> {ele} </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.imgDiv}`}>
        <div className={`${style.deskImgDiv}`}>
          <img src={img1} alt="" />
        </div>
        <div className={`${style.phoneImgDiv}`}>
          <img src={img2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Project;
