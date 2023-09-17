import React from "react";
import Project from "../components/project";
import style from "../styles/projects.module.css";
import glossierImg from "../pages/Images/gloosier.png";
import gssImg from "./Images/gloosier s.png";
import myntraImg from "./Images/myntra.png";
import { motion, Variants } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className={`  ${style.projects}`}>
        <motion.h2
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.5,
        }}
        className={"sectionHeading"}
        data-outline="PROJECTS"
      >
        PROJECTS
      </motion.h2>
      <div className={` ${style.container}`}>
        <div className={`project-card ${style.project}`}>
          <div className={`${style.content}`}>
            <div className={`${style.contentLeft}`}>
              <div>
                <h1 className={`project-title`}> Myntra Clone</h1>
                <h3 className={`${style.subTitle}`}>An E-Commerce Website</h3>
              </div>
              <div className={style.btnDiv}>
                <button className={`project-github-link ${style.button}`}>
                  <span className={style.buttonContent}>Github </span>
                </button>
                <button className={`project-deployed-link ${style.button}`}>
                  <span className={style.buttonContent}>Preview </span>
                </button>
              </div>
            </div>
            <div className={`${style.contentRight}`}>
              <div className={`${style.inner1}`}>
                <div className={` project-description ${style.description1}`}>
                  <p>                   
                    Build clone of myntra.com in 7 days along with a team of 5
                    members.
                  </p>  
                  <p>Features :</p>
                  <li>Login</li>
                  <li>Signup</li>
                  <li>Cart Page</li>
                  <li>Checkout Page</li>
                  <p>Area of Responsibility : Developed the product page,
                  cart page and wishlist page</p>
                  
                </div>
              </div>
              <div>
                <h4>Tech Stack Used</h4>
              <div className={` project-tech-stack ${style.techDiv}`}>
                <p> HTML </p>
                <p> CSS </p>
                <p> JavaScript </p>
                <p> Local Storage </p>
                </div>
                </div>
            </div>
          </div>
          <div className={`${style.imgDiv}`}>
            <div className={`${style.deskImgDiv}`}>
              <img src={glossierImg} alt="" />
            </div>
            <div className={`${style.phoneImgDiv}`}>
              <img src={gssImg} alt="" />
            </div>
          </div>
        </div>

        {/*  */}
     
        {/*  */}
      </div>
    </div>
  );
};

export default Projects;


